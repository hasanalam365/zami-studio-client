import { useQuery } from "@tanstack/react-query";
import React from "react";
import useAxiosPublic from "../../../Hooks/useAxiosPublic";
import { LiaQuoteLeftSolid } from "react-icons/lia";

const Testimonials = () => {
  const axiosPublic = useAxiosPublic();

  const { data: testimonials = [] } = useQuery({
    queryKey: ["testimonials-all"],
    queryFn: async () => {
      const { data } = await axiosPublic.get("/testimonials");
      return data;
    },
  });

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((testimonial, index) => (
        <div
          key={testimonial._id || index}
          className="relative p-6 space-y-4 transition-all duration-300 border shadow-xl rounded-2xl bg-black/80 border-white/10 hover:border-red-500/40 hover:shadow-red-500/10"
        >
          {/* Quote Icon */}
          <LiaQuoteLeftSolid className="absolute text-5xl text-red-500/30 top-4 right-4" />

          {/* Header */}
          <div className="flex items-center gap-4">
            <img
              className="object-cover w-12 h-12 border-2 border-red-500 rounded-full"
              src={testimonial.photo}
              alt="photo"
            />

            <div>
              <h4 className="text-lg font-bold text-white">
                {testimonial.name}
              </h4>
              <p className="text-sm text-gray-400">
                {testimonial.designation}
              </p>
            </div>
          </div>

          {/* Text */}
          <p className="text-sm leading-6 text-gray-300">
            {testimonial.text}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;