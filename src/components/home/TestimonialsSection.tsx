"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "The Kerala backwater homestay was absolutely magical! The host family treated us like their own.",
  },
  {
    name: "Rajesh Kumar",
    location: "Delhi, India",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "Stayed at a beautiful haveli in Rajasthan. The authentic experience was beyond our expectations.",
  },
  {
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "Mountain homestay in Himachal was perfect for our family vacation. Highly recommend Velisca!",
  },
  {
    name: "Vikram Singh",
    location: "Jaipur, Rajasthan",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "Found the most authentic Goan experience through Velisca. The beach house was incredible!",
  },
  {
    name: "Meera Nair",
    location: "Kochi, Kerala",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "Tea garden homestay in Munnar was a dream come true. Waking up to misty mountains was surreal.",
  },
  {
    name: "Arjun Reddy",
    location: "Hyderabad, Telangana",
    avatar: "/user.png?height=60&width=60",
    rating: 5,
    quote:
      "The heritage homestay in Udaipur made us feel like royalty. Exceptional hospitality!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6">
            Guest Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Guests Say
            </span>
          </h2>
          <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
            Real experiences from travelers who discovered authentic Indian
            hospitality
          </p>
        </motion.div>
      </div>

      {/* First Row - Left to Right */}
      <div className="relative mb-8">
        <div className="flex animate-scroll-right space-x-6 mb-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`row1-${index}`}
              className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        {/* Fade overlay for first row */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none z-10" />
      </div>

      {/* Second Row - Right to Left */}
      <div className="relative">
        <div className="flex animate-scroll-left space-x-6">
          {[
            ...testimonials.slice().reverse(),
            ...testimonials.slice().reverse(),
          ].map((testimonial, index) => (
            <div
              key={`row2-${index}`}
              className="flex-shrink-0 w-80 bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg rounded-2xl p-6"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full mr-4"
                />
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.location}
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>
        {/* Fade overlay for second row */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-purple-50 to-transparent pointer-events-none z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-blue-50 to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
