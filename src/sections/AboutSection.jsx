import { motion } from 'framer-motion';
import { skills, education } from '../data/projects';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[#f5f0e8] relative overflow-hidden">
      {/* Horace Silver style diagonal shapes */}
      <motion.div
        initial={{ x: '-100%', rotate: 0 }}
        whileInView={{ x: 0, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[10%] left-[5%] w-[250px] h-[300px] bg-[#e85d3b]"
        style={{ transform: 'rotate(-15deg)' }}
      />

      <motion.div
        initial={{ x: '100%' }}
        whileInView={{ x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-[25%] right-[10%] w-[200px] h-[250px] bg-[#0d2438]"
        style={{ transform: 'rotate(10deg)' }}
      />

      {/* Content */}
      <div className="min-h-screen relative z-10 flex flex-col p-8 lg:p-16">

        {/* Title - positioned clearly */}
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[15vw] lg:text-[12vw] font-black uppercase leading-[0.75] tracking-tighter text-[#0d2438] self-end mr-[10%]"
        >
          About
        </motion.h2>

        {/* Bio - center */}
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="max-w-lg text-center px-8"
          >
            <p className="text-lg lg:text-xl text-[#0d2438] leading-relaxed mb-6">
              Data Science student at UF, focused on machine learning and statistical modeling.
            </p>
            <p className="text-sm text-[#0d2438]/60 leading-relaxed">
              Building predictive models for sports analytics and computational geometry.
            </p>
          </motion.div>
        </div>

        {/* Bottom - Skills and education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="flex justify-between items-end pb-4"
        >
          {/* Skills */}
          <div>
            <p className="text-[9px] uppercase tracking-[0.4em] text-[#e85d3b] mb-3">
              Stack
            </p>
            <p className="text-sm font-bold text-[#0d2438] tracking-tight">
              {skills.languages.slice(0, 3).join(' / ')}
            </p>
            <p className="text-xs text-[#0d2438]/60 mt-1">
              {skills.libraries.slice(0, 3).join(' · ')}
            </p>
          </div>

          {/* Education - at bottom, clear of shapes */}
          <div className="text-right">
            <p className="text-4xl lg:text-5xl font-black text-[#0d2438]">
              {education.gpa}
            </p>
            <p className="text-[8px] uppercase tracking-[0.4em] text-[#0d2438]/50">GPA</p>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#0d2438]/50 mt-1">
              {education.school}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
