import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const AccordionHeader = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView({ threshold: 0.25 })

  React.useEffect(() => {
    if (inView) {
      controls.start('visible')
    } else {
      controls.start('hidden')
    }
  }, [controls, inView])

  const variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={controls}
      className="w-[95%] md:w-[90%] lg:w-[85%] mx-auto my-10 text-center"
    >
      {/* Top Badge */}
      <motion.span
        className="inline-block mb-6 px-6 py-2 text-xs font-bold tracking-widest uppercase
        rounded-full bg-gradient-to-r from-[#ff6a00] to-[#ffb347] text-white shadow-lg"
      >
        Pay-Monthly Website Solutions
      </motion.span>

      {/* Main Statement */}
      <motion.h2 className="mb-6 text-3xl font-black leading-snug md:text-4xl lg:text-5xl">
        <span className="block">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-teal-400 to-blue-500">
            Pay-monthly website solutions
          </span>{' '}
          designed to grow with your business.
        </span>
      </motion.h2>

      {/* Subheadline */}
      <motion.p className="max-w-3xl mx-auto mb-10 text-lg font-semibold text-gray-700 md:text-xl">
        We seamlessly combine{' '}
        <span className="font-bold text-orange-500">website design</span>,{' '}
        <span className="font-bold text-purple-500">ongoing maintenance</span>,{' '}
        <span className="font-bold text-teal-500">CRM</span>, and{' '}
        <span className="font-bold text-green-500">marketing</span> with{' '}
        <span className="font-bold text-transparent bg-gradient-to-r from-yellow-400 to-red-500 bg-clip-text">
          AI-powered tools
        </span>{' '}
        that enhance performance, user engagement, and conversions. Our intelligent
        systems optimise content, automate workflows, and keep your site evolving as your
        business grows.
      </motion.p>

      {/* Feature Grid */}
      <motion.div className="grid max-w-4xl grid-cols-1 gap-6 mx-auto mb-12 md:grid-cols-3">
        <div className="p-6 transition-transform duration-300 shadow-lg rounded-xl bg-gradient-to-r from-green-50 to-green-100 hover:scale-105">
          <h4 className="mb-2 text-lg font-bold text-green-600">
            Design & Maintenance
          </h4>
          <p className="text-sm text-gray-700">
            Modern UI, fast-loading pages, continuous updates, and SEO-ready architecture.
          </p>
        </div>

        <div className="p-6 transition-transform duration-300 shadow-lg rounded-xl bg-gradient-to-r from-purple-50 to-purple-100 hover:scale-105">
          <h4 className="mb-2 text-lg font-bold text-purple-600">CRM & Marketing</h4>
          <p className="text-sm text-gray-700">
            Integrated CRM and marketing tools to capture leads, automate workflows, and convert visitors.
          </p>
        </div>

        <div className="p-6 transition-transform duration-300 shadow-lg rounded-xl bg-gradient-to-r from-orange-50 to-orange-100 hover:scale-105">
          <h4 className="mb-2 text-lg font-bold text-orange-600">AI & Hosting</h4>
          <p className="text-sm text-gray-700">
            AI-driven optimisation, secure hosting, free domain, email, SSL, and ongoing support.
          </p>
        </div>
      </motion.div>

      {/* Closing Line */}
      <motion.p className="max-w-3xl mx-auto text-lg leading-relaxed text-gray-700 md:text-xl">
        With our all-in-one monthly packages, you benefit from the latest web and AI
        technologies backed by reliable, hands-on support. Each package includes a free
        domain, secure hosting, professional email, SSL certification, continuous
        maintenance, and AI-driven optimisation—delivering a stress-free, future-ready
        website built for long-term success.
      </motion.p>
    </motion.div>
  )
}

export default AccordionHeader
