
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  HiMail, 
  HiPhone, 
  HiLocationMarker, 
  HiClock,
  HiPaperAirplane
} from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    gsap.from('.contact-form', {
      duration: 1,
      x: -50,
      opacity: 0,
    });
    
    gsap.from('.contact-info', {
      duration: 1,
      x: 50,
      opacity: 0,
      delay: 0.3,
    });
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: HiMail,
      title: 'Email Us',
      content: 'info@educoach.com',
      description: 'Send us an email anytime!'
    },
    {
      icon: HiPhone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: 'Mon-Fri from 8am to 5pm'
    },
    {
      icon: HiLocationMarker,
      title: 'Visit Us',
      content: '123 Education Street, Learning City, LC 12345',
      description: 'Come and see our campus'
    },
    {
      icon: HiClock,
      title: 'Office Hours',
      content: 'Mon - Fri: 8:00AM - 6:00PM',
      description: 'Weekend appointments available'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Have questions about our courses? Need guidance on your learning journey? 
              We're here to help you every step of the way.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="contact-form">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select a subject</option>
                        <option value="course-inquiry">Course Inquiry</option>
                        <option value="enrollment">Enrollment</option>
                        <option value="technical-support">Technical Support</option>
                        <option value="partnership">Partnership</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold py-4 rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <HiPaperAirplane className="mr-2" />
                        Send Message
                      </div>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>

            {/* Contact Information */}
            <div className="contact-info space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  We're always here to help. Reach out to us through any of the following methods, 
                  and we'll get back to you as soon as possible.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -2 }}
                  >
                    <div className="p-3 bg-gradient-to-r from-teal-100 to-cyan-100 rounded-lg">
                      <info.icon className="text-2xl text-teal-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{info.title}</h3>
                      <p className="text-gray-700 font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-gray-500">{info.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Map placeholder */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="h-64 bg-gradient-to-br from-teal-100 to-cyan-100 flex items-center justify-center">
                  <div className="text-center">
                    <HiLocationMarker className="text-4xl text-teal-600 mx-auto mb-2" />
                    <p className="text-gray-600">Interactive Map</p>
                    <p className="text-sm text-gray-500">Coming Soon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="text-teal-600">Questions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our courses and services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                question: "How do I enroll in a course?",
                answer: "You can enroll by browsing our courses page, selecting your desired course, and clicking the 'Enroll Now' button. You'll be guided through the payment and setup process."
              },
              {
                question: "Are there any prerequisites?",
                answer: "Prerequisites vary by course. Each course page clearly lists any required knowledge or skills. Many of our beginner courses have no prerequisites."
              },
              {
                question: "Do you offer certificates?",
                answer: "Yes! Upon successful completion of any course, you'll receive a certificate of completion that you can add to your resume and LinkedIn profile."
              },
              {
                question: "Can I get a refund?",
                answer: "We offer a 30-day money-back guarantee. If you're not satisfied with your course within the first 30 days, we'll provide a full refund."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                className="bg-gray-50 rounded-xl p-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
