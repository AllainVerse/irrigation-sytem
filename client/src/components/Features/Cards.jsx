import React from 'react';
import { useInView } from 'react-intersection-observer';
import soilhumasensor from '../../assets/Features/soilhumasensor.svg';
import phsensor from '../../assets/Features/phsensor.svg';
import calendersensor from '../../assets/Features/calendersensor.svg';
import landconfig from '../../assets/Features/landconfig.svg';
import wheater from '../../assets/Features/wheater.svg';

const Cards = () => {
  const features = [
    {
      title: 'Soil Humidity Sensor',
      description: 'Membantu Anda memantau tingkat kelembapan tanah di lahan pertanian',
      imageSrc: soilhumasensor,
    },
    {
      title: 'Soil pH Sensor',
      description: 'Membantu Anda memantau tingkat pH tanah di lahan pertanian',
      imageSrc: phsensor,
    },
    {
      title: 'Irrigation Schedule',
      description: 'Membantu Anda menjadwalkan sistem irigasi otomatis di lahan pertanian',
      imageSrc: calendersensor,
    },
    {
      title: 'Land Configuration',
      description: 'Membantu Anda mengatur lahan pertanian dan jenis tanaman yang ingin ditanam',
      imageSrc: landconfig,
    },
    {
      title: 'Weather Forecast',
      description: 'Memprediksi cuaca di lokasi lahan pertanian Anda',
      imageSrc: wheater,
    },
  ];

  return (
    <div className="bg-[#F5FFDE] py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Fitur</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {features.map((feature, index) => {
          const { ref, inView } = useInView({
            threshold: 0.1,
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`w-[230px] h-[293px] bg-white rounded-lg shadow-md p-6 text-center flex flex-col items-center 
                          transition-all duration-700 ease-out transform 
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
                          hover:scale-105 hover:shadow-lg`}
            >
              <img src={feature.imageSrc} alt={feature.title} className="w-20 h-20 mt-6 mb-4" />
              <h3 className="text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
