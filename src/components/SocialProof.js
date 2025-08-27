import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Star, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const SocialProof = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const reviews = [
    {
      initials: "RK",
      name: "Ravi K.",
      title: "Startup Founder",
      review: "GrowToday built a professional website for my brand. The design was clean, responsive, and helped me attract more clients.",
      rating: 5
    },
    {
      initials: "AP",
      name: "Ananya P.",
      title: "Fashion Brand Owner",
      review: "Their Shopify development and marketing strategies transformed my business. Within 2 months, I started getting consistent sales.",
      rating: 5
    },
    {
      initials: "VS",
      name: "Vikas S.",
      title: "Tech Entrepreneur",
      review: "The mobile application they developed was smooth, user-friendly, and delivered on time. Excellent support throughout the process.",
      rating: 5
    },
    {
      initials: "SR",
      name: "Sneha R.",
      title: "Digital Creator",
      review: "GrowToday didn't just make a website; they created a brand identity. Their research and strategy gave my business a new direction.",
      rating: 5
    },
    {
      initials: "PK",
      name: "Priya K.",
      title: "Business Coach",
      review: "Their marketing campaigns are extremely well-researched. I saw a clear increase in customer engagement within weeks.",
      rating: 5
    },
    {
      initials: "AM",
      name: "Arjun M.",
      title: "Online Store Owner",
      review: "From branding to scaling, their strategies were practical and result-driven. I recommend them to anyone starting out.",
      rating: 5
    },
    {
      initials: "LK",
      name: "Lakshmi K.",
      title: "Entrepreneur",
      review: "The team is highly professional. They delivered my website ahead of schedule and the quality exceeded expectations.",
      rating: 5
    },
    {
      initials: "NS",
      name: "Nikhil S.",
      title: "App Startup Owner",
      review: "I was impressed with their approach to research before development. It saved me time and money while ensuring long-term results.",
      rating: 5
    },
    {
      initials: "SJ",
      name: "Sanjana J.",
      title: "Branding Consultant",
      review: "Their branding solutions gave my business a polished and premium look. My clients now take my work more seriously.",
      rating: 5
    },
    {
      initials: "HK",
      name: "Harsh K.",
      title: "E-commerce Entrepreneur",
      review: "The marketing strategy they designed was innovative and effective. My ad ROI improved significantly after working with them.",
      rating: 5
    },
    {
      initials: "MT",
      name: "Meena T.",
      title: "Small Business Owner",
      review: "They guided me through every step – website setup, marketing, and branding. The support was excellent and very professional.",
      rating: 5
    },
    {
      initials: "YD",
      name: "Yogesh D.",
      title: "Tech Founder",
      review: "GrowToday focuses on long-term growth, not just short-term results. Their professionalism and insights are outstanding.",
      rating: 5
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  // Auto-play carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying, reviews.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="results" className="py-20 bg-primary-light relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,215,0,0.05),transparent_50%)]"></div>
      
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
            What Our <span className="gradient-text">Clients Say</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Real feedback from entrepreneurs who've transformed their businesses with us.
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative max-w-4xl mx-auto px-4 sm:px-0"
        >
          {/* Main Review Display */}
          <div className="relative h-64 sm:h-72 md:h-80 mb-6 sm:mb-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="glass-card p-4 sm:p-6 md:p-8 h-full flex flex-col justify-center">
                  <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm sm:text-base md:text-lg">{reviews[currentIndex].initials}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-white font-semibold text-sm sm:text-base md:text-lg">{reviews[currentIndex].name}</h4>
                      <p className="text-gray-400 text-xs sm:text-sm">{reviews[currentIndex].title}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4 sm:mb-6 flex-1">
                    "{reviews[currentIndex].review}"
                  </p>
                  
                  <div className="flex items-center space-x-1">
                    {renderStars(reviews[currentIndex].rating)}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-2 sm:space-x-4 mb-6 sm:mb-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-glass backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
            >
              <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-glass backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
            >
              {isPlaying ? <Pause size={18} className="sm:w-5 sm:h-5" /> : <Play size={18} className="sm:w-5 sm:h-5" />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextSlide}
              className="w-10 h-10 sm:w-12 sm:h-12 bg-glass backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:text-accent transition-colors duration-300"
            >
              <ChevronRight size={18} className="sm:w-5 sm:h-5" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-1.5 sm:space-x-2 overflow-x-auto pb-2">
            {reviews.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 flex-shrink-0 ${
                  index === currentIndex 
                    ? 'bg-accent scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;
