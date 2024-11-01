import React from 'react';
import { useInView } from 'react-intersection-observer';

const FeatureCard = ({ imageSrc, title, description }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center bg-transparent text-black rounded-lg p-6 transition-all duration-700 ease-out 
                  transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
                  hover:scale-105`}
    >
      {/* Image on the Left */}
      <div className="flex-shrink-0 w-16 h-16 mr-6">
        <img src={imageSrc} alt={title} className="w-full h-full object-contain opacity-80" />
      </div>

      {/* Description on the Right */}
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
