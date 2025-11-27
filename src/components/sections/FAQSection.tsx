'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer comprehensive video production services including pre-production planning, production shooting, post-production editing, motion graphics, VFX, color grading, and sound design.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on scope and complexity, but most projects range from 2-8 weeks from initial concept to final delivery. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you work with clients remotely?',
    answer: 'Yes! We work with clients worldwide and have streamlined processes for remote collaboration including video calls, cloud-based file sharing, and online review systems.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'Our pricing is project-based and depends on factors like video length, complexity, timeline, and deliverables. We provide custom quotes after understanding your specific needs and goals.',
  },
  {
    question: 'Can you help with distribution and marketing?',
    answer: 'Absolutely! Beyond production, we can assist with video optimization for different platforms, social media strategy, and targeted distribution to ensure your content reaches the right audience.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="font-[family-name:var(--font-syne)] text-4xl md:text-5xl font-bold text-white text-center mb-12">
          <span
            className="bg-gradient-to-r from-white via-white to-transparent bg-clip-text text-transparent"
          >
            Got questions? We've got answers!
          </span>
        </h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-white/30 rounded-[30px] overflow-hidden backdrop-blur-lg"
              style={{
                background: 'radial-gradient(71% 86.4% at -0.8% 0%, rgba(255, 255, 255, 0.1) 2.21%, rgba(255, 255, 255, 0) 100%)',
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <h3 className="font-[family-name:var(--font-syne)] font-semibold text-white text-lg pr-4">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown className="text-white/80" size={24} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
