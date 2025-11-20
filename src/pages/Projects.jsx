import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import TiltCard from '../components/TiltCard';
import { projects } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

// Get all unique technologies
const allTechnologies = [...new Set(projects.flatMap(p => p.technologies))].sort();

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(p => p.technologies.includes(filter));

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-stone-900 dark:text-white">
              Projects
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-6" />
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl">
              A collection of projects showcasing my skills in data science,
              machine learning, and software development.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap gap-2 mb-12"
          >
            <button
              onClick={() => setFilter('All')}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                filter === 'All'
                  ? 'bg-orange-500 text-white'
                  : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
              }`}
            >
              All
            </button>
            {allTechnologies.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  filter === tech
                    ? 'bg-orange-500 text-white'
                    : 'bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-300 dark:hover:bg-stone-700'
                }`}
              >
                {tech}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid - Bento style with varied sizes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  layout
                  className={index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}
                >
                  <TiltCard>
                    <div className="group bg-white dark:bg-stone-900 rounded-2xl overflow-hidden shadow-lg border border-stone-200 dark:border-stone-800 hover:border-orange-500/50 transition-all duration-300 h-full">
                      {/* Project Image/Placeholder */}
                      <div className={`relative ${index === 0 ? 'h-64' : 'h-48'} bg-gradient-to-br from-orange-500/10 to-green-500/10 dark:from-orange-500/5 dark:to-green-500/5 flex items-center justify-center overflow-hidden`}>
                        <Folder className="w-16 h-16 text-orange-500/30" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-xl font-bold mb-2 text-stone-900 dark:text-white group-hover:text-orange-500 transition-colors">
                          {project.title}
                        </h3>
                        <p className={`text-sm text-stone-600 dark:text-stone-400 mb-4 ${index === 0 ? '' : 'line-clamp-3'}`}>
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.slice(0, index === 0 ? 6 : 4).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs rounded font-mono"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > (index === 0 ? 6 : 4) && (
                            <span className="px-2 py-1 bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 text-xs rounded">
                              +{project.technologies.length - (index === 0 ? 6 : 4)}
                            </span>
                          )}
                        </div>

                        {/* Links */}
                        <div className="flex items-center gap-4">
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                            >
                              <Github className="w-5 h-5" />
                            </motion.a>
                          )}
                          {project.demo && (
                            <motion.a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              whileHover={{ scale: 1.1 }}
                              className="text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                            </motion.a>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-stone-500 dark:text-stone-400 mt-8"
            >
              No projects found with this filter.
            </motion.p>
          )}
        </div>
      </div>
    </PageTransition>
  );
}
