import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";

const servicesData = [
  {
    id: 1,
    title: "AI Integration & Business Automation",
    rating: 5,
    userReviews: 18,
    serviceCategories: "AI Solutions",
    imgUrl: "https://i.ibb.co.com/XZywvsP2/AI-Integration-Business-Automation.jpg",
    description: `
Intelligent AI-powered automation solutions designed
to streamline business operations and reduce manual work.

This service helps automate:
• Customer calls & responses  
• Email workflows  
• CRM processes  
• Social media operations  

Work faster, smarter, and more efficiently with AI.
    `,
  },
  {
    id: 2,
    title: "Marketing Services for Business Growth",
    rating: 5,
    userReviews: 28,
    serviceCategories: "Digital Marketing",
    imgUrl: "https://i.ibb.co.com/nsSN6cPb/Marketing-services-for-Business-Growth.jpg",
    description: `
Performance-driven digital marketing services
focused on increasing visibility, leads, and revenue.

• Facebook, Google, YouTube & TikTok Ads  
• SEO & traffic growth strategies  
• Funnel & conversion optimization
    `,
  },
  {
    id: 3,
    title: "Web Design and Maintenance",
    rating: 4.9,
    userReviews: 24,
    serviceCategories: "Web Development",
    imgUrl: "https://i.ibb.co.com/fYcrp01Z/web-development.jpg",
    description: `
Modern website design combined with ongoing maintenance
to keep your website updated, fast, and reliable.

• Responsive website design  
• UI/UX improvements  
• Regular updates & bug fixes  
• Performance monitoring
    `,
  },
  {
    id: 4,
    title: "Web Hosting and Domain",
    rating: 4.8,
    userReviews: 18,
    serviceCategories: "Web Services",
    imgUrl: "https://i.ibb.co.com/1tb8VW3r/Web-hosting.jpg",
    description: `
Reliable web hosting and domain services
to ensure your website is always accessible and secure.

• Domain registration & management  
• Secure cloud hosting  
• High uptime & server stability  
• Backup & security monitoring
    `,
  },
  {
    id: 5,
    title: "App Development",
    rating: 5,
    userReviews: 20,
    serviceCategories: "App Development",
    imgUrl: "https://i.ibb.co.com/spZSxvMd/Custom-Software-Development.jpg",
    description: `
Custom mobile and web application development
focused on performance, usability, and scalability.

• Android & iOS apps  
• Web applications  
• Secure & scalable architecture
    `,
  },
  {
    id: 6,
    title: "Complete CRM Solutions",
    rating: 4.9,
    userReviews: 16,
    serviceCategories: "CRM Systems",
    imgUrl: "https://i.ibb.co.com/GfTLzZrt/Complete-CRM-Solutions.jpg",
    description: `
Custom CRM systems designed to manage
leads, customers, and workflows efficiently.

• Lead & customer tracking  
• Sales pipeline management  
• Productivity optimization
    `,
  },
  {
    id: 7,
    title: "Software Development",
    rating: 5,
    userReviews: 20,
    serviceCategories: "Software Solutions",
    imgUrl: "https://i.ibb.co.com/YFghtHpV/software-development-fs.jpg",
    description: `
Custom software solutions tailored
to your unique business requirements.

• Scalable systems  
• Secure development  
• Custom integrations
    `,
  },
  {
    id: 8,
    title: "Email Services",
    rating: 5,
    userReviews: 20,
    serviceCategories: "Email Services",
    imgUrl: "https://i.ibb.co.com/ynYRf5pN/Email-services.jpg",
    description: `
Professional email solutions for business communication
and marketing automation.

• Business email setup  
• Email marketing campaigns  
• Automation & follow-ups
    `,
  },
  {
    id: 9,
    title: "Google Visibility Services",
    rating: 5,
    userReviews: 20,
    serviceCategories: "SEO Services",
    imgUrl: "https://i.ibb.co.com/spysBVjg/Google-visibility-SEO.jpg",
    description: `
SEO services designed to improve Google rankings
and increase organic visibility.

• On-page & technical SEO  
• Google indexing optimization  
• Local & organic visibility
    `,
  },
];

const Services = () => {
  return (
    <div className="overflow-hidden text-white bg-black">

      <Helmet>
        <title>Services | Zami Studio</title>
      </Helmet>

      {/* HERO */}
      <section className="relative px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1 text-sm font-semibold text-red-400 border rounded-full bg-red-500/10 border-red-500/20">
            <Sparkles size={16} /> Premium Digital Agency
          </span>

          <h1 className="mt-6 text-4xl font-extrabold md:text-6xl">
            Exceptional Services <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-white">
              That Elevate Your Brand
            </span>
          </h1>

          <p className="max-w-2xl mx-auto mt-6 text-lg text-white/70">
            We create high-impact digital services designed for growth,
            performance, and long-term success.
          </p>
        </motion.div>
      </section>

      {/* SERVICES */}
      <section className="px-6 pb-32 space-y-28 md:px-20">
        {servicesData.map((service, i) => {
          const reverse = i % 2 !== 0;

          return (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col items-center gap-14 ${
                reverse ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <motion.img
                whileHover={{ scale: 1.03 }}
                src={service.imgUrl}
                alt={service.title}
                className="w-full lg:w-1/2 h-[420px] object-cover rounded-[2.5rem] shadow-2xl border border-white/10"
              />

              <div className="w-full lg:w-1/2">
                <span className="px-4 py-1 text-sm font-semibold text-red-400 border rounded-full bg-red-500/10 border-red-500/20">
                  {service.serviceCategories}
                </span>

                <h2 className="mt-6 text-3xl font-extrabold md:text-4xl">
                  {service.title}
                </h2>

                <p className="mt-5 text-lg leading-relaxed whitespace-pre-line text-white/70">
                  {service.description}
                </p>

                <div className="flex items-center gap-3 mt-6">
                  <FaStar className="text-red-500" />
                  <span className="text-white/70">
                    {service.rating} Rating • {service.userReviews} Reviews
                  </span>
                </div>

                <Link to={`/service-details/${service.id}`} state={service}>
                  <button className="px-8 py-3 mt-8 text-sm font-semibold text-white transition bg-red-600 rounded-full hover:bg-red-700 hover:scale-105">
                    Explore Service →
                  </button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
};

export default Services;