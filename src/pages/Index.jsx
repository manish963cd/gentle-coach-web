
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HiPlay, 
  HiStar, 
  HiUsers, 
  HiAcademicCap, 
  HiChartBar, 
  HiLightBulb,
  HiArrowRight 
} from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';
import { coursesData } from '../data/coursesData';
import { testimonialsData } from '../data/testimonialsData';

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Hero animations
    const tl = gsap.timeline();
    tl.from('.hero-title', { duration: 1, y: 50, opacity: 0 })
      .from('.hero-subtitle', { duration: 1, y: 30, opacity: 0 }, '-=0.5')
      .from('.hero-buttons', { duration: 1, y: 30, opacity: 0 }, '-=0.5')
      .from('.hero-image', { duration: 1, x: 50, opacity: 0 }, '-=0.7');

    // Stats animation
    gsap.from('.stat-item', {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      scrollTrigger: {
        trigger: statsRef.current,
        start: 'top 80%',
      },
    });

    // Features animation
    gsap.from('.feature-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: featuresRef.current,
        start: 'top 80%',
      },
    });

    // Floating elements
    gsap.to('.float-1', {
      duration: 3,
      y: -20,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
    });

    gsap.to('.float-2', {
      duration: 4,
      y: -15,
      repeat: -1,
      yoyo: true,
      ease: 'power2.inOut',
      delay: 1,
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const stats = [
    { icon: HiUsers, value: '5,000+', label: 'Happy Students' },
    { icon: HiAcademicCap, value: '150+', label: 'Expert Instructors' },
    { icon: HiChartBar, value: '95%', label: 'Success Rate' },
    { icon: HiStar, value: '4.9/5', label: 'Average Rating' },
  ];

  const features = [
    {
      icon: HiPlay,
      title: 'Interactive Learning',
      description: 'Engage with hands-on projects and real-world scenarios that make learning enjoyable and effective.'
    },
    {
      icon: HiUsers,
      title: 'Expert Mentorship',
      description: 'Learn from industry professionals with years of experience and get personalized guidance.'
    },
    {
      icon: HiLightBulb,
      title: 'Career Focused',
      description: 'Our curriculum is designed to prepare you for real job opportunities in your chosen field.'
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-200 rounded-full opacity-20 float-1"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-200 rounded-full opacity-20 float-2"></div>
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-pink-200 rounded-full opacity-15 float-1"></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <motion.h1 
                className="hero-title text-5xl lg:text-7xl font-bold mb-6"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                Transform Your
                <span className="gradient-text"> Future</span>
                <br />
                With Expert Coaching
              </motion.h1>
              
              <motion.p 
                className="hero-subtitle text-xl text-gray-600 mb-8 max-w-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                Join thousands of successful students who have transformed their careers 
                with our comprehensive coaching programs.
              </motion.p>
              
              <motion.div 
                className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                <Link 
                  to="/courses"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Explore Courses
                  <HiArrowRight className="ml-2" />
                </Link>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-600 text-purple-600 font-semibold rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
                >
                  Start Free Trial
                </Link>
              </motion.div>
            </div>
            
            <motion.div 
              className="hero-image relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Students learning"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-2xl"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full mb-4">
                  <stat.icon className="text-2xl" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose <span className="gradient-text">EduCoach</span>?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide a comprehensive learning experience that goes beyond traditional education
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full mb-6">
                  <feature.icon className="text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured <span className="gradient-text">Courses</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our most popular courses designed to fast-track your career growth
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {coursesData.slice(0, 3).map((course) => (
              <motion.div 
                key={course.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                whileHover={{ scale: 1.02 }}
              >
                <img 
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                    <div className="flex items-center text-yellow-500">
                      <HiStar className="text-sm" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                    <Link 
                      to="/courses"
                      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/courses"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 hover:scale-105"
            >
              View All Courses
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Preview */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Students Say</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Join thousands of successful students who have transformed their careers
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonialsData.slice(0, 2).map((testimonial) => (
              <motion.div 
                key={testimonial.id}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm opacity-75">{testimonial.role}</div>
                  </div>
                  <div className="ml-auto flex text-yellow-400">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <HiStar key={i} className="text-sm" />
                    ))}
                  </div>
                </div>
                <p className="opacity-90">{testimonial.testimonial}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/testimonials"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300"
            >
              Read More Stories
              <HiArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
