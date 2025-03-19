import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-primary-dark text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Discover the power of Perlite
          </h1>
          <p className="text-xl mb-8">
            A modern, lightweight solution for your digital needs
          </p>
          <button className="bg-white text-primary font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;