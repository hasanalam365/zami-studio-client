import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";

const CheckOutForm = ({ plan, price }) => {

  const stripe = useStripe();
  const elements = useElements();
  const axiosPublic = useAxiosPublic();

  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    note: "",
  });

  /* CREATE PAYMENT INTENT */
  useEffect(() => {
    if (!price) return;

    axiosPublic
      .post("/payments/create-payment-intent", {
        amount: Number(price),
      })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
      })
      .catch(() => {
        Swal.fire("Error", "Payment initialization failed", "error");
      });

  }, [price, axiosPublic]);

  /* EMAIL SEND */
  const sendEmail = async (paymentId) => {

    const templateParams = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company || "N/A",
      message: form.note || "No message",
      plan,
      price: `$${price}`,
      transaction_id: paymentId,
      time: new Date().toLocaleString(),
    };

    return emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );
  };

  /* SUBMIT PAYMENT */
  const handleSubmit = async (e) => {

    e.preventDefault();

    // EMAIL VALIDATION
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(form.email)) {
      Swal.fire("Invalid Email", "Please enter a valid email address", "warning");
      return;
    }

    if (!stripe || !elements || !clientSecret) {
      Swal.fire("Wait", "Payment is not ready yet", "info");
      return;
    }

    setLoading(true);

    const card = elements.getElement(CardElement);

    const { paymentIntent, error } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: form.name,
            email: form.email,
            address: { country: "GB" },
            
          
          },
        },
      });

    if (error) {
      Swal.fire("Payment Failed", error.message, "error");
      setLoading(false);
      return;
    }

    if (paymentIntent.status === "succeeded") {

      /* SAVE ORDER */
      await axiosPublic.post("/orders", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        company: form.company,
        note: form.note,
        plan,
        price,
        transactionId: paymentIntent.id,
        status: "pending",
        date: new Date(),
      });

      /* SEND EMAIL */
      try {
        await sendEmail(paymentIntent.id);
      } catch (err) {
        console.error("Email failed", err);
      }

      Swal.fire({
        title: "Payment Successful 🎉",
        html: `
          <b>Plan:</b> ${plan}<br/>
          <b>Amount:</b> £${price}<br/>
          <b>Transaction:</b><br/>
          <small>${paymentIntent.id}</small>
        `,
        icon: "success",
      });

      card.clear();
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">

      {["name", "email", "phone", "company"].map((field) => (
        <input
          key={field}
          type={field === "email" ? "email" : "text"}
          required={field !== "company"}
          placeholder={field.toUpperCase()}
          className="w-full px-4 py-3 text-white border rounded-xl bg-black/30 border-white/10"
          onChange={(e) =>
            setForm({ ...form, [field]: e.target.value })
          }
        />
      ))}

      <textarea
        placeholder="Project Details / Message"
        className="w-full px-4 py-3 text-white border rounded-xl bg-black/30 border-white/10"
        onChange={(e) =>
          setForm({ ...form, note: e.target.value })
        }
      />

      <div className="p-4 bg-white rounded-xl">
        <CardElement options={{ hidePostalCode: true }} />
      </div>

      <button
        disabled={loading}
        className="w-full py-4 text-lg font-bold text-white transition bg-red-600 rounded-xl"
      >
        {loading ? "Processing..." : `Pay $${price}`}
      </button>

    </form>
  );
};

export default CheckOutForm;