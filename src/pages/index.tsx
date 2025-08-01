import { PublicLayout } from "@/layouts";
import { motion } from "framer-motion";
import Navbar from "@/layouts/public/Navbar";
import { Heart, Search } from "lucide-react";
import {
  DestinationSection,
  FeaturesSection,
  HeroSection,
  TestimonialsSection,
} from "@/components";

export default function Home() {
  return (
    <PublicLayout>
      {/* <h1>Home</h1> */}
      <HeroSection />
      <DestinationSection />
      <TestimonialsSection />
      <FeaturesSection />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Ready for Your Next
              <br />
              <span className="text-white/90">Indian Adventure?</span>
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto font-light">
              Join thousands of travelers who have discovered the magic of
              authentic Indian homestay experiences with Velisca. Start your
              journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="flex items-center justify-center h-16 px-10 bg-white text-purple-600 hover:bg-gray-50 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Search className="h-5 w-5 mr-3" />
                Start Exploring
              </button>
              <button className="flex items-center justify-center h-16 px-10 border-2 border-white text-white text-lg font-semibold rounded-2xl hover:bg-white hover:text-purple-600 transition-all duration-300 bg-transparent hover:scale-105">
                <Heart className="h-5 w-5 mr-3" />
                Become a Host
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
