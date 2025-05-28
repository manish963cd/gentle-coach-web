
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { 
  HiDownload, 
  HiDocument, 
  HiSearch,
  HiFilter,
  HiEye
} from 'react-icons/hi';
import Navbar from '../components/Layout/Navbar';
import { resourcesData } from '../data/resourcesData';

const Resources = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [filteredResources, setFilteredResources] = useState(resourcesData);

  useEffect(() => {
    gsap.from('.resource-card', {
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.1,
    });
  }, []);

  useEffect(() => {
    let filtered = resourcesData;
    
    if (categoryFilter !== 'All') {
      filtered = filtered.filter(resource => resource.category === categoryFilter);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(resource =>
        resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }
    
    setFilteredResources(filtered);
  }, [searchTerm, categoryFilter]);

  const categories = ['All', ...new Set(resourcesData.map(resource => resource.category))];

  const handleDownload = (resource) => {
    // Simulate download - in a real app, this would trigger actual file download
    console.log(`Downloading ${resource.fileName}`);
    // You would implement actual download logic here
    alert(`Downloading ${resource.title}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="text-5xl font-bold mb-6">Learning Resources</h1>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Access our comprehensive collection of guides, cheat sheets, and learning materials 
              to supplement your education journey.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                    categoryFilter === category
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredResources.length === 0 ? (
            <div className="text-center py-12">
              <HiDocument className="mx-auto text-6xl text-gray-300 mb-4" />
              <h3 className="text-xl font-medium text-gray-500 mb-2">No resources found</h3>
              <p className="text-gray-400">Try adjusting your search terms or filters</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <motion.div
                  key={resource.id}
                  className="resource-card bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg">
                        <HiDocument className="text-2xl text-green-600" />
                      </div>
                      <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.category}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{resource.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <span>{resource.fileSize}</span>
                      <div className="flex items-center">
                        <HiEye className="mr-1" />
                        <span>{resource.downloadCount} downloads</span>
                      </div>
                    </div>
                    
                    <button
                      onClick={() => handleDownload(resource)}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
                    >
                      <HiDownload className="mr-2" />
                      Download PDF
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Resources;
