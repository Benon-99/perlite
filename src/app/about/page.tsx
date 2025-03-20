import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Page metadata
export const metadata = {
  title: 'About Us | Mihran Company - Perlite Products',
  description: 'Learn about Mihran Company\'s history, values, and commitment to providing high-quality perlite products for various industries.',
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90 z-10" />
        <div className="relative h-[400px] overflow-hidden">
          <Image 
            src="/images/hero-image.jpg" 
            alt="Mihran Company facilities" 
            fill 
            className="object-cover" 
            priority
          />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="absolute bottom-0 left-0 right-0 transform translate-y-1/2 px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-5xl mx-auto">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Mihran Company</h1>
              <p className="text-xl text-gray-600">
                A leading innovator in the perlite industry with over two decades of excellence, 
                dedicated to providing sustainable solutions and premium quality products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p>
                Founded in 2002, Mihran Company has established itself as a pioneering force in 
                the perlite industry, continuously delivering innovative solutions to meet evolving 
                customer needs.
              </p>
              <p>
                What began as a small operation has grown into a global enterprise, serving 
                clients across construction, horticulture, and industrial sectors with our 
                premium-grade perlite products.
              </p>
              <p>
                Our state-of-the-art manufacturing facilities and rigorous quality control processes 
                ensure that every product bearing the Mihran name meets the highest standards of 
                excellence.
              </p>
            </div>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-blue-600/10" />
            <div className="relative h-full flex flex-col items-center justify-center text-center p-8 bg-white/90">
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">20+</span>
                <p className="text-gray-600 mt-2">Years of Excellence</p>
              </div>
              <div className="mb-6">
                <span className="text-5xl font-bold text-blue-600">50+</span>
                <p className="text-gray-600 mt-2">Countries Served</p>
              </div>
              <div>
                <span className="text-5xl font-bold text-blue-600">100+</span>
                <p className="text-gray-600 mt-2">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission and Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Mission & Values</h2>
            <p className="text-xl text-gray-600">
              Guided by a commitment to excellence, sustainability, and innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
                  <path d="M2 17l10 5 10-5"></path>
                  <path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Excellence</h3>
              <p className="text-gray-600">
                We are committed to maintaining the highest standards in every aspect of our 
                operations, from raw material selection to product delivery.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                Environmental responsibility is at the core of our business model. We continuously 
                strive to minimize our ecological footprint while maximizing resource efficiency.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Customer Focus</h3>
              <p className="text-gray-600">
                We place our customers at the center of everything we do, constantly seeking to 
                understand and exceed their expectations with tailored solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Meet the experts behind Mihran Company's success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Michael Johnson</h3>
                <p className="text-blue-600 mb-4">Chief Executive Officer</p>
                <p className="text-gray-600">
                  With over 25 years of industry experience, Michael has led Mihran Company's growth 
                  strategy since its founding, focusing on innovation and market expansion.
                </p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Sarah Chen</h3>
                <p className="text-blue-600 mb-4">Chief Technology Officer</p>
                <p className="text-gray-600">
                  Sarah leads our R&D department, driving product innovation and technological 
                  advancement. Her expertise has resulted in several patented processing technologies.
                </p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">David Rodriguez</h3>
                <p className="text-blue-600 mb-4">Chief Operations Officer</p>
                <p className="text-gray-600">
                  David oversees all operational aspects of Mihran Company, ensuring efficiency, 
                  quality control, and sustainable manufacturing practices across our facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Excellence */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Manufacturing Excellence</h2>
              <div className="prose prose-lg max-w-none">
                <p>
                  Our state-of-the-art manufacturing facilities are equipped with the latest technology 
                  to ensure consistent quality and optimal performance of every perlite product.
                </p>
                <p>
                  We maintain rigorous quality control processes throughout production, from raw material 
                  selection to final product testing. Our facilities are ISO 9001 certified, reflecting 
                  our commitment to meeting international quality standards.
                </p>
                <p>
                  Environmental responsibility is integrated into our manufacturing processes. We utilize 
                  energy-efficient equipment and implement waste reduction initiatives to minimize our 
                  environmental impact.
                </p>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                  Schedule a Facility Tour
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cutting-Edge Technology</h3>
                <p className="text-gray-600">Utilizing advanced equipment for optimal production efficiency</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Quality Assurance</h3>
                <p className="text-gray-600">Rigorous testing at every stage of production</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Global Distribution</h3>
                <p className="text-gray-600">Efficient logistics network for worldwide delivery</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
                    <path d="M12 3v19"></path>
                    <path d="M5 8l14 8"></path>
                    <path d="M5 16l14-8"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Sustainable Practices</h3>
                <p className="text-gray-600">Eco-friendly production methods and waste reduction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Work With Us?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Contact our team today to discuss your perlite needs and discover how we can help with your project.
            </p>
            <div className="mt-8 flex justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 shadow-lg">
                Contact Us
              </Link>
              <Link href="/products" className="ml-4 inline-flex items-center justify-center px-5 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-blue-700">
                View Our Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;