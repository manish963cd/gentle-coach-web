
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { gsap } from 'gsap';
import { HiX, HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';
import { galleryData } from '../data/galleryData';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.from('.gallery-item', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
    });
  }, [filter]);

  const categories = ['all', ...new Set(galleryData.map(item => item.category))];
  const filteredImages = filter === 'all' 
    ? galleryData 
    : galleryData.filter(item => item.category === filter);

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Take a glimpse into our vibrant learning environment and see our students 
              in action as they pursue their educational goals.
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 capitalize ${
                  filter === category
                    ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                className="gallery-item relative group cursor-pointer overflow-hidden rounded-xl"
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(image, index)}
              >
                <img 
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{image.alt}</p>
                    <span className="inline-block bg-white/20 text-white px-2 py-1 rounded text-xs mt-1 capitalize">
                      {image.category}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <div className="relative max-w-7xl mx-auto px-4">
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 bg-white/10 backdrop-blur-sm p-2 rounded-full hover:bg-white/20 transition-colors"
              >
                <HiX className="text-2xl text-white" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); prevImage(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <HiChevronLeft className="text-2xl text-white" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); nextImage(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/10 backdrop-blur-sm p-3 rounded-full hover:bg-white/20 transition-colors"
              >
                <HiChevronRight className="text-2xl text-white" />
              </button>

              {/* Image */}
              <motion.img
                src={selectedImage.url}
                alt={selectedImage.alt}
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              />

              {/* Image Info */}
              <motion.div
                className="absolute bottom-4 left-4 right-4 text-center"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                  <h3 className="text-white text-lg font-medium mb-2">{selectedImage.alt}</h3>
                  <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm capitalize">
                    {selectedImage.category}
                  </span>
                  <div className="text-white/70 text-sm mt-2">
                    {currentIndex + 1} of {filteredImages.length}
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
