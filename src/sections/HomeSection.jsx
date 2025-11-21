import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import MagneticButton from '../components/MagneticButton';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen relative bg-[#f5f0e8] overflow-hidden">
      {/* Hub-Tones inspired vertical bars */}
      <div className="absolute top-0 left-[8%] h-full flex gap-3">
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className={`w-4 lg:w-6 origin-top ${i === 3 ? 'bg-[#e85d3b]' : 'bg-[#0d2438]'}`}
            style={{ height: `${60 + i * 8}%` }}
          />
        ))}
      </div>

      {/* Content - positioned to the right of bars */}
      <div className="min-h-screen relative z-10 flex flex-col justify-between p-8 lg:p-16">

        {/* Top spacer */}
        <div className="h-8" />

        {/* Center right - Name like Midnight Blue typography */}
        <div className="flex justify-end">
          <div className="text-right mr-[5%]">
            {/* First name - MASSIVE */}
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[20vw] lg:text-[18vw] font-black uppercase leading-[0.75] tracking-tighter text-[#0d2438]"
            >
              {personalInfo.name.split(' ')[0]}
            </motion.h1>

            {/* Last name - orange accent */}
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[8vw] lg:text-[6vw] font-black uppercase tracking-tight text-[#e85d3b] -mt-2"
            >
              {personalInfo.name.split(' ')[1]}
            </motion.p>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="text-xs uppercase tracking-[0.3em] text-[#0d2438]/60 mt-4"
            >
              {personalInfo.title}
            </motion.p>
          </div>
        </div>

        {/* Bottom - links and GPA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
          className="flex justify-between items-end"
        >
          {/* Links */}
          <div className="flex gap-6 ml-[45%] lg:ml-[35%]">
            <MagneticButton>
              <a href="#projects" className="text-[10px] uppercase tracking-[0.3em] text-[#0d2438] hover:text-[#e85d3b] transition-colors font-medium">
                Work
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-[0.3em] text-[#0d2438]/60 hover:text-[#e85d3b] transition-colors">
                GitHub
              </a>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
