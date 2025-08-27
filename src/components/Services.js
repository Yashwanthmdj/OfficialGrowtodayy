import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  ShoppingCart, 
  Megaphone, 
  Users, 
  TrendingUp, 
  Settings, 
  Target,
  Zap,
  BarChart3,
  Monitor
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Monitor,
      title: "Website Building",
      description: "High‑converting website or storefront built end‑to‑end with fast performance, clean UX, and persuasive content.",
      features: ["Store Design", "Product Optimization", "Payment Setup", "Mobile Responsiveness"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Megaphone,
      title: "Marketing Strategy",
      description: "Data-driven marketing campaigns that drive traffic and convert visitors into customers.",
      features: ["Social Media Ads", "Email Marketing", "Content Strategy", "Conversion Optimization"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Mentorship",
      description: "One-on-one guidance to help you navigate the e-commerce landscape and avoid common pitfalls.",
      features: ["Weekly Calls", "Strategy Planning", "Problem Solving", "Accountability"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Scaling Strategies",
      description: "Proven methods to scale your business from 1 Lakh to 10 Lakhs+ monthly revenue.",
      features: ["Growth Planning", "Team Building", "Process Optimization", "Market Expansion"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  const additionalFeatures = [
    {
      icon: Settings,
      title: "Technical Support",
      description: "Ongoing technical assistance for your online store"
    },
    {
      icon: Target,
      title: "Audience Research",
      description: "Deep dive into your target market and competition"
    },
    {
      icon: Zap,
      title: "Quick Wins",
      description: "Immediate optimizations for instant results"
    },
    {
      icon: BarChart3,
      title: "Analytics Setup",
      description: "Track your progress with detailed reporting"
    }
  ];

  return (
    <section id="services" className="py-24 bg-primary relative overflow-hidden">
      {/* Uniform background with subtle glow for blur effects */}
      <div className="absolute inset-0 bg-primary"></div>
      <div className="absolute inset-0 bg-[radial-gradient(900px_450px_at_50%_0%,rgba(255,215,0,0.035),transparent_60%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            What I <span className="gradient-text">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Comprehensive e-commerce solutions designed to take you from zero to your first 10 Lakhs 
            and beyond. Each service is tailored to your specific needs and goals.
          </motion.p>
        </motion.div>

        {/* Main Services Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="glass-card p-8 hover-lift group"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="text-white" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="text-accent font-semibold text-sm uppercase tracking-wide">
                  What's Included:
                </h4>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3 text-gray-300">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Features */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-3xl font-bold text-white mb-8">
            Plus These <span className="gradient-text">Bonus Features</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card p-6 text-center hover-lift"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-accent" size={24} />
                </div>
                <h4 className="text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="glass-card p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your <span className="gradient-text">Online Business</span>?
            </h3>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Let's work together to build your online empire. I'll provide you with the 
              strategies, tools, and support you need to achieve your first 10 Lakhs and beyond.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector('#contact');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-accent text-primary font-bold px-8 py-4 rounded-full hover:bg-accent-light transition-colors duration-300 text-lg glow-effect"
            >
              Start Your Journey Today
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
