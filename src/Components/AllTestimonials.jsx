import { motion } from "framer-motion"
import { LiaQuoteLeftSolid } from "react-icons/lia"

const AllTestimonials = () => {
  const testimonials = [/* same data */]

  return (
    <div className="px-4 py-24 bg-gradient-to-br from-black via-[#0b0f14] to-black">

      <div className="mb-16 text-center">
        <h2 className="text-4xl font-bold text-white">
          Trusted by Professionals
        </h2>
        <p className="mt-3 text-white/60">
          Real feedback from global clients
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ delay: i * 0.1 }}
            className="relative p-6 border shadow-lg rounded-2xl bg-white/5 border-white/10 backdrop-blur-xl"
          >

            <LiaQuoteLeftSolid className="absolute text-5xl text-green-400/20 top-4 right-4" />

            <div className="flex items-center gap-4">
              <img
                src={t.photo}
                className="w-12 h-12 border rounded-full border-green-400/30"
              />
              <div>
                <h4 className="font-semibold text-white">{t.name}</h4>
                <p className="text-sm text-white/50">{t.designation}</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-white/70">
              {t.text}
            </p>

            <span className="inline-block mt-4 text-sm font-semibold text-green-400">
              {t.title}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default AllTestimonials