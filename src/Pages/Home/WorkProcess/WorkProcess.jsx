import React from 'react'
import { motion } from 'framer-motion'
import { Clock, PenTool, Code, MessageCircle } from 'lucide-react'

const steps = [
  {
    id: 1,
    title: 'Discovery & Planning',
    subtitle: 'Strategy & Research',
    description:
      'We begin by understanding your brand, goals, and audience. Through research and strategic planning, we define a clear roadmap for design, development, SEO, and content execution.',
    icon: Clock,
    color: 'indigo',
  },
  {
    id: 2,
    title: 'Creative Design',
    subtitle: 'Branding & Visual Design',
    description:
      'Our designers craft visually compelling graphics, UI/UX layouts, logos, and motion concepts that align with your brand identity and engage your audience across all platforms.',
    icon: PenTool,
    color: 'pink',
  },
  {
    id: 3,
    title: 'Development & Optimization',
    subtitle: 'Web, SEO & Performance',
    description:
      'We develop fast, secure, and scalable websites while optimizing SEO, performance, and content structure to ensure strong visibility and smooth user experience.',
    icon: Code,
    color: 'green',
  },
  {
    id: 4,
    title: 'Launch & Growth',
    subtitle: 'Content, Video & Support',
    description:
      'After launch, we refine through feedback, publish content, create video & animation, and provide ongoing support to help your brand grow consistently in the digital space.',
    icon: MessageCircle,
    color: 'blue',
  },
]

export default function WorkProcess() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-[350px] h-[350px] bg-indigo-400/30 blur-[140px]" />
        <div className="absolute bottom-0 right-1/4 w-[350px] h-[350px] bg-pink-400/30 blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-[1300px] mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 md:text-5xl">
            Our Work Process
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            A proven workflow to build, launch, and grow your digital presence
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr">
          {steps.map((step, index) => {
            const Icon = step.icon

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                whileHover={{ scale: 1.06, y: -6 }}
                className="relative h-full group"
              >
                {/* Gradient Border */}
                <div
                  className={`
                    flex h-full p-[1px] rounded-3xl bg-gradient-to-br
                    ${step.color === 'indigo' && 'from-indigo-400 to-indigo-600'}
                    ${step.color === 'pink' && 'from-pink-400 to-rose-500'}
                    ${step.color === 'green' && 'from-green-400 to-emerald-500'}
                    ${step.color === 'blue' && 'from-blue-400 to-cyan-500'}
                  `}
                >
                  {/* Card */}
                  <div className="flex flex-col items-center h-full p-8 text-center shadow-xl bg-white/80 backdrop-blur-xl rounded-3xl">
                    
                    {/* Icon */}
                    <div
                      className={`
                        mb-6 w-16 h-16 rounded-2xl flex items-center justify-center
                        text-white text-2xl shadow-lg
                        ${step.color === 'indigo' && 'bg-indigo-500'}
                        ${step.color === 'pink' && 'bg-pink-500'}
                        ${step.color === 'green' && 'bg-green-500'}
                        ${step.color === 'blue' && 'bg-blue-500'}
                        group-hover:scale-110 transition duration-500
                      `}
                    >
                      <Icon />
                    </div>

                    <h3 className="text-xl font-bold text-gray-800">
                      {String(step.id).padStart(2, '0')} · {step.title}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-gray-500">
                      {step.subtitle}
                    </p>

                    <p className="flex-1 mt-4 leading-relaxed text-gray-600">
                      {step.description}
                    </p>

                    {/* Hover underline */}
                    <div
                      className={`
                        mt-6 h-[3px] w-12 rounded-full scale-x-0
                        ${step.color === 'indigo' && 'bg-indigo-500'}
                        ${step.color === 'pink' && 'bg-pink-500'}
                        ${step.color === 'green' && 'bg-green-500'}
                        ${step.color === 'blue' && 'bg-blue-500'}
                        group-hover:scale-x-100 transition-transform duration-500
                      `}
                    />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
