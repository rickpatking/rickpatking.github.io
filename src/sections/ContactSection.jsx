import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/projects';
import MagneticButton from '../components/MagneticButton';

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-[#e85d3b] relative overflow-hidden">
      {/* Bold shape - bottom left */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#0d2438] rounded-full"
      />

      {/* Content */}
      <div className="min-h-screen relative z-10 flex flex-col justify-between p-8 lg:p-16">

        {/* Top - Section title */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.75] tracking-tighter text-[#0d2438]"
        >
          Contact
        </motion.h2>

        {/* Center - Email prominent, moved right */}
        <div className="flex-1 flex items-center justify-end">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-right mr-[10%]"
          >
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#0d2438]/60 mb-4">
              Get in touch
            </p>
            <MagneticButton>
              <a
                href={`mailto:${personalInfo.email}`}
                className="inline-flex items-center gap-3 text-xl lg:text-3xl font-bold text-[#0d2438] hover:text-[#f5f0e8] transition-colors"
              >
                {personalInfo.email}
                <ArrowUpRight className="w-6 h-6" />
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Bottom - Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-between items-end"
        >
          {/* Social links */}
          <div className="flex gap-6">
            <MagneticButton>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0d2438]/70 hover:text-[#f5f0e8] transition-colors"
              >
                GitHub
              </a>
            </MagneticButton>
            <MagneticButton>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] uppercase tracking-[0.3em] text-[#0d2438]/70 hover:text-[#f5f0e8] transition-colors"
              >
                LinkedIn
              </a>
            </MagneticButton>
          </div>

          {/* Copyright */}
          <p className="text-[9px] uppercase tracking-[0.3em] text-[#0d2438]/50">
            © {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
