import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProductsPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Perlite Products</h1>
          <p className="mt-4 max-w-3xl text-xl text-blue-100">
            Discover our comprehensive range of high-quality perlite products engineered for performance across various applications.
          </p>
        </div>
      </div>

      {/* Products Categories Overview */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-gray-900">Categories</h2>
          <p className="mt-2 text-lg text-gray-600">
            We offer specialized perlite products for construction, horticulture, industrial applications, and filtration.
          </p>
        </div>

        {/* Construction Products */}
        <div id="construction" className="mb-24 scroll-mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Construction Perlite
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our construction-grade perlite products provide exceptional thermal insulation, 
                fire resistance, and lightweight properties for building applications.
              </p>
              
              <div className="mt-8">
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Plaster Aggregate</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Fine-grade perlite for plaster and stucco applications, providing improved workability and insulation value.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Insulating Concrete</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Medium to coarse-grade perlite for lightweight, insulating concrete and screeds.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Loose-Fill Insulation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Coarse-grade expanded perlite for cavity wall insulation and attic fill applications.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Request technical specifications <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Construction Perlite Image</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Horticultural Products */}
        <div id="horticulture" className="mb-24 scroll-mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Horticultural Perlite Image</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Horticultural Perlite
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our horticultural perlite products enhance soil structure, improve aeration, and optimize drainage 
                for healthy plant growth in various growing environments.
              </p>
              
              <div className="mt-8">
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Soil Amendment</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Coarse-grade perlite for improving soil structure, aeration, and drainage in containers and garden beds.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Hydroponic Medium</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Clean, sterile perlite with calibrated sizing for hydroponic and soilless growing systems.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Seed Starting Mix</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Fine-grade perlite for seed germination and propagation applications.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Request technical specifications <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Industrial Products */}
        <div id="industrial" className="mb-24 scroll-mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Industrial Perlite
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our industrial perlite products serve as efficient filter aids, fillers, and thermal insulators 
                for a wide range of specialized industrial applications.
              </p>
              
              <div className="mt-8">
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Cryogenic Insulation</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Ultra-fine perlite for insulating low-temperature applications like LNG storage tanks.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Foundry Applications</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Specialized perlite products for metal casting and foundry operations.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Industrial Fillers</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Perlite products for paints, plastics, and elastomeric applications.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Request technical specifications <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
            
            <div className="mt-10 lg:mt-0 bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Industrial Perlite Image</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Filtration Products */}
        <div id="filtration" className="mb-16 scroll-mt-24">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div className="order-2 lg:order-1 mt-10 lg:mt-0 bg-gray-100 rounded-xl p-6 flex items-center justify-center">
              <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
                <span className="text-gray-600">Filtration Perlite Image</span>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Filtration Perlite
              </h2>
              <p className="mt-3 max-w-3xl text-lg text-gray-500">
                Our filtration perlite products serve as efficient filter aids for beverages, pharmaceuticals, 
                and other liquid filtration applications.
              </p>
              
              <div className="mt-8">
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Beverage Filtration</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Food-grade perlite filter aids for wine, beer, and juice clarification.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Pharmaceutical Grade</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Ultra-pure perlite for pharmaceutical and bioprocessing filtration applications.
                  </p>
                </div>
                
                <div className="mt-5">
                  <h3 className="text-lg font-medium text-gray-900">Chemical Processing</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Chemical-resistant perlite filter aids for industrial chemical processing.
                  </p>
                </div>
              </div>
              
              <div className="mt-8">
                <Link href="/contact" className="text-base font-medium text-blue-600 hover:text-blue-500">
                  Request technical specifications <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-blue-50">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Need a custom solution?</span>
            <span className="block text-blue-600">Contact our team today.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                Request a Quote
              </Link>
            </div>
            <div className="ml-3 inline-flex rounded-md shadow">
              <Link href="/resources" className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}