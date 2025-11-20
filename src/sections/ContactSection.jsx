import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo, education } from '../data/projects';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#050505] py-32 flex flex-col">
      {/* Main content */}
      <div className="flex-1 px-6 sm:px-12 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20"
        >
          <p className="text-sm text-[#555555] uppercase tracking-widest mb-8">Contact</p>
          <h2 className="display-large font-bold text-white max-w-4xl">
            Let's work<br />
            <span className="text-[#555555]">together</span>
          </h2>
        </motion.div>

        {/* Contact info grid */}
        <div className="grid lg:grid-cols-2 gap-20 mb-20">
          {/* Left - Email CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-lg text-[#666666] mb-8 max-w-md">
              Have a project in mind or want to discuss opportunities?
              I'm always open to new challenges and collaborations.
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="group inline-flex items-center gap-4 text-2xl lg:text-3xl text-white hover:text-[#FA4616] transition-colors"
            >
              <span className="font-mono">{personalInfo.email}</span>
              <ArrowUpRight className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div>
              <p className="text-sm text-[#555555] uppercase tracking-widest mb-3">Phone</p>
              <a
                href={`tel:${personalInfo.phone}`}
                className="text-xl text-[#888888] hover:text-white transition-colors font-mono"
              >
                {personalInfo.phone}
              </a>
            </div>
            <div>
              <p className="text-sm text-[#555555] uppercase tracking-widest mb-3">Location</p>
              <p className="text-xl text-[#888888] font-mono">{education.location}</p>
            </div>
            <div className="pt-4">
              <p className="text-sm text-[#555555] uppercase tracking-widest mb-4">Connect</p>
              <div className="flex gap-6">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-white transition-colors text-sm uppercase tracking-widest"
                >
                  GitHub
                </a>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#666666] hover:text-white transition-colors text-sm uppercase tracking-widest"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Large decorative email */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="overflow-hidden border-t border-[#1a1a1a] py-12"
      >
        <div className="animate-marquee whitespace-nowrap">
          {[1, 2, 3, 4].map((i) => (
            <span key={i} className="text-6xl lg:text-8xl font-bold text-[#111111] mx-8">
              {personalInfo.email}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
