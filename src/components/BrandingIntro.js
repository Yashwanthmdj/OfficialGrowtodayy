import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Rocket, Layers, LineChart } from 'lucide-react';

const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const BrandingIntro = () => {
  return (
    <section className="py-20 bg-primary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,215,0,0.06),transparent_50%)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Build a Brand That Customers Remember
          </h2>
          <p className="text-gray-300 text-lg mt-4 max-w-3xl mx-auto">
            Strong brands are not just logos. They are consistent experiences that
            build trust, create desire, and convert attention into sales.
          </p>
        </motion.div>

        {/* What is Branding */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-20">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="order-2 lg:order-1"
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              What is <span className="gradient-text">Branding</span>?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Branding is the perception your customers have about your business. It
              includes your visuals, tone of voice, product promise, and the
              consistent experience across touchpoints. Great branding reduces
              price sensitivity and increases loyalty.
            </p>
            <ul className="space-y-3">
              {[{
                icon: Sparkles,
                text: 'Clear positioning and unique value',
              }, {
                icon: Layers,
                text: 'Consistent visuals and messaging',
              }, {
                icon: LineChart,
                text: 'Trust that compounds over time',
              }].map((item) => (
                <li key={item.text} className="flex items-start space-x-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/20 flex items-center justify-center mt-0.5">
                    <item.icon className="text-accent" size={18} />
                  </div>
                  <span className="text-gray-200">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-3xl"></div>
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
                <img src="/branding.png" alt="What is Branding" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* How to Scale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className=""
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/10 blur-2xl rounded-3xl"></div>
              <div className="relative glass-card p-2 rounded-2xl overflow-hidden">
                <img src="/scaling.png" alt="Scale your brand" className="w-full h-full object-cover rounded-xl" />
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-3xl font-bold text-white mb-4">
              How can you <span className="gradient-text">scale</span> your brand?
            </h3>
            <p className="text-gray-300 leading-relaxed mb-6">
              Scale is a system. We combine high-converting storefronts with
              performance marketing and retention to grow revenue predictably.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: 'Offer & Positioning', desc: 'Clarify who you serve and why you win.' },
                { title: 'Store Optimization', desc: 'Speed, UX, trust signals, and CRO.' },
                { title: 'Paid Acquisition', desc: 'Meta/Google ads with data-driven testing.' },
                { title: 'Retention', desc: 'Email/SMS flows that turn buyers into fans.' },
              ].map((card) => (
                <div key={card.title} className="glass-card p-5 rounded-xl">
                  <h4 className="text-white font-semibold">{card.title}</h4>
                  <p className="text-gray-300 text-sm mt-1">{card.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BrandingIntro;


