import React from 'react';
import Image from 'next/image';

const ProductFeature = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Perlite offers a range of powerful features designed to enhance your productivity
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                <path d="M2 17l10 5 10-5"></path>
                <path d="M2 12l10 5 10-5"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Scalable Architecture</h3>
            <p className="text-gray-600">Built with the latest technologies to ensure your project can grow with your needs</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Real-time Updates</h3>
            <p className="text-gray-600">Stay synchronized with instant updates and seamless integration</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="w-14 h-14 bg-primary-light rounded-full flex items-center justify-center mb-6">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Performance Optimized</h3>
            <p className="text-gray-600">Engineered for speed and efficiency to deliver the best user experience</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFeature;