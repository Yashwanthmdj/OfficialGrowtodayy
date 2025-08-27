import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Results', href: '#results' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://instagram.com/growtodayy',
      icon: Instagram,
      color: 'hover:text-pink-400'
    },
    {
      name: 'Email',
      href: 'mailto:grow.todayy@gmail.com',
      icon: Mail,
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <footer className="bg-primary relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,rgba(255,215,0,0.035),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="mb-6"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                    <span className="text-primary font-bold text-xl">Y</span>
                  </div>
                  <span className="text-white font-bold text-2xl">@growtodayy</span>
                </div>
                <p className="text-gray-400 leading-relaxed max-w-md">
                  Helping beginners make their first 10 Lakhs online through proven e-commerce 
                  strategies, Shopify expertise, and personalized mentorship.
                </p>
              </motion.div>

              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="flex space-x-4"
              >
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-12 h-12 bg-glass backdrop-blur-sm border border-white/20 rounded-lg flex items-center justify-center text-white transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {footerLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => {
                        const element = document.querySelector(link.href);
                        if (element) element.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-gray-400 hover:text-accent transition-colors duration-300 text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-white font-semibold text-lg mb-6">Get In Touch</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Mail size={16} className="text-accent" />
                  <span>grow.todayy09@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400 text-sm">
                  <Instagram size={16} className="text-accent" />
                  <span>@growtodayy</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              <p>
                © {currentYear} <span className="text-accent">@growtodayy</span>. All rights reserved.
              </p>
              <p className="mt-1">
                Made with <Heart className="inline w-4 h-4 text-red-500" /> for entrepreneurs
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center text-accent hover:bg-accent/30 transition-colors duration-300"
              >
                <ArrowUp size={20} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-accent/5 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/5 rounded-full blur-2xl"></div>
    </footer>
  );
};

export default Footer;
