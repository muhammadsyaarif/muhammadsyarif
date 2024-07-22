import Link from "next/link";
import Image from "next/image";
import React from "react";

function page() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto mt-4 sm:mt-[64px]">
        <div className="mb-12">
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
        </div>

        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 mb-8">
          {/* 01 */}
          <div>
            <div className="p-4 bg-[#FFC94A] rounded-xl">
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
            <div className="flex justify-between items-center my-4">
              <p className="text-2xl font-semibold">Smart Dam System</p>
              <Link
                href={"/smartdam"}
                className="px-6 py-2 border border-black rounded-full hover:bg-[#FFC94A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* 02 */}
          <div>
            <div className="p-4 bg-[#FFC94A] rounded-xl">
              <Image
                className="h-full w-full rounded-lg object-cover"
                src={
                  "https://res.cloudinary.com/dgnmqbglc/image/upload/v1717451950/Syarif/notes_aztd52.png"
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
            <div className="flex justify-between items-center my-4">
              <p className="text-2xl font-semibold">Simple Notes Website</p>
              <Link
                href={"/note"}
                className="px-6 py-2 border border-black rounded-full  hover:bg-[#FFC94A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* 03 */}
          <div>
            <div className="p-4 bg-[#FFC94A] rounded-xl">
              <Image
                className="h-full w-full rounded-lg object-cover"
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
            <div className="flex justify-between items-center my-4">
              <p className="text-2xl font-semibold">Ayo Vaksin Platform</p>
              <Link
                href={"/vaksin"}
                className="px-6 py-2 border border-black rounded-full  hover:bg-[#FFC94A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* 04 */}
          <div>
            <div className="p-4 bg-[#FFC94A] rounded-xl">
              <Image
                className="h-full w-full rounded-lg object-cover"
                src={
                  "https://res.cloudinary.com/dvavtg6tx/image/upload/v1721573912/Screenshot_350_hqmbdi.png"
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
            <div className="flex justify-between items-center my-4">
              <p className="text-2xl font-semibold">Website Pesan Catering</p>
              <Link
                href={"/catering"}
                className="px-6 py-2 border border-black rounded-full  hover:bg-[#FFC94A]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default page;
