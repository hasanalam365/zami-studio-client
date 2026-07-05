import React from "react";


const EmailTemplate = () => {
  return (
    <div className="w-full bg-[#eefef8] py-16 px-6 md:px-14 lg:px-20 rounded-xl" id="Email-Template">
      <div className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row">
        {/* Left Image */}
        <div className="flex justify-center w-full lg:w-1/2">
          <img
            src={"https://i.ibb.co.com/BHLT3T8b/branding-email.png"}
            alt="Email Template Illustration"
            className="w-80 md:w-96 lg:w-[430px] drop-shadow-xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">
            <span className="font-extrabold">Email</span> Template
          </h1>

          <p className="max-w-xl mb-8 leading-relaxed text-gray-600">
            Our custom email templates will express your brand’s voice with clarity
            and style. We create crisp, professional templates that leave a lasting
            impression, making your emails work harder for your business.
          </p>

          <div className="flex flex-col items-start gap-10 md:flex-row md:items-center">
            <div>
              <p className="mb-3 font-semibold text-gray-900">
                Design your Email template for just <span className="font-bold">£50</span>
              </p>
              <button className="flex items-center gap-2 px-5 py-2 font-semibold text-white bg-gradient-to-r from-[#5fcf3a]  to-[#7dd660] rounded-full">
                Pay Now ➜
              </button>
            </div>

            <div>
              <p className="mb-3 font-semibold text-gray-900">Bespoke design</p>
              <button className="flex items-center gap-1 font-medium text-green-600 hover:underline">
                Contact us to get a quote ➜
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailTemplate;