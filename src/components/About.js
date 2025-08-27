import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Target, Rocket, CheckCircle } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const achievements = [
    {
      icon: Award,
      title: "3+ Years Experience",
      description: "Deep expertise in e-commerce and digital marketing"
    },
    {
      icon: Target,
      title: "10L+ Sales Generated",
      description: "Proven track record of driving revenue growth"
    },
    {
      icon: Rocket,
      title: "100+ Entrepreneurs Helped",
      description: "Successfully guided beginners to their first sales"
    },
    {
      icon: CheckCircle,
      title: "Shopify Expert",
      description: "Specialized in building and scaling online stores"
    }
  ];

  return (
    <section id="about" className="hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      
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
            About <span className="gradient-text">Yash</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            I'm passionate about helping beginners break into the world of e-commerce and 
            achieve their first major milestone - making 10 Lakhs online. With over 3 years 
            of experience and generating 10L+ in sales, I've developed proven strategies 
            that work.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass-card p-6 text-center hover-lift"
            >
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="text-accent" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {achievement.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white mb-6">
              My <span className="gradient-text">Journey</span>
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I started just like you - with a dream to build something online and 
                achieve financial freedom. The journey wasn't easy, but through trial 
                and error, I discovered what actually works in e-commerce.
              </p>
              <p>
                Today, I've helped over 100 entrepreneurs launch their online stores, 
                implement effective marketing strategies, and scale their businesses 
                to sustainable revenue streams.
              </p>
              <p>
                My mission is simple: to share the knowledge and strategies that 
                helped me succeed, so you can avoid the common pitfalls and reach 
                your goals faster.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="relative"
          >
            <div className="glass-card p-8 text-center">
              <div className="w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl font-bold text-accent">Y</span>
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Ready to Start?</h4>
              <p className="text-gray-300 mb-6">
                Let's work together to build your online empire and achieve your first 10 Lakhs.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector('#contact');
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-accent text-primary font-bold px-6 py-3 rounded-full hover:bg-accent-light transition-colors duration-300 glow-effect"
              >
                Let's Talk
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
