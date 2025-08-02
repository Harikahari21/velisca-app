import type React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Head from "next/head";
import { PublicLayout } from "@/layouts";

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInLeft = {
  initial: { opacity: 0, x: -60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const fadeInRight = {
  initial: { opacity: 0, x: 60 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.6, ease: "easeOut" },
};

const scaleIn = {
  initial: { opacity: 0, scale: 0.8 },
  animate: { opacity: 1, scale: 1 },
  transition: { duration: 0.6, ease: "easeOut" },
};

function AnimatedSection({
  children,
  animation = fadeInUp,
  className = "",
}: {
  children: React.ReactNode;
  animation?: any;
  className?: string;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={animation.initial}
      animate={isInView ? animation.animate : animation.initial}
      transition={animation.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  return (
    <PublicLayout>
      <Head>
        <title>About Us - Velisca</title>
        <meta
          name="description"
          content="Learn about Velisca, your modern staycation booking platform"
        />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header Section with Hero Image */}
        <section className="relative overflow-hidden h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/about/living.jpg?height=1080&width=1920')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

          <div className="relative z-10 max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
                <span className="text-white drop-shadow-2xl">Velisca</span>
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[#8d67a2] to-purple-400 mx-auto mb-8 rounded-full"></div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl sm:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-light drop-shadow-lg"
            >
              Redefining staycations with modern elegance and unforgettable
              experiences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-12"
            >
              <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-sm font-medium">
                  Discover Local Luxury
                </span>
              </div>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
            >
              <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
            </motion.div>
          </motion.div>
        </section>

        {/* Story Section with Images */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <AnimatedSection animation={fadeInLeft}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8d67a2]/10 rounded-full"></div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-purple-200/50 rounded-full"></div>
                  <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 relative">
                    Our <span className="text-[#8d67a2]">Story</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-[#8d67a2] to-purple-400 mb-8 rounded-full"></div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl">
                      <img
                        src="/about/bedroom.jpg?height=300&width=250"
                        alt="Modern hotel lobby"
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="relative overflow-hidden rounded-2xl shadow-xl mt-8">
                      <img
                        src="/about/bedroom1.jpg?height=300&width=250"
                        alt="Luxury bedroom suite"
                        className="w-full h-48 object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              <div className="space-y-8">
                <AnimatedSection animation={fadeInRight}>
                  <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      Born from a simple belief that extraordinary experiences
                      shouldn't require extraordinary distances, Velisca emerged
                      as the answer to modern travelers seeking luxury and
                      comfort close to home. We recognized that the most
                      memorable journeys often begin just around the corner.
                    </p>
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-[#8d67a2] to-purple-400 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="text-[#8d67a2] font-semibold">
                        Founded in 2020
                      </span>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={fadeInRight} className="delay-100">
                  <div className="bg-gradient-to-r from-[#8d67a2]/5 to-purple-50 p-8 rounded-3xl border border-[#8d67a2]/10">
                    <p className="text-xl text-gray-700 leading-relaxed mb-6">
                      What started as a passion project to showcase hidden gems
                      in our own backyard has evolved into a comprehensive
                      platform connecting discerning travelers with curated
                      staycation experiences. Every property on Velisca is
                      handpicked, ensuring that your next getaway exceeds
                      expectations while supporting local communities.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-gray-600">
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#8d67a2] rounded-full"></div>
                        <span>500+ Properties</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                        <span>50+ Cities</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                        <span>10K+ Happy Guests</span>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section with Photos */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8d67a2]/5 via-purple-50 to-indigo-50"></div>
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-[#8d67a2]/10 to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-200/30 to-transparent rounded-full translate-x-48 translate-y-48"></div>

          <div className="relative max-w-7xl mx-auto">
            <AnimatedSection animation={scaleIn} className="text-center mb-20">
              <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-[#8d67a2]">Team</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-[#8d67a2] to-purple-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                A diverse group of travel enthusiasts, technology innovators,
                and hospitality experts
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              <AnimatedSection animation={fadeInUp}>
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#8d67a2] to-purple-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src="/about/team.jpg?height=120&width=120"
                          alt="Leadership Team"
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#8d67a2] rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Leadership Team
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Our visionary leaders bring decades of combined experience
                      in travel, technology, and customer experience, driving
                      Velisca's mission to transform how people discover and
                      book staycations.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation={fadeInUp} className="delay-100">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src="/about/team1.jpg?height=120&width=120"
                          alt="Product & Design Team"
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Product & Design
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Our creative minds craft intuitive experiences and
                      beautiful interfaces, ensuring every interaction with
                      Velisca feels effortless and inspiring, from discovery to
                      booking.
                    </p>
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection animation={fadeInUp} className="delay-200">
                <div className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100 hover:shadow-2xl transition-all duration-300">
                    <div className="flex justify-center mb-6">
                      <div className="relative">
                        <img
                          src="/about/team.jpg?height=120&width=120"
                          alt="Customer Success Team"
                          className="w-24 h-24 rounded-full object-cover shadow-lg"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-4 h-4 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                      Customer Success
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-center">
                      Dedicated to making every staycation perfect, our customer
                      success team works tirelessly to ensure both travelers and
                      property owners have exceptional experiences with our
                      platform.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Mission Section with Background Image */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/placeholder.svg?height=800&width=1600')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-white/95"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              <div className="lg:order-2">
                <AnimatedSection animation={fadeInRight}>
                  <div className="relative">
                    <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#8d67a2]/10 rounded-full"></div>
                    <h2 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-8 relative">
                      Our <span className="text-[#8d67a2]">Mission</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-[#8d67a2] to-purple-400 mb-8 rounded-full"></div>
                  </div>
                </AnimatedSection>
              </div>

              <div className="lg:order-1 space-y-8">
                <AnimatedSection animation={fadeInLeft}>
                  <div className="bg-white/90 backdrop-blur-sm p-10 rounded-3xl shadow-2xl border border-white/50">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#8d67a2] to-purple-400 rounded-2xl flex items-center justify-center flex-shrink-0">
                        <svg
                          className="w-8 h-8 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 10V3L4 14h7v7l9-11h-7z"
                          />
                        </svg>
                      </div>
                      <p className="text-2xl text-gray-800 leading-relaxed font-medium">
                        To make extraordinary staycation experiences accessible
                        to everyone, while empowering local property owners and
                        strengthening communities through sustainable tourism.
                      </p>
                    </div>
                  </div>
                </AnimatedSection>

                <AnimatedSection animation={fadeInLeft} className="delay-100">
                  <div className="bg-gradient-to-r from-[#8d67a2]/10 to-purple-50/80 backdrop-blur-sm p-8 rounded-3xl border border-[#8d67a2]/20">
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      We believe that the perfect getaway doesn't require a
                      passport or a long flight. By connecting travelers with
                      unique, high-quality accommodations in their own region,
                      we're not just changing how people vacation – we're
                      helping them rediscover the beauty and wonder that exists
                      right in their own backyard.
                    </p>

                    <div className="grid grid-cols-3 gap-4 mt-8">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-[#8d67a2] mb-2">
                          98%
                        </div>
                        <div className="text-sm text-gray-600">
                          Guest Satisfaction
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-purple-500 mb-2">
                          24/7
                        </div>
                        <div className="text-sm text-gray-600">
                          Support Available
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-indigo-500 mb-2">
                          100%
                        </div>
                        <div className="text-sm text-gray-600">
                          Verified Properties
                        </div>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Call to Action Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/pic5.webp?height=600&width=1600')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-purple-600/70 to-indigo-600/40"></div>

          <div className="relative max-w-6xl mx-auto text-center">
            <AnimatedSection animation={scaleIn}>
              <div className="mb-12">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full mb-8">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </div>
                <blockquote className="text-3xl sm:text-4xl lg:text-5xl font-light text-white mb-8 leading-relaxed">
                  "Adventure is not outside man; it is within."
                </blockquote>
                <cite className="text-xl text-purple-100 font-medium">
                  — George Eliot
                </cite>
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInUp} className="delay-200">
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="group inline-flex items-center px-10 py-5 bg-white text-[#8d67a2] font-bold text-lg rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-white/25"
                >
                  Start Your Staycation Journey
                  <svg
                    className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-10 py-5 border-2 border-white/50 text-white font-semibold text-lg rounded-full hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
                >
                  <svg
                    className="mr-3 w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.01M15 10h1.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Learn More
                </motion.button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation={fadeInUp} className="delay-300 mt-16">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-80">Luxury Properties</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">50+</div>
                  <div className="text-sm opacity-80">Cities Covered</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">10K+</div>
                  <div className="text-sm opacity-80">Happy Guests</div>
                </div>
                <div className="text-white">
                  <div className="text-4xl font-bold mb-2">4.9★</div>
                  <div className="text-sm opacity-80">Average Rating</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
