// src/components/ui/CoolContactForm.jsx
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap
} from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Get in touch via email",
    value: "samiranmalakar718@gmail.com",
    link: "mailto:samiranmalakar718@gmail.com",
    gradient: "from-gray-600/20 to-gray-400/20",
    hoverColor: "gray"
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Speak directly with our team",
    value: "+91 9707030281",
    link: "tel:+919707030281",
    gradient: "from-gray-500/20 to-gray-300/20",
    hoverColor: "gray"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    description: "Our office",
    value: "Guwahati, Assam, India",
    link: "#location",
    gradient: "from-gray-700/20 to-gray-500/20",
    hoverColor: "gray"
  }
];

const companyStats = [
  { label: "Response Time", value: "< 2 hours", icon: Clock },
  { label: "Happy Clients", value: "50+", icon: Globe },
  { label: "Projects Done", value: "100+", icon: Shield },
  { label: "Success Rate", value: "99%", icon: Zap }
];

function CoolContactForm({
  title = "Let's Build Something Great Together",
  description = "Have a project in mind? I'd love to hear about it. Let's discuss how we can bring your ideas to life.",
  phone = "+91 9707030281",
  email = "samiranmalakar718@gmail.com",
  location = "Guwahati, Assam, India"
}) {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef(null);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      await emailjs.sendForm(
        'service_nssmo3i',         // Service ID
        'template_sj340yn',        // Template ID
        form.current,
        'EQvlWxz9CjpS0Tr7m'        // Public Key
      );
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', company: '', message: '' });
      }, 3000);
    } catch (error) {
      console.error('EmailJS error:', error);
      // Optionally show an error message to the user here
    } finally {
      setIsSubmitting(false);
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96]
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  return (
    <section className="relative py-32 bg-gradient-to-br from-black via-gray-960 to-black text-white overflow-hidden min-h-screen">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br black-700"
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          style={{ backgroundSize: '400% 400%' }}
        />
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-white/10 rounded-full blur-6xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-gray-900/10 rounded-full blur-6xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + i * 8}%`,
                transform: `rotate(${30 + i * 20}deg)`
              }}
              animate={{ opacity: [0.1, 0.4, 0.1], scaleY: [1, 1.5, 1] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * 0.5
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {/* Header */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: 'rgba(255, 255, 255, 0.3)' }}
          >
            <motion.div animate={{ rotate: 360 }} transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}>
              <Sparkles className="h-4 w-4 text-gray-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">✨ Let's Connect</span>
            <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 className="text-4xl sm:text-6xl md:text-7xl  font-mono mb-8 tracking-tight" variants={fadeInUp}>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
              {title}
            </span>
          </motion.h2>

          <motion.p className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed" variants={fadeInUp}>
            {description}
          </motion.p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20" variants={fadeInUp}>
          {companyStats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] group hover:bg-white/[0.08] transition-all"
              whileHover={{ scale: 1.05, y: -5 }}
              variants={fadeInUp}
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-gradient-to-br from-gray-600/20 to-gray-400/20 border border-white/20 flex items-center justify-center mx-auto mb-3"
                whileHover={{ rotateY: 180 }}
                transition={{ duration: 0.6 }}
              >
                <stat.icon className="w-6 h-6 text-gray-300" />
              </motion.div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-white/60 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Send me a message</h3>
              <p className="text-white/60 text-lg">
                Tell me about your project and I'll get back to you within 24 hours.
              </p>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={e => handleInputChange('name', e.target.value)}
                    className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all ${
                      errors.name ? 'border-red-400' : 'border-white/[0.15]'
                    }`}
                  />
                  {errors.name && <p className="text-red-400 text-sm mt-2">{errors.name}</p>}
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={e => handleInputChange('email', e.target.value)}
                    className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all ${
                      errors.email ? 'border-red-400' : 'border-white/[0.15]'
                    }`}
                  />
                  {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
                </div>
              </div>

              {/* Company Field */}
              <div className="relative">
                <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={e => handleInputChange('company', e.target.value)}
                  className="w-full pl-10 pr-4 py-4 bg-white/[0.08] border border-white/[0.15] rounded-xl text-white placeholder-white/40 focus:outline-none transition-all"
                />
              </div>

              {/* Message Field */}
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                <textarea
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={6}
                  value={formData.message}
                  onChange={e => handleInputChange('message', e.target.value)}
                  className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none transition-all resize-none ${
                    errors.message ? 'border-red-400' : 'border-white/[0.15]'
                  }`}
                />
                {errors.message && <p className="text-red-400 text-sm mt-2">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative group overflow-hidden bg-gradient-to-r from-white to-gray-200 text-black font-medium py-4 rounded-xl disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting
                    ? <motion.div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full"
                        animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity }} />
                    : <>
                        <Send className="h-5 w-5" /> Send Message <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                  }
                </span>
              </motion.button>
            </form>

            {/* Success State */}
            <AnimatePresence mode="wait">
              {isSubmitted && (
                <motion.div key="success" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-12">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Message Sent!</h3>
                  <p className="text-white/60 text-lg mb-6">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Other Contact Methods Section */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Other ways to reach me</h3>
              <p className="text-white/60 text-lg">Choose the method that works best for you.</p>
            </div>
            <div className="space-y-6">
              {contactMethods.map((m, i) => (
                <motion.a
                  key={i}
                  href={m.link}
                  className="block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${m.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <m.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">{m.title}</h4>
                      <p className="text-white/60 text-sm mb-2">{m.description}</p>
                      <p className="text-white font-medium">{m.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
            <motion.div className="p-6 bg-gradient-to-br from-gray-600/[0.08] to-gray-400/[0.08] backdrop-blur-xl rounded-2xl border border-gray-400/30" variants={fadeInUp}>
              <h4 className="text-lg font-semibold text-white mb-3">Quick Response Guarantee</h4>
              <p className="text-white/80 text-sm leading-relaxed">
                I pride myself on rapid response times. All inquiries are typically answered within 2 hours during business hours,
                and I'll schedule a call within 24 hours to discuss your project in detail.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default CoolContactForm;
