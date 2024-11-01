import React from 'react';
import { useInView } from 'react-intersection-observer';
import gambar1 from '../../assets/Articles/gambar1.svg'; 
import gambar2 from '../../assets/Articles/gambar2.svg';
import gambar3 from '../../assets/Articles/gambar3.svg';

const Articles = () => {
  const articles = [
    {
      date: '2 Februari 2022',
      title: 'Sistem Monitoring Irigasi Secara Otomatis Berbasis IoT',
      description: 'Irigasi adalah usaha penyediaan dan pengaturan air untuk menunjang pertanian yang jenisnya meliputi irigasi permukaan, irigasi rawa, irigasi air bawah tanah ..',
      imageSrc: gambar1,
    },
    {
      date: '26 Agustus 2021',
      title: 'Monitoring Irigasi Tanaman Berbasis Internet of Things',
      description: 'Selama ini petani masih banyak menggunakan cara-cara konvensional dalam pengairan. Pemilik sawah harus selalu datang ke area persawahan untuk membuka ..',
      imageSrc: gambar2,
    },
    {
      date: '28 Agustus 2023',
      title: 'Pertanian Naik Level! Sistem Irigasi Pertanian dengan IoT',
      description: 'Irigasi adalah sistem atau bisa juga dikatakan sebuah metode untuk pengaliran air buatan untuk memberi air ke lahan pertanian atau juga perkebunan untuk memenuhi ..',
      imageSrc: gambar3,
    },
  ];

  return (
    <div className="bg-[#F5FFDE] py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">Articles</h2>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {articles.map((article, index) => {

          const { ref, inView } = useInView({
            threshold: 0.1, 
          });

          return (
            <div
              key={index}
              ref={ref}
              className={`w-[420px] h-[580px] bg-white rounded-[40px] shadow-lg p-6 text-left transition-all duration-700 ease-out transform 
                          ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            >
              {/* Gambar ditampilkan di sini */}
              <div className="w-full h-56 rounded-[40px] mb-6 overflow-hidden">
                <img
                  src={article.imageSrc}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-gray-500 mb-2">{article.date}</p>
              <h3 className="text-xl font-semibold mb-3">{article.title}</h3>
              <p className="text-gray-600 mb-4">{article.description}</p>

              <a href="#" className="text-blue-500 hover:underline">
                Read more..
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Articles;