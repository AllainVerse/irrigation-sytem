import React from 'react';
import soilhumasensor from '../../assets/Features/soilhumasensor.svg';
import phsensor from '../../assets/Features/phsensor.svg';
import calendersensor from '../../assets/Features/calendersensor.svg';
import landconfig from '../../assets/Features/landconfig.svg';
import wheater from '../../assets/Features/wheater.svg';

const Cards = () => {
  const features = [
    {
      title: 'Soil Humidity Sensor',
      description: 'Help you monitor your farm soil humidity level',
      imageSrc: soilhumasensor, 
    },
    {
      title: 'Soil pH Sensor',
      description: 'Help you monitor your farm soil pH level',
      imageSrc: phsensor, 
    },
    {
      title: 'Irrigation Schedule',
      description: 'Help you schedule the automated irrigation system for your farm',
      imageSrc: calendersensor, 
    },
    {
      title: 'Land Configuration',
      description: 'Help you configure your farm land and what kind of plants you want to grow',
      imageSrc: landconfig, 
    },
    {
      title: 'Weather Forecast',
      description: 'Predict the weather on your farm location',
      imageSrc: wheater, 
    },
  ];

  return (
    <div className="bg-[#F5FFDE] py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Features</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-[230px] h-[293px] bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center"
          >
            <img src={feature.imageSrc} alt={feature.title} className="w-20 h-20 mt-6 mb-4" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
