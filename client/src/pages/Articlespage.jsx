import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import NavbarLoggedin from '@/components/Navbar/NavbarLoggedin';
import Footer from '@/components/Footer/Footer';
import farmVideo from '../assets/farm2.mp4';
import humanImage from '../assets/human1.svg';
import artImage1 from '../assets/art1.png';
import artImage2 from '../assets/art2.png';
import artImage3 from '../assets/art3.png';
import dsgImage from '../assets/dsg.svg';

const Articlespage = () => {
  // Set up in-view hooks
  const { ref: titleRef, inView: titleInView } = useInView({ threshold: 0.1 });
  const { ref: descRef, inView: descInView } = useInView({ threshold: 0.1 });
  const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.1 });
  const { ref: irrigoTitleRef, inView: irrigoTitleInView } = useInView({ threshold: 0.1 });
  const { ref: irrigoDescRef, inView: irrigoDescInView } = useInView({ threshold: 0.1 });
  const { ref: artImage1Ref, inView: artImage1InView } = useInView({ threshold: 0.1 });
  const { ref: artImage2Ref, inView: artImage2InView } = useInView({ threshold: 0.1 });
  const { ref: artImage3Ref, inView: artImage3InView } = useInView({ threshold: 0.1 });
  const { ref: artDesc1Ref, inView: artDesc1InView } = useInView({ threshold: 0.1 });
  const { ref: artDesc2Ref, inView: artDesc2InView } = useInView({ threshold: 0.1 });
  const { ref: artDesc3Ref, inView: artDesc3InView } = useInView({ threshold: 0.1 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-b from-[#16332F] via-[#16332F] to-[#2F6D3C] text-white"
    >
      <NavbarLoggedin />

      {/* Header Video Section */}
      <div className="relative w-full h-80 flex items-center justify-center text-center overflow-hidden">
        <video
          src={farmVideo}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.7 }}
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
          Articles
        </motion.div>

        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Content Section */}
      <section className="flex items-center justify-center text-center mt-12 px-6">
        <div className="max-w-3xl">
          <motion.h2
            ref={titleRef}
            initial={{ opacity: 0, y: 50 }}
            animate={titleInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="text-3xl font-bold mb-4 text-[#E3FCEC]"
          >
            Irigasi Otomatis Berbasis IoT
          </motion.h2>

          <motion.p
            ref={descRef}
            initial={{ opacity: 0, y: 50 }}
            animate={descInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.2 }}
            className="text-base text-gray-300 leading-relaxed"
          >
            Irigasi otomatis berbasis Internet of Things (IoT) adalah inovasi yang memungkinkan petani untuk mengelola
            dan memantau penyiraman tanaman dari jarak jauh. Dengan sensor dan perangkat IoT yang terhubung, sistem ini
            menyesuaikan kebutuhan air secara real-time berdasarkan kelembapan tanah, kondisi cuaca, dan kebutuhan spesifik
            tanaman. Teknologi ini membantu menghemat air, mengoptimalkan pertumbuhan, dan meningkatkan efisiensi dengan
            sedikit intervensi manual. Irigasi berbasis IoT adalah langkah menuju pertanian cerdas dan berkelanjutan.
          </motion.p>
        </div>
      </section>

      {/* Image and IRRIGO Description Section */}
      <section className="flex flex-col items-center text-center mt-16 mb-10 px-6">
        <motion.img
          ref={imgRef}
          initial={{ opacity: 0, y: 50 }}
          animate={imgInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
          src={humanImage}
          alt="Ilustrasi Manusia"
          className="w-3/4 md:w-1/3 mb-6"
        />

        <motion.h2
          ref={irrigoTitleRef}
          initial={{ opacity: 0, y: 50 }}
          animate={irrigoTitleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
          className="text-3xl font-bold mb-4 text-[#E3FCEC]"
        >
          Apa itu IRRIGO?
        </motion.h2>

        <motion.p
          ref={irrigoDescRef}
          initial={{ opacity: 0, y: 50 }}
          animate={irrigoDescInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.2 }}
          className="text-base text-gray-300 leading-relaxed max-w-2xl"
        >
          IRRIGO adalah aplikasi berbasis web yang dirancang khusus untuk sistem irigasi otomatis. Program ini 
          memberikan kemudahan kepada petani dan pengguna lainnya dalam mengatur dan memantau penyiraman tanaman 
          secara efisien.
        </motion.p>

        <motion.img
            src={dsgImage}
            alt="Ilustrasi Dsg"
            className="w-3/4 md:w-1/2 mt-20 mb-0" 
        />

        <div className="w-full flex flex-col items-center py-16 px-8 mt-20 min-h-[400px]">
          {/* artImage1 */}
          <div className="flex flex-col md:flex-row items-center mb-10">
            <motion.img
              ref={artImage1Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={artImage1InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
              src={artImage1}
              alt="Ilustrasi Seni 1"
              className="w-full md:w-2/5 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-8"
            />

            <div className="text-left max-w-lg">
              <motion.h3
                ref={artDesc1Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="text-2xl font-semibold text-[#E3FCEC] mb-4"
              >
                Sistem Monitoring Irigasi Secara Otomatis Berbasis IoT
              </motion.h3>
              <motion.p
                ref={artDesc1Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                Irigasi adalah usaha penyediaan dan pengaturan air untuk menunjang pertanian yang jenisnya meliputi 
                irigasi permukaan, irigasi rawa, dan irigasi air bawah tanah. Sistem ini tidak hanya mengoptimalkan 
                penggunaan air, tetapi juga memungkinkan pemantauan dan penyesuaian otomatis berdasarkan kondisi lingkungan, 
                seperti kelembapan dan suhu tanah. Dengan integrasi IoT, petani dapat mengelola irigasi dari jarak jauh, 
                mengurangi pemborosan air, dan memastikan tanaman menerima air sesuai kebutuhan untuk mendukung produksi 
                yang berkelanjutan.
              </motion.p>
            </div>
          </div>

          {/* artImage2 */}
          <div className="flex flex-col md:flex-row items-center mb-10">
            <motion.img
              ref={artImage2Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={artImage2InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
              src={artImage2}
              alt="Ilustrasi Seni 2"
              className="w-full md:w-2/5 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-8"
            />

            <div className="text-left max-w-lg">
              <motion.h3
                ref={artDesc2Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="text-2xl font-semibold text-[#E3FCEC] mb-4"
              >
                Monitoring Irigasi Tanaman Berbasis Internet of Things
              </motion.h3>
              <motion.p
                ref={artDesc2Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                Selama ini, banyak petani masih mengandalkan cara-cara konvensional dalam pengairan, seperti datang langsung
                ke area pertanian untuk membuka saluran air secara manual. Hal ini memerlukan waktu dan tenaga, terutama ketika
                luas lahan cukup besar. Dengan adanya sistem berbasis IoT, pemilik lahan dapat memantau serta mengontrol 
                irigasi dari jarak jauh, sehingga efisiensi waktu dan tenaga dapat tercapai. Teknologi ini juga memberikan 
                informasi real-time yang membantu petani dalam mengambil keputusan yang lebih bijaksana terkait irigasi.
              </motion.p>
            </div>
          </div>

          {/* artImage3 */}
          <div className="flex flex-col md:flex-row items-center">
            <motion.img
              ref={artImage3Ref}
              initial={{ opacity: 0, y: 50 }}
              animate={artImage3InView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, ease: 'easeInOut', delay: 0.3 }}
              src={artImage3}
              alt="Ilustrasi Seni 3"
              className="w-full md:w-2/5 h-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-8"
            />

            <div className="text-left max-w-lg">
              <motion.h3
                ref={artDesc3Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
                className="text-2xl font-semibold text-[#E3FCEC] mb-4"
              >
                Pertanian Naik Level! Sistem Irigasi Pertanian dengan IoT
              </motion.h3>
              <motion.p
                ref={artDesc3Ref}
                initial={{ opacity: 0, y: 50 }}
                animate={artDesc3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: 'easeInOut', delay: 0.6 }}
                className="text-gray-300 text-sm leading-relaxed"
              >
                Irigasi adalah sistem atau bisa juga dikatakan sebuah metode untuk pengaliran air buatan untuk memberi air 
                ke lahan pertanian atau juga perkebunan untuk memenuhi kebutuhan air tanaman. Dengan sistem irigasi berbasis IoT, 
                petani dapat mengatur dan memantau penyiraman secara otomatis, sehingga efisiensi penggunaan air dapat 
                ditingkatkan dan hasil panen menjadi lebih optimal.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default Articlespage;
