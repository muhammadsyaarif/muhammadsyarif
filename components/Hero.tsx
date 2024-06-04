import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <>
      <div className="mx-6 sm:mx-[100px] h-auto">
        <p className="text-[21px] font-medium mt-4 sm:mt-[64px]">
          Hello! I&apos;m Muhammad Syarif.
        </p>
        <p className="text-6xl lg:text-8xl font-semibold mt-4 tracking-tight">
          Innovative Web Developer & IoT Programmer,{" "}
          <span className="text-[#FFC94A]">building a connected future</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-14 sm:gap-0 justify-between items-center mt-16 sm:mt-24">
          <div>
            <Link
              href={"https://wa.me/6287844232534"}
              className="px-[50px] lg:px-16 py-6 border border-black rounded-full bg-[#030712] text-white text-2xl font-medium hover:bg-[#FFC94A] hover:text-blck"
            >
              Let&apos;s Connect
            </Link>
          </div>
          <div className="max-w-md lg:max-w-xl">
            <p className="lg:text-xl text-justify">
              Computer Science student at UDB Surakarta, focusing on
              programming, web development, and IoT.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
