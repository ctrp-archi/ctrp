import React, { useState, useEffect } from 'react';

interface BannerImageProps {
  className?: string;
  intervalMs?: number;
}

const BannerImage: React.FC<BannerImageProps> = ({ 
  className = '', 
  intervalMs = 9000 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Images pour la bannière Services
  const bannerImages = [
    '/images/pexels-323780-house.jpeg',
    '/images/pexels-1396122-modern-house.jpeg',
    '/images/pexels-1571460-interior.jpeg',
    '/images/pexels-2102587-kitchen.jpeg',
    '/images/pexels-1643383-luxury-house.jpeg'
  ];

  // Rotation automatique des images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
      );
    }, intervalMs);

    return () => clearInterval(interval);
  }, [bannerImages.length, intervalMs]);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {bannerImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Architecture CTRP Services ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
      ))}
    </div>
  );
};

export default BannerImage;