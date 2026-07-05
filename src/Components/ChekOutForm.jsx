import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState, useEffect } from "react";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";
import Swal from "sweetalert2";

const CheckOutForm = ({ plan, price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();
  const { user } = useAuth();

  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  // Send actual price (NOT multiplied)
  const amount = Number(price);

  // Create Payment Intent on load
  useEffect(() => {
    const createPaymentIntent = async () => {
      try {
        const res = await axiosPublic.post(
          "/create-payment-intent",
          { amount }
        );
        setClientSecret(res.data.clientSecret);
      } catch (err) {
        console.log(err);
        setError("Failed to initialize payment.");
      }
    };
    createPaymentIntent();
  }, [amount, axiosPublic]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements || !clientSecret) return;

    setLoading(true);
    setError("");

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card not loaded. Please try again.");
      setLoading(false);
      return;
    }

    // 1. Create Payment Method
    const { error: pmError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (pmError) {
      setError(pmError.message);
      setLoading(false);
      return;
    }

    // 2. Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false);
      return;
    }

    // 3. Success
    Swal.fire({
      title: `Subscribed to ${plan}`,
      html: `
        Amount Charged: <b>$${price}</b><br/>
        Transaction ID: <span style="color:#0A66C2">${paymentIntent.id}</span>
      `,
      icon: "success",
    });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6">
      <div className="p-4 bg-gray-200 rounded-lg">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": { color: "#aab7c4" },
              },
              invalid: { color: "#FF0000" },
            },
          }}
        />
      </div>

      <button
        className="w-full py-3 mt-4 font-bold text-white bg-green-600 rounded-lg"
        disabled={!stripe || loading}
      >
        {loading ? "Processing..." : `Pay $${price}`}
      </button>

      <p className="mt-2 text-center text-red-600">{error}</p>
    </form>
  );
};

export default CheckOutForm;
