import { motion } from 'framer-motion';

export default function QuoteSection() {
  return (
    <section className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background blob */}
      <div className="absolute inset-0 -z-10">
        <div
          className="animated-blob w-[600px] h-[600px] bg-[#FA4616]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          style={{ animationDelay: '-7s' }}
        />
      </div>

      <div className="px-6 sm:px-12 lg:px-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Quote mark */}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="block text-8xl text-[#1a1a1a] font-serif mb-8"
          >
            "
          </motion.span>

          {/* Quote text */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-8">
            There is value in fighting with all your strength
          </h2>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-[#FA4616] mx-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
