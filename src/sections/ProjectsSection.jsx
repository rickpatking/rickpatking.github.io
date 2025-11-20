import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="min-h-screen bg-[#0a0a0a] py-32">
      {/* Header */}
      <div className="px-6 sm:px-12 lg:px-20 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm text-[#555555] uppercase tracking-widest mb-8">Work</p>
          <h2 className="display-large font-bold text-white">
            Selected<br />
            <span className="text-[#555555]">Projects</span>
          </h2>
        </motion.div>
      </div>

      {/* Projects list */}
      <div className="border-t border-[#1a1a1a]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className="group border-b border-[#1a1a1a] hover:bg-[#111111] transition-colors"
          >
            <div className="px-6 sm:px-12 lg:px-20 py-12 lg:py-16">
              <div className="grid lg:grid-cols-12 gap-8 items-start">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm text-[#444444] font-mono">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>

                {/* Title and description */}
                <div className="lg:col-span-6">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-[#FA4616] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-[#666666] leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div className="lg:col-span-3">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-sm text-[#555555] font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-sm text-[#444444]">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Link */}
                <div className="lg:col-span-2 lg:text-right">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-[#666666] hover:text-white transition-colors"
                    >
                      <span className="uppercase tracking-widest">View</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Bottom statement */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-6 sm:px-12 lg:px-20 pt-20"
      >
        <p className="text-xl text-[#555555] max-w-2xl">
          Each project represents a deep dive into data—from collection and cleaning
          to analysis and visualization.
        </p>
      </motion.div>
    </section>
  );
}
