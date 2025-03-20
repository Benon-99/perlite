import React from 'react';
import Link from 'next/link';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

const Hero = ({ title, subtitle, ctaText, ctaLink }: HeroProps) => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl mb-8">
            {subtitle}
          </p>
          <Link href={ctaLink} className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
            {ctaText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;