import { motion } from 'framer-motion';
import { Code, Database, BarChart3, Award } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { skills, personalInfo, education } from '../data/projects';

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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const skillCategories = [
  { title: 'Languages', items: skills.languages, icon: Code },
  { title: 'Libraries', items: skills.libraries, icon: BarChart3 },
  { title: 'Tools', items: skills.tools, icon: Database },
  { title: 'Certificates', items: skills.certificates, icon: Award },
];

export default function About() {
  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
              About Me
            </h1>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
          </motion.div>

          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-3xl mx-auto mb-16"
          >
            <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-slate-900/50">
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                I'm {personalInfo.name}, a {personalInfo.title} at the {education.school},
                pursuing a {education.degree}. With a {education.gpa} GPA, I'm passionate about
                leveraging data to solve complex problems and uncover meaningful insights.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                My experience spans from building end-to-end data pipelines and interactive
                dashboards to developing predictive models with machine learning. I'm particularly
                interested in sports analytics and computational geometry, where I can combine my
                technical skills with my curiosity for real-world applications.
              </p>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-6"
          >
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                className="bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <category.icon className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className="px-3 py-1.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-sm rounded-lg"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <h2 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white text-center">
              Education
            </h2>
            <div className="max-w-2xl mx-auto bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg shadow-slate-200/50 dark:shadow-slate-900/50">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-blue-500 dark:text-blue-400">
                    {education.school}
                  </p>
                </div>
                <div className="text-sm text-slate-500 dark:text-slate-400 mt-2 sm:mt-0">
                  <p>{education.period}</p>
                  <p className="font-semibold">{education.gpa} GPA</p>
                </div>
              </div>
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
        </div>
      </div>
    </PageTransition>
  );
}
