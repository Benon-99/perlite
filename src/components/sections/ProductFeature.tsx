import React from 'react';
import Link from 'next/link';

interface ProductFeatureProps {
  title: string;
  description: string;
  link?: string;
  iconType?: 'architecture' | 'updates' | 'performance';
}

const ProductFeature: React.FC<ProductFeatureProps> = ({ 
  title, 
  description, 
  link,
  iconType = 'architecture' 
}) => {
  // Function to render the appropriate icon based on the iconType
  const renderIcon = () => {
    switch (iconType) {
      case 'updates':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <circle cx="12" cy="12" r="10"></circle>
            <polyline points="12 6 12 12 16 14"></polyline>
          </svg>
        );
      case 'performance':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        );
      case 'architecture':
      default:
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-600">
            <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
            <path d="M2 17l10 5 10-5"></path>
            <path d="M2 12l10 5 10-5"></path>
          </svg>
        );
    }
  };

  const cardContent = (
    <>
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-6">
        {renderIcon()}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </>
  );

  return (
    <div className="bg-white p-8 rounded-lg shadow-md">
      {link ? (
        <Link href={link} className="block h-full hover:opacity-90 transition-opacity">
          {cardContent}
        </Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default ProductFeature;