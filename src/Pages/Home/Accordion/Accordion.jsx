import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Accordion() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.2 })

  React.useEffect(() => {
    if (inView) {
      controls.start("visible")
    } else {
      controls.start("hidden")
    }
  }, [controls, inView])

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={containerVariants}
      className="flex flex-col items-start gap-3 mb-10 md:flex-row md:justify-between lg:flex-row w-[95%] md:w-[80%] lg:w-[80%] mx-auto"
    >
      {/* First column */}
      <motion.div className="flex flex-col gap-2 w-full md:w-[48%] lg:w-[48%]" variants={itemVariants}>

          <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Full AI integration and Management</div>
          <div className="text-sm collapse-content">
           In today's world, there's almost no part of your business that can't benefit from AI integration. We can seamlessly implement AI into virtually any area—whether it's automating phone responses, enhancing your social media, streamlining email marketing, or optimizing business operations. Our AI solutions help make your business faster, more efficient, and a lot less stressful to run. Whatever aspect of your business you want to enhance, our in-house AI systems are here to take care of it for you.
          </div>
        </div>
         <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Software Development and Management</div>
          <div className="text-sm collapse-content">
           We specialize in crafting bespoke software tailored to your business’s unique needs. Whether you need a custom solution to streamline your operations or want to leverage AI to make your software more intuitive and user-friendly, we've got you covered. Our team designs and implements professional, business-specific software that fits right into your workflow. So whatever your requirements, we can create and manage a software solution that helps your business run more smoothly and efficiently.
          </div>
        </div>
         <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">App Development and Management</div>
          <div className="text-sm collapse-content">
           When it comes to app development, we specialize in creating bespoke applications tailored to each company's unique needs. We don't just build apps; we integrate intelligent AI features to ensure your app runs seamlessly and efficiently. Whether you need a customer-facing mobile app or an internal tool, we'll craft a solution that's perfectly aligned with your business goals. Our apps are designed to make your operations smoother, smarter, and more user-friendly, so you can deliver a top-notch experience to your users.
          </div>
        </div>
      
       
         <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Website Maintenance</div>
          <div className="text-sm collapse-content">
          Maximize the performance and longevity of your website with our complete maintenance services. Our team takes care of updates, security checks, and ongoing technical support — giving you peace of mind while your business thrives online.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" /> 
          <div className="font-semibold collapse-title">Web Design</div>
          <div className="text-sm collapse-content">
            Elevate your online presence with a sleek, brochure-style website that highlights your brand and offerings. Our pay-monthly website plans make it simple and affordable to turn your ideas into a fully functional, visually stunning website.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Web Hosting (UK Based)</div>
          <div className="text-sm collapse-content">
            In addition to design and maintenance, we provide robust web hosting services to keep your site running smoothly. While our team is based in the UK, we operate globally, ensuring that no matter where your audience is, your website is reliable and accessible. We handle all the technical hosting details so you don't have to worry about a thing. It's all part of making sure your online presence is as strong and seamless as possible, wherever you're reaching customers.
          </div>
        </div>
         <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">CRM Solution</div>
          <div className="text-sm collapse-content">
           We provide flexible solutions when it comes to customer relationship management. We have our own in-house CRM that you can use right off the shelf. But if you need something more tailored to your business’s unique needs, our team can design a bespoke CRM just for you. That means you get a system that fits perfectly with how you run your company.
          </div>
        </div>
       
       
      </motion.div>

      {/* Second column */}
      <motion.div className="flex flex-col gap-2 w-full md:w-[48%] lg:w-[48%]" variants={itemVariants}>
         <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Business Automation , Free audit</div>
          <div className="text-sm collapse-content">
           We offer a free audit to analyze your business and identify where automation can save you time and money. By streamlining up to 80% of your processes, we help you reduce manual work and cut costs. And remember, the initial audit is completely free. Reach out to us and find out how much of your business we can automate to make your operations smoother and more cost-effective.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Google visibility</div>
          <div className="text-sm collapse-content">
            From making sure your site is visible on Google through tools like Google Search Console to optimizing it with key SEO elements—like meta tags, strategic keywords, and integrating Google Analytics—we equip you with everything you need to grow. We also set up your Google Business Profile and Google Tag Manager so your business can be easily discovered and managed online. In short, we provide all the essential tools to help your business thrive in search results and achieve lasting success.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Domain Name</div>
          <div className="text-sm collapse-content">
           Every company needs a domain name to run a website. Without it, your site simply can’t go live. So, as part of every website we build, we include a non-premium domain name free of charge. Of course, if you ever decide you want to upgrade to a premium domain down the line, that’s an option too, but we make sure you have a solid domain included from the start so you can get up and running without any extra hassle.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Indexing with Google</div>
          <div className="text-sm collapse-content">
          We set up your website for success with complete SEO and Google integration. From submitting your site to Google Search Console to configuring meta tags, keywords, analytics, and business profiles, we provide the tools that help attract traffic and maximize performance.
          </div>
        </div>
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Email Services</div>
          <div className="text-sm collapse-content">
           We know professional communication is key, which is why we provide personalized email addresses linked to your business’s domain name. Plus, we’ll help you set up those emails on your mobile devices so you can stay connected on the go. That way, your business communication is always at your fingertips, no matter where you are.
          </div>
        </div>
        

        
       
        <div className="border collapse collapse-arrow bg-base-100 border-base-300">
          <input type="checkbox" />
          <div className="font-semibold collapse-title">Marketing Services</div>
          <div className="text-sm collapse-content">
          We specialize in delivering high-impact digital marketing campaigns with a strong focus on Facebook ads, Google, YouTube, and TikTok advertising. Our experienced team has a proven track record of transforming businesses from zero to seven figures. As an AI-driven company, we not only use AI in our ad campaigns but also in our SEO services, making us one of the few companies in the world doing AI-driven SEO.

In addition, we create bespoke sales funnels tailored to each client. Our custom in-house funnels are designed to drive significant revenue and are still one of the most powerful sales strategies around today. We build them to fit your business perfectly, ensuring that your marketing is not only smart and efficient but also truly tailored to maximize your success.
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Accordion
