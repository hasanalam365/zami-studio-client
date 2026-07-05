import React from "react";

const ServiceSection = () => {
  const services = [
    {
      icon: "⚡",
      title: "Fast Response",
      desc: "We deliver high-quality work as quickly as possible so your business has what it needs to grow.",
    },
    {
      icon: "💻",
      title: "Quality Designs",
      desc: "At Perspective we only hire the best designers to guarantee you get the quality you deserve.",
    },
    {
      icon: "🎯",
      title: "Scalable to Your Needs",
      desc: "Design that scales with your company – while maintaining the highest quality along the way.",
    },
  ];

  return (
    <section className="w-full px-6 py-20 mx-auto max-w-7xl">
      <div className="grid grid-cols-1 gap-16 text-center md:grid-cols-3">
        {services.map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-5 text-5xl">{item.icon}</div>
            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-gray-600">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceSection;
