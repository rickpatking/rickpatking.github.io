import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { personalInfo, skills } from '../data/projects';

export default function HomeSection() {
  return (
    <section id="home" className="min-h-screen flex flex-col relative bg-[#050505]">
      {/* Main hero content */}
      <div className="flex-1 flex flex-col justify-center px-6 sm:px-12 lg:px-20 pt-24 pb-32">
        {/* Massive name */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <h1 className="display-huge font-bold tracking-tighter">
            <span className="block text-white">{personalInfo.name.split(' ')[0]}</span>
            <span className="block text-[#888888]">{personalInfo.name.split(' ')[1]}</span>
          </h1>
        </motion.div>

        {/* Role and location */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 mb-12"
        >
          <p className="text-xl sm:text-2xl text-[#888888]">
            {personalInfo.title}
          </p>
          <span className="hidden sm:block w-12 h-px bg-[#333333]" />
          <p className="text-xl sm:text-2xl text-[#555555]">
            University of Florida
          </p>
        </motion.div>

        {/* Statement */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg sm:text-xl text-[#666666] max-w-2xl leading-relaxed mb-16"
        >
          I transform complex data into actionable insights, building predictive models
          and interactive dashboards that drive decision-making.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-6"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-3 text-white hover:text-[#FA4616] transition-colors"
          >
            <span className="text-sm uppercase tracking-widest">View Work</span>
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </a>
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[#666666] hover:text-white transition-colors"
          >
            <span className="text-sm uppercase tracking-widest">GitHub</span>
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 text-[#666666] hover:text-white transition-colors"
          >
            <span className="text-sm uppercase tracking-widest">LinkedIn</span>
            <span className="w-8 h-px bg-current group-hover:w-12 transition-all" />
          </a>
        </motion.div>
      </div>

      {/* Skills marquee */}
      <div className="border-t border-[#1a1a1a] overflow-hidden py-6">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...skills.languages, ...skills.libraries, ...skills.tools, ...skills.languages, ...skills.libraries, ...skills.tools].map((skill, i) => (
            <span key={i} className="mx-8 text-sm text-[#444444] font-mono">
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ArrowDown className="w-5 h-5 text-[#444444]" />
        </motion.div>
      </motion.a>

      {/* Decorative elements */}
      <div className="absolute top-1/4 right-12 lg:right-24 hidden lg:block">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-right"
        >
          <p className="text-6xl font-bold text-[#111111]">4.0</p>
          <p className="text-xs text-[#444444] uppercase tracking-widest mt-2">GPA</p>
        </motion.div>
      </div>
    </section>
  );
}
