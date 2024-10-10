import React from "react";

// URL gambar logo sesuai dengan link yang kamu berikan
const irrigoLogo =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1726919924/gsotifpl55w0qenu3cpe.png";
const BCA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727548786/bca_bj0ulf.png ";
const BNI =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727545908/bni_zxtwat.png";
const BRI =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727545918/bri_lim2v7.png";
const CIMB =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727545927/cimbniaga_chwlvm.png";
const MANDIRI =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727545935/mandiri_zlt9ia.png";
const LINKAJA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546286/linkaja_vyhmgf.png";
const SPPAY =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546295/shopeepay_awoamx.png";
const OVO =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546310/ovo_ioe8kg.png";
const GOPAY =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546324/gopay_u5ztoi.png";
const DANA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546349/dana_qsxy5b.png";
const MAYBANK =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546359/maybank_hj2hlm.png";
const VISA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546374/visa_tlbhf8.png";
const KREDIVO =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546392/kredivo_yropb6.png";
const INDODANA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727546418/Indodana_PayLater_n2buer.png";
const BSI =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727548848/logo-bsi_yh4vae.png";
const IG =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727547264/Instagram_ntqfjx.png";
const WA =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727547278/WhatsApp_mmrnr2.png";
const YT =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727547290/YouTube_ktsg4j.png";
const FB =
  "https://res.cloudinary.com/dqrazyfpm/image/upload/v1727547304/Facebook_jtvtct.png";

const Footer = () => {
  return (
    <div className="bg-white">
      {/* Garis kecil di atas footer */}
      <div className="w-full h-1 bg-[#BED193]"></div>

      {/* Container utama footer dengan margin otomatis dan padding */}
      <div className="container mx-auto py-16 px-6 flex justify-between">
        {/* Bagian kiri - Logo Irrigo dan Deskripsi */}
        <div className="block">
          <div className="col-span-2 flex">
            <img src={irrigoLogo} alt="Irrigo Logo" className="mb-6 w-36" />
            <div>
              <p className="font-bold">IRRIGO</p>
              <p className="mb-4">
                Irrigo is a tool for Automated Monitoring System For Your Farm
              </p>
              <p>Email: customercare@irrigo.com</p>
              <p>Contact: (031) 5947280</p>
            </div>
          </div>
          {/* Alamat Kantor */}
          <div>
            <p className="font-bold">IRRIGO Head Office</p>
            <p>Politeknik Elektronika Negeri Surabaya</p>
            <p>
              Jl. Raya ITS, Keputih, Kec. Sukolilo, Kota Surabaya, Jawa Timur
              60111
            </p>
            <p>
              Laman Web:
              <a
                href="https://www.pens.ac.id/"
                className="text-blue-500 hover:underline"
              >
                https://www.pens.ac.id/
              </a>
            </p>
          </div>
        </div>

        {/* Informasi */}
        <div>
          <p className="font-bold mb-4">Information</p>
          <ul>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Privasi Police
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-600 hover:underline">
                Terms and Conditions
              </a>
            </li>
          </ul>
        </div>

        {/* Service */}
        <div>
          <p className="font-bold mb-4">Service</p>
          <ul>
            <li>...</li>
            <li>...</li>
          </ul>
        </div>

        {/* Bagian kanan - Pembayaran dan Sosial Media */}
        <div className="col-span-2">
          <p className="font-bold mb-4">KAMI MENERIMA</p>
          {/* Logo Pembayaran */}
          <div className="grid grid-cols-5 gap-1">
            <a href="">
              <img src={BCA} alt="Logo Pembayaran 1" className="w-16 h-auto" />
            </a>
            <a href="">
              <img src={BNI} alt="Logo Pembayaran 2" className="w-16 h-auto" />
            </a>
            <a href="">
              <img src={BRI} alt="Logo Pembayaran 3" className="w-12 h-auto" />
            </a>
            <a href="">
              <img
                src={CIMB}
                alt="Logo Pembayaran 3"
                className="w-24 mt-1 h-auto"
              />
            </a>
            <a href="">
              <img
                src={MANDIRI}
                alt="Logo Pembayaran 3"
                className="w-20 ml-2 -mt-1 h-auto"
              />
            </a>
            <a href="">
              <img
                src={LINKAJA}
                alt="Logo Pembayaran 3"
                className="w-9 ml-6 h-auto"
              />
            </a>
            <a href="">
              <img
                src={SPPAY}
                alt="Logo Pembayaran 3"
                className="w-20 h-auto"
              />
            </a>
            <a href="">
              <img
                src={OVO}
                alt="Logo Pembayaran 3"
                className="w-16 mt-2 h-auto"
              />
            </a>
            <a href="">
              <img
                src={GOPAY}
                alt="Logo Pembayaran 3"
                className="w-20 mt-3 h-auto"
              />
            </a>
            <a href="">
              <img
                src={DANA}
                alt="Logo Pembayaran 3"
                className="w-20 mt-2 h-auto"
              />
            </a>
            <a href="">
              <img
                src={MAYBANK}
                alt="Logo Pembayaran 3"
                className="w-16 ml-2 h-auto"
              />
            </a>
            <a href="">
              <img
                src={VISA}
                alt="Logo Pembayaran 3"
                className="w-16 mt-2 h-auto"
              />
            </a>
            <a href="">
              <img
                src={KREDIVO}
                alt="Logo Pembayaran 3"
                className="w-20 mt-2 h-auto"
              />
            </a>
            <a href="">
              <img
                src={INDODANA}
                alt="Logo Pembayaran 3"
                className="w-24 h-auto"
              />
            </a>
            <a href="">
              <img src={BSI} alt="Logo Pembayaran 3" className="w-16 h-auto" />
            </a>
          </div>

          {/* Sosial Media */}
          <p className="font-bold mb-4">Find Me</p>
          <div className="flex gap-2">
            <a href="">
              <img src={IG} alt="Find Me Logo" className="w-10 h-10 mt-1" />
            </a>
            <a href="">
              <img src={WA} alt="Find Me Logo" className="w-8 h-8 mt-2" />
            </a>
            <a href="">
              <img src={YT} alt="Find Me Logo" className="w-12 h-12" />
            </a>
            <a href="">
              <img src={FB} alt="Find Me Logo" className="w-10 h-10 mt-1" />
            </a>
            {/* Tambahkan lebih banyak logo sosial media jika diperlukan */}
          </div>
        </div>
      </div>

      {/* Footer bawah */}
      <div className="bg-[#004E30] text-white text-center py-4">
        <p>© 2024 Irrigo. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
