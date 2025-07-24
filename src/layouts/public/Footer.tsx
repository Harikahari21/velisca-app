import {
  Badge,
  Facebook,
  Instagram,
  Mail,
  Phone,
  Twitter,
  Youtube,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { FaSkype } from "react-icons/fa";
import { IoArrowForwardOutline, IoCall, IoMail } from "react-icons/io5";
import { MdLocationOn, MdLocationPin } from "react-icons/md";
import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";

const Footer = () => {
  const quickLinks = [
    {
      title: "Who Are We",
    },
    {
      title: "Our History",
    },
    {
      title: "About Us",
    },
    {
      title: "Manufacturing",
    },
    {
      title: "Investor Relation",
    },
    {
      title: "Projects",
    },
  ];
  return (
    // <div className="w-full ">
    //   <div className="bg-[#1A191D] bg-no-repeat bg-center bg-cover pt-8 md:pt-16 2xl:pt-16">
    //     <div className="main-container  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-4 md:pb-8 2xl:pb-12">
    //       <div className="flex flex-col gap-8">
    //         <Link href="/">
    //           <img src="/Alfa/FooterLogo.png" alt="" className=" w-fit h-12" />
    //         </Link>
    //         <p className="text-white">
    //           A start-up unit of manufacturing transformers in the small to
    //           medium range from the year of 1988.
    //         </p>
    //         <div className="border grid grid-cols-5 divide-x divide-[#605F61] border-[#605F61] ">
    //           <div className="flex justify-center items-center p-2">
    //             <TiSocialFacebook className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
    //           </div>
    //           <div className="flex justify-center items-center p-2">
    //             <TiSocialTwitter className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
    //           </div>
    //           <div className="flex justify-center items-center p-2">
    //             <AiFillInstagram className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
    //           </div>
    //           <div className="flex justify-center items-center p-2">
    //             <AiFillYoutube className="text-2xl text-[#605F61] cursor-pointer hover:text-white" />
    //           </div>
    //           <div className="flex justify-center items-center p-2">
    //             <FaSkype className="text-2xl  text-[#605F61] cursor-pointer hover:text-white" />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4 md:items-center">
    //         <h2 className="text-white font-semibold">Quick Links</h2>
    //         <div className="flex flex-col gap-2">
    //           {quickLinks?.map((item, i) => (
    //             <div className="flex gap-1 items-center" key={i}>
    //               <BsDot className="text-primary text-2xl" />
    //               <p className="text-gray-300 text-sm ">{item?.title}</p>
    //             </div>
    //           ))}
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4 ">
    //         <h2 className="text-white font-semibold">Contact Company</h2>
    //         <div className="flex flex-col gap-3">
    //           <div className="flex gap-4 items-center">
    //             <IoCall className="text-[#605F61] text-xl" />
    //             <p className="flex flex-col gap-1 text-gray-300 text-sm ">
    //               <span className="">+91 6742 580 484</span>
    //               <span className="">+91 6742 581 036</span>
    //             </p>
    //           </div>
    //           <div className="flex gap-4 items-center">
    //             <IoMail className="text-[#605F61] text-xl" />
    //             <p className="flex flex-col gap-1 text-gray-300 text-sm ">
    //               <span className="">info@alfa.in</span>
    //               <span className="">sales@alfa.in</span>
    //             </p>
    //           </div>
    //           <div className="flex gap-4 items-center ">
    //             <MdLocationPin className="text-[#605F61] text-xl" />
    //             <div className="flex flex-col gap-1 text-gray-300 text-sm ">
    //               <p className="flex flex-col">
    //                 <span>3337, Mancheshwar Industrial </span>
    //                 <span>Estate, Bhubaneshwar-751010</span>
    //               </p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="flex flex-col gap-4">
    //         <h2 className="text-white font-semibold">Newsletter</h2>
    //         <div className="flex flex-col gap-4">
    //           <p className="text-gray-300 text-sm">
    //             Subscribe to our Newsletter & Event right now to be updated.
    //           </p>
    //           <div className="flex justify-between items-center bg-white p-2">
    //             <input
    //               className=" outline-none text-sm"
    //               type="text"
    //               placeholder="EMAIL*"
    //               name=""
    //             />
    //             <div className="bg-primary p-2 text-white">
    //               <IoArrowForwardOutline />
    //             </div>
    //           </div>
    //           <p className="text-gray-300 text-sm">
    //             Have a question?{" "}
    //             <span className="underline cursor-pointer">Click here</span>
    //           </p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <hr />
    //   <div className="bg-black">
    //     <div className="main-container">
    //       <div className="text-sm flex flex-col items-center justify-between text-center lg:flex-row gap-4 py-5 text-white ">
    //         <p className=" tracking-wider">
    //           © 2021 Alfa Transformer Limited. Designed & Developed by Searching
    //           Yard
    //         </p>
    //         <div className="flex gap-3 items-center">
    //           <p>Sitemap</p>
    //           <p className="w-1 h-1 bg-white rounded-full"></p>
    //           <p>Terms of Service</p>
    //           <p className="w-1 h-1 bg-white rounded-full"></p>
    //           <p>Privacy Policy</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="bg-gray-900 text-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/logo.png"
              alt="Velisca Logo"
              width={180}
              height={60}
              className="h-12 w-auto mb-6 "
            />
            <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
              Connecting travelers with authentic homestay experiences across
              incredible India. Discover, stay, and create memories that last a
              lifetime with local families.
            </p>
            <div className="flex space-x-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Support</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Safety
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms & Privacy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-3" />
                hello@velisca.com
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-3" />
                +91 98765 43210
              </li>
            </ul>
            <div className="mt-6">
              <span className="inline-block text-sm font-medium px-3 py-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                🇮🇳 Made in India
              </span>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            &copy; 2025 Velisca. All rights reserved. Made with ❤️ for Indian
            travelers.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
