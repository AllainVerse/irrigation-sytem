import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import soilhumasensor from '../assets/Features/soilhumasensor.svg';
import phsensor from '../assets/Features/phsensor.svg';
import calendersensor from '../assets/Features/calendersensor.svg';
import landconfig from '../assets/Features/landconfig.svg';
import wheater from '../assets/Features/wheater.svg';
import irrigodesign from '../assets/irrigodesign.svg';
import soil from '../assets/soil.jpg';
import NavbarLoggedin from '@/components/Navbar/NavbarLoggedin';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';
import farmVideo from '../assets/farm1.mp4';

const Feature = () => {
  const features = [
    {
      title: 'Soil Humidity Sensor',
      description: 'Sensor ini membantu Anda memantau tingkat kelembapan tanah secara real-time, sehingga Anda dapat menentukan kapan waktu yang tepat untuk melakukan penyiraman pada lahan pertanian Anda. Hal ini berguna untuk menghindari kondisi tanah yang terlalu kering atau basah yang dapat mempengaruhi pertumbuhan tanaman.',
      imageSrc: soilhumasensor,
    },
    {
      title: 'Soil pH Sensor',
      description: 'Dengan Soil pH Sensor, Anda dapat mengukur keasaman atau kebasaan tanah. Informasi ini sangat penting untuk menentukan jenis tanaman yang dapat tumbuh optimal di lahan tersebut dan jenis pupuk apa yang sesuai untuk meningkatkan kualitas tanah secara keseluruhan.',
      imageSrc: phsensor,
    },
    {
      title: 'Irrigation Schedule',
      description: 'Fitur penjadwalan irigasi otomatis ini memungkinkan Anda mengatur waktu penyiraman sesuai dengan kebutuhan tanaman. Dengan penjadwalan yang tepat, Anda dapat menghemat air dan memastikan bahwa tanaman mendapatkan cukup air tanpa pemborosan.',
      imageSrc: calendersensor,
    },
    {
      title: 'Land Configuration',
      description: 'Land Configuration membantu Anda mengatur tata letak lahan dan jenis tanaman yang ingin ditanam pada setiap bagiannya. Dengan fitur ini, Anda dapat merancang lahan pertanian Anda untuk memaksimalkan ruang dan efisiensi.',
      imageSrc: landconfig,
    },
    {
      title: 'Weather Forecast',
      description: 'Fitur ini memberikan prakiraan cuaca harian dan mingguan di lokasi lahan pertanian Anda. Dengan mengetahui kondisi cuaca yang akan datang, Anda dapat merencanakan aktivitas pertanian dengan lebih baik, seperti penyiraman, pemupukan, atau panen.',
      imageSrc: wheater,
    },
  ];

  const { ref: firstFeatureRef, inView: firstFeatureInView } = useInView({
    threshold: 0.1,
  });

  const { ref: irrigodesignRef, inView: irrigodesignInView } = useInView({
    threshold: 0.1,
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
      className="min-h-screen bg-gradient-to-b from-[#16332F] to-[#2F6D3C] text-white"
    >
      {localStorage.getItem('token') ? <NavbarLoggedin /> : <Navbar />}

      {/* Header with Background Video */}
      <div className="relative w-full h-80 flex items-center justify-center text-center overflow-hidden">
        <video
          src={farmVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
        ></video>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="relative z-10 text-5xl font-bold"
          style={{
            color: 'rgba(255, 255, 255, 0.8)',
            textShadow: '1px 1px 4px rgba(0, 0, 0, 0.4)',
          }}
        >
          Feature
        </motion.div>
        
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      <div className="max-w-6xl mx-auto py-12 px-6 flex flex-col md:flex-row items-center gap-8">
        <motion.div
          ref={irrigodesignRef}
          initial={{ opacity: 0, x: -50 }}
          animate={irrigodesignInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="md:w-1/2 text-white text-left  "
        >
          <h2 className="text-3xl font-semibold font-poppins mb-4">Fitur Irigasi Otomatis</h2>
          <p className="text-lg text-gray-200 font-Inter">
            Sistem irigasi otomatis kami memungkinkan Anda untuk mengatur jadwal penyiraman berdasarkan kebutuhan spesifik tanaman dan kondisi cuaca. Dengan fitur ini, Anda dapat menghemat air dan energi serta memastikan tanaman mendapatkan cukup air pada waktu yang tepat, tanpa perlu mengawasi secara manual.
          </p>
        </motion.div>

        <motion.img
          ref={irrigodesignRef}
          initial={{ opacity: 0, x: 50 }}
          animate={irrigodesignInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: 'easeOut' }}
          src={irrigodesign}
          alt="Irrigation Design"
          className="md:w-1/2 h-auto"
        />
      </div>

      {/* Main Section */}
      <div className="bg-[#F5FFDE] mt-8 w-full py-12 px-6 mb-20">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-8 items-center">
          
          <div
            ref={firstFeatureRef}
            className={`flex-shrink-0 w-full md:w-1/2 transition-all duration-700 ease-out transform 
                        ${firstFeatureInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
                        hover:scale-105`}
          >
            <img src={soil} alt="Soil Background" className="w-full h-full object-cover rounded-lg scale-90" />
          </div>

          {/* Right Side Content */}
          <div
            ref={firstFeatureRef}
            className={`flex flex-col items-start bg-transparent text-black rounded-lg p-6 transition-all duration-700 ease-out 
                        transform ${firstFeatureInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
                        hover:scale-105`}
          >
            <div className="flex flex-row items-center mb-4">
              <img src={soilhumasensor} alt="Soil Humidity Sensor" className="w-16 h-16 mr-4 opacity-80" />
              <h3 className="text-2xl font-semibold">{features[0].title}</h3>
            </div>
            <p className="text-md text-gray-700">{features[0].description}</p>
          </div>
        </div>

        {/* Remaining Features Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {features.slice(1).map((feature, index) => {
            const { ref, inView } = useInView({
              threshold: 0.1,
            });

            return (
              <div
                key={index}
                ref={ref}
                className={`flex flex-row items-center bg-transparent text-black rounded-lg p-6 transition-all duration-700 ease-out 
                            transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'} 
                            hover:scale-105`}
              >
                {/* Image on the Left */}
                <div className="flex-shrink-0 w-16 h-16 mr-6">
                  <img src={feature.imageSrc} alt={feature.title} className="w-full h-full object-contain opacity-80" />
                </div>

                {/* Description on the Right */}
                <div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </motion.div>
  );
};

export default Feature;
