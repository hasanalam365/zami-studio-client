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

  const amount = Number(price);

  useEffect(() => {
    const createPaymentIntent = async () => {
      const res = await axiosPublic.post("/create-payment-intent", { amount });
      setClientSecret(res.data.clientSecret);
    };
    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const card = elements.getElement(CardElement);

    const { error: pmError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (pmError) {
      setError(pmError.message);
      setLoading(false);
      return;
    }

    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      setError(confirmError.message);
      setLoading(false);
      return;
    }

    Swal.fire({
      title: "Payment Successful",
      html: `Plan: <b>${plan}</b><br/>ID: <span style="color:red">${paymentIntent.id}</span>`,
      icon: "success",
    });

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="p-5 bg-black border rounded-xl border-red-500/30">
        <CardElement
          options={{
            style: {
              base: {
                color: "#fff",
                fontSize: "16px",
                "::placeholder": { color: "#aaa" },
              },
              invalid: { color: "#ff4d4d" },
            },
          }}
        />
      </div>

      <button
        disabled={!stripe || loading}
        className="w-full py-3 font-bold text-white transition rounded-xl bg-gradient-to-r from-red-600 to-black hover:opacity-90"
      >
        {loading ? "Processing..." : `Pay £${price}`}
      </button>

      {error && (
        <p className="text-sm text-center text-red-500">{error}</p>
      )}
    </form>
  );
};

export default CheckOutForm;