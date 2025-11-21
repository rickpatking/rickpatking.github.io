import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import MagneticButton from '../components/MagneticButton';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-[#0d2438] relative overflow-hidden">
      {/* Large circle like No Room for Squares */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="absolute top-[10%] right-[-15%] w-[500px] h-[500px] border-[12px] border-[#f4a261] rounded-full"
      />

      {/* Content */}
      <div className="min-h-screen relative z-10 p-8 lg:p-16">

        {/* Header - Title clearly visible */}
        <div className="mb-12 lg:mb-20">
          <motion.h2
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-[18vw] lg:text-[14vw] font-black uppercase leading-[0.75] tracking-tighter text-[#f5f0e8]"
          >
            Work
          </motion.h2>
        </div>

        {/* Projects list */}
        <div className="max-w-3xl">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="border-t border-[#f5f0e8]/10 py-6 group"
            >
              <div className="flex justify-between items-start gap-8">
                {/* Project info */}
                <div className="flex-1">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="text-[10px] text-[#e85d3b] font-bold">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-lg lg:text-xl font-bold text-[#f5f0e8] uppercase tracking-tight group-hover:text-[#e85d3b] transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-[#f5f0e8]/50 max-w-md mb-2">
                    {project.description}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.3em] text-[#f5f0e8]/30">
                    {project.technologies.slice(0, 3).join(' / ')}
                  </p>
                </div>

                {/* Link */}
                {project.github && (
                  <MagneticButton>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-[#f5f0e8]/50 hover:text-[#e85d3b] transition-colors"
                    >
                      View
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </MagneticButton>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
