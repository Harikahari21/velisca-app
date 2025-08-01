import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  leftAsideVariants,
  rightAsideVariants,
  splitFromMiddleVariants,
  topAsideVariants,
} from "@/utils";
import { Award, Calendar, Heart, MapPin, Shield, Users } from "lucide-react";

const HERO_ARR = [
  {
    _id: "1",
    title: "Luxury Living Begins Here",
    image: "/banner1.jpg",
  },
  {
    _id: "2",
    title: "Where Comfort Meets Class",
    image: "/banner2.webp",
  },
  {
    _id: "3",
    title: "Step Into Your Ideal Space",
    image: "/banner3.jpg",
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [opacity, setOpacity] = useState(1);
  //need animation
  useEffect(() => {
    const time = setInterval(() => {
      setOpacity(0.05);
      setTimeout(() => {
        if (HERO_ARR?.length - 1 === activeIndex) {
          setActiveIndex(0);
        } else {
          setActiveIndex(activeIndex + 1);
        }
        setOpacity(1);
      }, 350);
    }, 4000);
    return () => {
      clearInterval(time);
    };
  }, [activeIndex]);

  return (
    <section className="main-spacing w-full pb-8 lg:pb-16 2xl:pb-24 overflow-hidden">
      <article className="main-container flex flex-col items-center lg:justify-between lg:flex-row gap-8 md:gap-20 lg:gap-12 2xl:gap-16">
        <aside className="w-full flex flex-col items-center text-center lg:items-start lg:text-left gap-6 ">
          <motion.div
            viewport={{ once: true }}
            initial="hidden"
            whileInView="visible"
            variants={topAsideVariants}
          >
            <h1
              style={{ opacity: opacity }}
              className="w-full md:w-3/5 lg:w-full text-gray-800 capitalize text-2xl md:text-4xl lg:text-6xl 2xl:text-7xl lg:leading-[4.25rem] 2xl:leading-[5.375rem] font-semibold tracking-wide common-transition"
            >
              {HERO_ARR[activeIndex]?.title}
            </h1>
            <p className="description common-transition pt-6">
              Experience authentic Indian hospitality with verified hosts across
              the country.
            </p>
          </motion.div>
          <div className="flex items-center gap-4 mt-2">
            <Link href="#contact">
              <motion.button
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={leftAsideVariants}
                type="button"
                className="btn-primary border border-primary w-40 py-3 rounded-full tracking-wide"
              >
                Contact
              </motion.button>
            </Link>
            <Link href="/login">
              <motion.button
                viewport={{ once: true }}
                initial="hidden"
                whileInView="visible"
                variants={rightAsideVariants}
                type="button"
                className="bg-primary/10 border border-primary text-primary font-medium w-40 py-3 rounded-full tracking-wide hover:bg-primary/20 common-transition"
              >
                Login
              </motion.button>
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl bg-white p-6 rounded-2xl shadow-xl border mt-6"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center lg:text-left">
              Book Your Stay
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Calendar className="inline w-4 h-4 mr-2" />
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Users className="inline w-4 h-4 mr-2" />
                    Guests
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MapPin className="inline w-4 h-4 mr-2" />
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Enter city or area"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
              </div>
            </form>
          </motion.div>
        </aside>
        <aside className="relative w-full flex flex-col items-start">
          <div>
            <motion.div
              viewport={{ once: true }}
              initial="hidden"
              whileInView="visible"
              variants={splitFromMiddleVariants}
            >
              <img
                src={HERO_ARR[activeIndex]?.image}
                alt="project"
                className={`relative z-[5] rounded-2xl h-[30rem] common-transition lg:-mt-16 common-transition w-[97%] md:w-11/12 lg:w-full ${
                  activeIndex === 0
                    ? "animation-3d-3"
                    : activeIndex === 1
                    ? "animation-3d-2"
                    : "animation-3d"
                } `}
              />
            </motion.div>
          </div>

          <div className="absolute -bottom-14 md:-bottom-20 w-full flex items-center justify-center gap-4">
            {HERO_ARR.map((_, index) => (
              <p
                key={index}
                className={`cursor-pointer h-3 grid place-items-center rounded-xl border shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)] common-transition ${
                  index === activeIndex
                    ? "bg-primary/75 w-6"
                    : "w-3 bg-primary/30"
                }`}
                onClick={() => setActiveIndex(index)}
              ></p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.3 }}
            className="absolute z-10 -top-10 -left-8 md:-left-12 flex items-center gap-3 text-center md:w-52 w-40 md:p-4 p-2 rounded-xl border border-purple-200 bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="p-2 bg-purple-100 rounded-full">
              <Shield className="md:w-5 w-4 md:h-5 h-4 text-purple-600" />
            </div>
            <span className="md:text-sm text-xs tracking-wide font-medium text-gray-800">
              Verified Hosts
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="absolute z-10 top-10 left-4 flex items-center gap-3 text-center md:w-52 w-40 md:p-4 p-2 rounded-xl border border-pink-200 bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="p-2 bg-pink-100 rounded-full">
              <Award className="md:w-5 w-4 md:h-5 h-4 text-pink-600" />
            </div>
            <span className="md:text-sm text-xs tracking-wide font-medium text-gray-800">
              Best Price Guarantee
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 2.7 }}
            className="absolute z-10 -bottom-8 md:bottom-6 -left-4 flex items-center gap-3 text-center md:w-52 w-40 md:p-4 p-2 rounded-xl border border-green-200 bg-white/90 backdrop-blur-sm shadow-lg"
          >
            <div className="p-2 bg-green-100 rounded-full">
              <Heart className="md:w-5 w-4 md:h-5 h-4 text-green-600" />
            </div>
            <span className="md:text-sm text-xs tracking-wide font-medium text-gray-800">
              24/7 Support
            </span>
          </motion.div>
        </aside>
      </article>
    </section>
  );
};

export default HeroSection;
