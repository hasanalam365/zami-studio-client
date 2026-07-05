import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Accordion() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  React.useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const Item = ({ title, children }) => (
    <motion.div variants={itemVariants} className="border collapse collapse-arrow border-white/10 bg-black/80 rounded-xl">
      <input type="checkbox" />
      <div className="font-semibold text-white transition collapse-title hover:text-red-400">
        {title}
      </div>
      <div className="text-sm leading-relaxed collapse-content text-white/70">
        {children}
      </div>
    </motion.div>
  );

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col md:flex-row gap-4 w-[95%] md:w-[80%] mx-auto"
    >
      {/* LEFT */}
      <motion.div className="w-full space-y-3 md:w-1/2">

        <Item title="Full AI Integration & Management">
          AI automation for business operations, marketing, emails, and workflows.
        </Item>

        <Item title="Software Development & Management">
          Custom business software built for performance, scalability, and AI integration.
        </Item>

        <Item title="App Development & Management">
          Mobile & web apps with smart AI features and smooth user experience.
        </Item>

        <Item title="Website Maintenance">
          Full technical maintenance, updates, security, and performance optimization.
        </Item>

        <Item title="Web Design">
          Modern, high-converting, SEO-ready website design with premium UI.
        </Item>

        <Item title="Web Hosting (UK Based)">
          Secure global hosting with high uptime and optimized performance.
        </Item>

        <Item title="CRM Solution">
          Custom CRM systems tailored for your business workflow.
        </Item>

      </motion.div>

      {/* RIGHT */}
      <motion.div className="w-full space-y-3 md:w-1/2">

        <Item title="Business Automation & Free Audit">
          Free audit + automate up to 80% of business processes.
        </Item>

        <Item title="Google Visibility">
          SEO, Google Search Console, Analytics, Business Profile setup.
        </Item>

        <Item title="Domain Name">
          Free domain included with every website (premium optional upgrade).
        </Item>

        <Item title="Indexing with Google">
          Full SEO setup and Google indexing for maximum visibility.
        </Item>

        <Item title="Email Services">
          Professional business email setup with your domain.
        </Item>

        <Item title="Marketing Services">
          AI-driven ads, funnels, SEO, and high-converting marketing systems.
        </Item>

      </motion.div>
    </motion.div>
  );
}

export default Accordion;