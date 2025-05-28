
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { HiStar, HiQuoteLeft } from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';
import { testimonialsData } from '../data/testimonialsData';

const Testimonials = () => {
  useEffect(() => {
    gsap.from('.testimonial-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Student Success Stories</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Hear from our amazing students who have transformed their lives and careers 
              through our educational programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2">5,000+</div>
              <div className="text-gray-600">Success Stories</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2">95%</div>
              <div className="text-gray-600">Job Placement</div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="text-4xl font-bold text-yellow-500 mb-2">150%</div>
              <div className="text-gray-600">Avg. Salary Increase</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.map((testimonial) => (
              <motion.div
                key={testimonial.id}
                className="testimonial-card bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                  <div className="flex text-yellow-500">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="text-xl" />
                    ))}
                  </div>
                </div>
                
                <div className="relative">
                  <HiQuoteLeft className="absolute top-0 left-0 text-4xl text-yellow-500/20" />
                  <p className="text-gray-700 italic pl-8 mb-4">"{testimonial.testimonial}"</p>
                </div>
                
                <div className="border-t pt-4">
                  <span className="inline-block bg-yellow-100 text-yellow-600 px-3 py-1 rounded-full text-sm font-medium">
                    {testimonial.course}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
            <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
              Join thousands of students who have already transformed their careers. 
              Your journey to success starts here.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/courses"
                className="inline-flex items-center px-8 py-4 bg-white text-yellow-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Browse Courses
              </motion.a>
              <motion.a
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-yellow-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Get Started Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
