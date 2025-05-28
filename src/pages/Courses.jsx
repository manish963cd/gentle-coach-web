
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  HiX, 
  HiStar, 
  HiUsers, 
  HiClock, 
  HiAcademicCap,
  HiPlay,
  HiCheckCircle
} from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';
import { coursesData } from '../data/coursesData';

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [filter, setFilter] = useState('All');
  const coursesRef = useRef(null);

  useEffect(() => {
    // Animate course cards on load
    gsap.from('.course-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
    });
  }, []);

  const categories = ['All', ...new Set(coursesData.map(course => course.category))];
  const filteredCourses = filter === 'All' 
    ? coursesData 
    : coursesData.filter(course => course.category === filter);

  const openModal = (course) => {
    setSelectedCourse(course);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCourse(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Courses</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Discover our comprehensive range of courses designed to help you master new skills 
              and advance your career in today's competitive market.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section ref={coursesRef} className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                className="course-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                onClick={() => openModal(course)}
              >
                <div className="relative">
                  <img 
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 text-purple-600 px-3 py-1 rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {course.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-yellow-500">
                      <HiStar className="text-sm" />
                      <span className="ml-1 text-sm text-gray-600">{course.rating}</span>
                      <span className="ml-2 text-sm text-gray-500">({course.students} students)</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-gray-500">
                      <HiClock className="text-sm mr-1" />
                      <span className="text-sm">{course.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <HiUsers className="text-sm mr-1" />
                      <span className="text-sm">{course.instructor}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-purple-600">{course.price}</span>
                    <div className="flex items-center text-purple-600 font-medium">
                      <span>View Details</span>
                      <HiPlay className="ml-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modal */}
      <AnimatePresence>
        {selectedCourse && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedCourse.image}
                  alt={selectedCourse.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                >
                  <HiX className="text-xl text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {selectedCourse.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedCourse.title}</h2>
                    <p className="text-lg text-gray-600 mb-6">{selectedCourse.description}</p>
                    
                    <div className="mb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Syllabus</h3>
                      <div className="space-y-3">
                        {selectedCourse.syllabus.map((item, index) => (
                          <div key={index} className="flex items-center">
                            <HiCheckCircle className="text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">Course Highlights</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        {selectedCourse.highlights.map((highlight, index) => (
                          <div key={index} className="flex items-center">
                            <HiCheckCircle className="text-purple-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-1">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="text-center mb-6">
                        <div className="text-3xl font-bold text-purple-600 mb-2">{selectedCourse.price}</div>
                        <div className="text-gray-500">One-time payment</div>
                      </div>
                      
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Duration:</span>
                          <span className="font-medium">{selectedCourse.duration}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Level:</span>
                          <span className="font-medium">{selectedCourse.level}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Instructor:</span>
                          <span className="font-medium">{selectedCourse.instructor}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Students:</span>
                          <span className="font-medium">{selectedCourse.students}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-gray-600">Rating:</span>
                          <div className="flex items-center">
                            <HiStar className="text-yellow-500 mr-1" />
                            <span className="font-medium">{selectedCourse.rating}</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 mb-4">
                        Enroll Now
                      </button>
                      
                      <button className="w-full border-2 border-purple-600 text-purple-600 font-semibold py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300">
                        Free Preview
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Courses;
