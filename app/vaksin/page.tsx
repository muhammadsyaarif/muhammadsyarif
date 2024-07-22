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
          Ayo Vaksin Platform
        </p>

        <div className="flex flex-col mt-8 sm:mt-16">
         
          <p className="text-xl text-justify">
            Website Ayo Vaksin adalah aplikasi web yang dirancang untuk
            memfasilitasi proses pencatatan dan pengelolaan data vaksinasi.
            Aplikasi ini memungkinkan pengguna untuk membuat, membaca,
            memperbarui, dan menghapus (CRUD) data terkait vaksinasi. Dibangun
            menggunakan PHP sebagai bahasa pemrograman server-side, aplikasi ini
            juga memanfaatkan MySQL sebagai database untuk menyimpan data.
          </p>
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mb-8 mt-8">
          {/* 01 */}
          <div>
            <div className="rounded-xl">
              <Image
                className="h-full w-full rounded-lg object-cover border-2"
                src={
                  "https://res.cloudinary.com/dvavtg6tx/image/upload/v1721615887/Screenshot_358_cirjiw.png"
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
          {/* 02 */}
          <div>
            <div className="rounded-xl">
              <Image
                className="h-full w-full border-2 rounded-lg object-cover"
                src={
                  "https://res.cloudinary.com/dvavtg6tx/image/upload/v1721613761/Screenshot_352_rppbpy.png"
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
