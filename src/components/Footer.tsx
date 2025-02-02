import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="bg-[#FFFFFF] py-16 px-6 sm:px-12 md:px-16 lg:px-32 mt-44">
      <div className="border-t border-[#D9D9D9] pb-56 pl-48 sm:pb-14 w-full text-center"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-[20px] sm:text-[24px] font-bold">Funiro.</h1>
            <p className="mt-4 text-[#333333] max-w-[] text-sm sm:text-base">
              400 University Drive Suite 200 Coral 
            </p>
            <p className="text-[#333333] max-w-[] text-sm sm:text-base">
            Gables,
            </p>
            <p className="text-[#333333] max-w-[] text-sm sm:text-base">
            FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#333333] text-[14px] sm:text-[16px]">Links</h1>
            <Link href="/" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Home
            </Link>
            <Link href="/shop" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Shop
            </Link>
            <Link href="/blog" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Blog
            </Link>
            <Link href="/contact" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Contact
            </Link>
          </div>

          <div className="flex flex-col gap-3">
            <h1 className="text-[#333333] text-[14px] sm:text-[16px]">Help</h1>
            <Link href="/payment-options" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Payment Options
            </Link>
            <Link href="/returns" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Returns
            </Link>
            <Link href="/privacy-policy" className="font-semibold text-[#333] mt-6 text-sm sm:text-base">
              Privacy Policies
            </Link>
          </div>

          <div className="flex flex-col items-center gap-4">
            <h1 className="text-[#333333] text-[14px] sm:text-[16px]">Newsletter</h1>
            <h2 className="text-[#333333] border-b border-black text-sm sm:text-base">
              Enter Your Email Address
            </h2>
            <input
              type="email"
              className="border-b border-black text-sm text-center p-2 mt-2 w-full max-w-xs sm:max-w-sm"
              placeholder="Your Email"
            />
            <button className="font-semibold text-black underline p-2 mt-4 text-sm sm:text-base">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D9D9D9] pb-10 sm:pb-14 w-full text-center">
        <br />
        <span className="text-xs sm:text-sm">2023 Funiro. All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;
