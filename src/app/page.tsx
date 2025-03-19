import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/sections/Hero';
import ProductFeature from '@/components/sections/ProductFeature';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <Hero 
        title="Premium Perlite Solutions"
        subtitle="High-quality perlite products for industrial, construction, and horticultural applications"
        ctaText="Explore Products"
        ctaLink="/products"
      />
      
      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Perlite Products
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Discover our range of high-quality perlite products for various applications.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {/* Product Card 1 */}
            <ProductFeature
              title="Construction Perlite"
              description="Lightweight aggregate for plasters, mortars, and insulation. Improves thermal performance and reduces weight."
              link="/products#construction"
            />
            
            {/* Product Card 2 */}
            <ProductFeature
              title="Horticultural Perlite"
              description="Soil amendment for improved aeration and drainage. Perfect for greenhouse growing and hydroponics."
              link="/products#horticulture"
            />
            
            {/* Product Card 3 */}
            <ProductFeature
              title="Industrial Perlite"
              description="Filter aids, fillers, and other industrial applications. High-performance solutions for various industries."
              link="/products#industrial"
            />
          </div>
        </div>
      </section>
      
      {/* Application Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perlite Applications
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Explore the diverse uses of our perlite products across industries.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {/* Application Item 1 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Construction</h3>
              <p className="mt-2 text-sm text-gray-600">
                Lightweight insulation, plasters, and concrete
              </p>
            </div>
            
            {/* Application Item 2 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Horticulture</h3>
              <p className="mt-2 text-sm text-gray-600">
                Soil amendments and hydroponic growing media
              </p>
            </div>
            
            {/* Application Item 3 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Filtration</h3>
              <p className="mt-2 text-sm text-gray-600">
                Filter aids for beverages, pharmaceuticals, and chemicals
              </p>
            </div>
            
            {/* Application Item 4 */}
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900">Industrial</h3>
              <p className="mt-2 text-sm text-gray-600">
                Cryogenic insulation, foundry applications, and more
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/applications" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
              View All Applications
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-blue-100">
              Contact our team today to discuss your perlite needs and discover the best solutions for your projects.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Educational Resources Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Perlite Knowledge Center
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Stay updated with the latest information, case studies, and research about perlite.
            </p>
          </div>
          
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {/* Resource Item 1 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Perlite vs. Vermiculite: Understanding the Differences</h3>
                <p className="mt-2 text-gray-600">
                  A comprehensive guide to help you choose the right material for your specific application.
                </p>
                <Link href="/resources/perlite-vs-vermiculite" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Item 2 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">The Benefits of Perlite in Lightweight Concrete</h3>
                <p className="mt-2 text-gray-600">
                  Discover how perlite improves insulation properties and reduces structural weight.
                </p>
                <Link href="/resources/perlite-in-concrete" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Resource Item 3 */}
            <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Optimizing Soil Mixes with Horticultural Perlite</h3>
                <p className="mt-2 text-gray-600">
                  Learn how to create the perfect growing medium for your plants with perlite.
                </p>
                <Link href="/resources/soil-mixes-with-perlite" className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-800">
                  Read More
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Link href="/resources" className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
              View All Resources
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}