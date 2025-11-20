import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, Github, Linkedin, MapPin } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { personalInfo, education } from '../data/projects';

const contactInfo = [
  { icon: Mail, label: 'Email', value: personalInfo.email, href: `mailto:${personalInfo.email}` },
  { icon: Phone, label: 'Phone', value: personalInfo.phone, href: `tel:${personalInfo.phone}` },
  { icon: MapPin, label: 'Location', value: education.location, href: null },
];

const socialLinks = [
  { icon: Github, label: 'GitHub', href: personalInfo.github },
  { icon: Linkedin, label: 'LinkedIn', href: personalInfo.linkedin },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    // In production, you'd send this to a backend or service like Formspree
    console.log('Form submitted:', formData);

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

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
              Get in Touch
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full mb-6" />
            <p className="text-stone-600 dark:text-stone-400 max-w-2xl">
              Have a question or want to work together? Feel free to reach out!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-stone-900 dark:text-white">
                Contact Information
              </h2>

              <div className="space-y-4 mb-8">
                {contactInfo.map((info) => (
                  <div
                    key={info.label}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-stone-200 dark:border-stone-800"
                  >
                    <div className="p-3 bg-orange-100 dark:bg-orange-900/30 rounded-lg">
                      <info.icon className="w-5 h-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-sm text-stone-500 dark:text-stone-400">
                        {info.label}
                      </p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-stone-900 dark:text-white hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-stone-900 dark:text-white">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <h3 className="text-lg font-semibold mb-4 text-stone-900 dark:text-white">
                Connect with me
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white dark:bg-stone-900 rounded-xl shadow-lg border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 hover:text-orange-500 dark:hover:text-orange-400 transition-colors"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-2xl font-bold mb-6 text-stone-900 dark:text-white">
                Send a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-stone-900 dark:text-white placeholder-stone-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all text-stone-900 dark:text-white placeholder-stone-400"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white dark:bg-stone-900 border border-stone-300 dark:border-stone-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition-all resize-none text-stone-900 dark:text-white placeholder-stone-400"
                    placeholder="Your message..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white rounded-xl font-medium flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>

                {submitted && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-green-500 text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}
