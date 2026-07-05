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
    <div className="flex items-center justify-center min-h-screen text-white bg-gradient-to-br from-black via-gray-900 to-gray-800">
      
      <Helmet>
        <title>Payment | Faces Solutions</title>
      </Helmet>

      <div className="grid w-full max-w-5xl gap-8 p-8 md:grid-cols-2 bg-white/5 backdrop-blur-xl rounded-3xl">

        {/* Order Summary */}
        <div>
          <h2 className="mb-4 text-3xl font-extrabold">
            Order Summary
          </h2>

          <div className="p-6 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20">
            <p className="font-semibold">{plan}</p>
            <p className="mt-4 text-4xl font-extrabold">
              £{price}
            </p>
          </div>
        </div>

        {/* Stripe Payment */}
        <Elements stripe={stripePromise}>
          <CheckOutForm plan={plan} price={price} />
        </Elements>

      </div>
    </div>
  );
};

export default Payment;