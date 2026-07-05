import { motion } from 'framer-motion'

const SectionHeader = ({ heading, subHeading }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mb-16 text-center"
    >
      <h1 className="mb-4 text-4xl font-extrabold md:text-5xl">
        <span className="text-transparent bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text">
          {heading}
        </span>
      </h1>

      <p className="max-w-xl mx-auto text-gray-600">
        {subHeading}
      </p>

      <div className="w-24 h-1 mx-auto mt-6 rounded-full bg-gradient-to-r from-green-500 to-blue-500" />
    </motion.div>
  )
}

export default SectionHeader
