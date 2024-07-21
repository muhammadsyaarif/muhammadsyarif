import Link from "next/link";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto mt-4 sm:mt-[64px]">
        <Link href={"/"}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </Link>
        <p className="text-4xl sm:text-6xl text-center font-semibold mt-8 tracking-tight">
          Smart Dam System (IoT)
        </p>

        <div className="flex flex-col mt-8 sm:mt-16">
          <Link href={"https://bendungan03.vercel.app/"} className="text-sm font-semibold tracking-widest text-center mb-6 bg-[#FFC94A] py-3 px-6 rounded-full w-[200px]">Live Website</Link>
          <p className="text-xl text-justify">
            Sistem Smart Dam berbasis IoT, yang mengintegrasikan sensor
            ketinggian air, curah hujan, mekanisme buka tutup pintu bendungan,
            dan alarm peringatan, menawarkan solusi efisien untuk pengelolaan
            bendungan. Sensor ketinggian air dan curah hujan memantau kondisi
            secara real-time dan mengirim data ke sistem pusat untuk analisis.
            Berdasarkan data ini, mekanisme otomatis mengatur buka tutup pintu
            bendungan untuk mengelola aliran air dengan tepat. Selain itu,
            sistem alarm peringatan memberikan notifikasi dini kepada pengelola
            bendungan dan masyarakat sekitar jika terdeteksi kondisi yang
            berpotensi bahaya, seperti kenaikan air yang melebihi batas aman.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-1 sm:gap-6 xl:gap-10 lg:space-y-0 mb-8 mt-8">
            {/* 01 */}
            <div>
              <div className="rounded-xl">
                <Image
                  className="h-full w-full rounded-lg object-cover"
                  src={
                    "https://res.cloudinary.com/dvavtg6tx/image/upload/v1721572448/Screenshot_279_y1qjux.png"
                  }
                  alt={"coming-soon"}
                  width={300}
                  height={200}
                  priority={true}
                  sizes="(max-width: 640px) 100vw,
            (max-width: 768px) 80vw,
            (max-width: 1024px) 60vw,
            50vw
            "
                />
              </div>
            </div>
            </div>
      </div>
    </>
  );
}

export default page;
