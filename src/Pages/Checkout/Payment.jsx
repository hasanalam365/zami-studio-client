import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckOutForm from "./CheckOutForm";
import { Helmet } from "react-helmet-async";

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);

const Payment = () => {
  const { state } = useLocation();
  const { plan, price } = state || {};

  return (
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-black via-red-950 to-black">

      <Helmet>
        <title>Payment | Faces Solutions</title>
      </Helmet>

      <div className="grid w-full max-w-5xl gap-8 p-8 border border-red-500/20 md:grid-cols-2 bg-black/60 backdrop-blur-xl rounded-3xl">

        {/* ORDER SUMMARY */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold text-red-500">
            Order Summary
          </h2>

          <div className="p-6 border border-red-400 ">
            <p className="font-semibold text-white">{plan}</p>
            <p className="mt-4 text-4xl font-extrabold text-red-400">
              £{price}
            </p>
          </div>

          <p className="mt-6 text-sm text-gray-400">
            Secure payment powered by Stripe 🔒
          </p>
        </div>

        {/* PAYMENT FORM */}
        <Elements stripe={stripePromise}>
          <CheckOutForm plan={plan} price={price} />
        </Elements>

      </div>
    </div>
  );
};

export default Payment;