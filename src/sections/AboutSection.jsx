import { motion } from 'framer-motion';
import { skills, education } from '../data/projects';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen bg-[#050505] py-32">
      {/* Large statement */}
      <div className="px-6 sm:px-12 lg:px-20 mb-32">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm text-[#555555] uppercase tracking-widest mb-8">About</p>
          <h2 className="display-large font-bold text-white max-w-5xl">
            I build systems that turn{' '}
            <span className="text-[#555555]">raw data</span>{' '}
            into{' '}
            <span className="text-[#FA4616]">strategic insights</span>
          </h2>
        </motion.div>
      </div>

      {/* Two column layout */}
      <div className="px-6 sm:px-12 lg:px-20 grid lg:grid-cols-2 gap-20 mb-32">
        {/* Left - Bio */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-lg text-[#888888] leading-relaxed mb-8">
            Currently pursuing a BS in Data Science at the University of Florida,
            I specialize in machine learning, statistical analysis, and building
            end-to-end data pipelines.
          </p>
          <p className="text-lg text-[#666666] leading-relaxed">
            My work spans sports analytics, computational geometry, and predictive
            modeling—always focused on extracting meaningful patterns from complex datasets.
          </p>
        </motion.div>

        {/* Right - Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="border-l border-[#222222] pl-8">
            <p className="text-sm text-[#555555] uppercase tracking-widest mb-4">Education</p>
            <h3 className="text-2xl font-bold text-white mb-2">{education.degree}</h3>
            <p className="text-[#888888] mb-4">{education.school}</p>
            <div className="flex items-center gap-6">
              <div>
                <p className="text-3xl font-bold text-[#FA4616]">{education.gpa}</p>
                <p className="text-xs text-[#555555] uppercase tracking-widest">GPA</p>
              </div>
              <div className="w-px h-12 bg-[#222222]" />
              <div>
                <p className="text-lg text-[#666666]">{education.period}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Skills sections */}
      <div className="border-t border-[#1a1a1a]">
        {/* Languages */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 sm:px-12 lg:px-20 py-12 border-b border-[#1a1a1a]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="text-sm text-[#555555] uppercase tracking-widest w-32 flex-shrink-0">
              Languages
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.languages.map((skill) => (
                <span key={skill} className="text-xl text-[#888888] font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Libraries */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 sm:px-12 lg:px-20 py-12 border-b border-[#1a1a1a]"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="text-sm text-[#555555] uppercase tracking-widest w-32 flex-shrink-0">
              Libraries
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.libraries.map((skill) => (
                <span key={skill} className="text-xl text-[#888888] font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="px-6 sm:px-12 lg:px-20 py-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <p className="text-sm text-[#555555] uppercase tracking-widest w-32 flex-shrink-0">
              Tools
            </p>
            <div className="flex flex-wrap gap-4">
              {skills.tools.map((skill) => (
                <span key={skill} className="text-xl text-[#888888] font-mono">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
