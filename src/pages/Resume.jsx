import { motion } from 'framer-motion';
import { Download, Briefcase, GraduationCap, Code, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { experience, education, skills, personalInfo } from '../data/projects';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function Resume() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              Resume
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full mb-6" />

            {/* Download Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-medium shadow-lg shadow-blue-500/25 transition-colors"
            >
              <Download className="w-4 h-4" />
              Download PDF
            </motion.a>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Briefcase className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Experience
              </h2>
            </div>

            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative pl-8 border-l-2 border-blue-500"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-500 rounded-full" />
                  <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <span className="text-sm text-blue-500 dark:text-blue-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-blue-500 dark:text-blue-400 text-sm mb-3">
                      {exp.organization}
                    </p>
                    <ul className="space-y-2">
                      {exp.description.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-600 dark:text-slate-400 flex items-start gap-2"
                        >
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <GraduationCap className="w-5 h-5 text-purple-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Education
              </h2>
            </div>

            <motion.div
              variants={itemVariants}
              className="relative pl-8 border-l-2 border-purple-500"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-purple-500 rounded-full" />
              <div className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <span className="text-sm text-purple-500 dark:text-purple-400">
                    {education.period}
                  </span>
                </div>
                <p className="text-purple-500 dark:text-purple-400 text-sm mb-2">
                  {education.school} - {education.location}
                </p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                  GPA: {education.gpa}
                </p>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                    Relevant Coursework:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {education.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 text-xs rounded"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Code className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Technical Skills
              </h2>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Languages
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.languages.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Libraries
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.libraries.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-3">
                    Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.section>

          {/* Certificates Section */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
                <Award className="w-5 h-5 text-yellow-500" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                Certificates
              </h2>
            </div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50"
            >
              {skills.certificates.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-yellow-500 rounded-full" />
                  <span className="text-slate-700 dark:text-slate-300">
                    {cert}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.section>
        </div>
      </div>
    </PageTransition>
  );
}
