"use client";

import { motion } from "framer-motion";
import {
  Shield,
  DollarSign,
  Headphones,
  Heart,
  Award,
  MapPin,
} from "lucide-react";
import { fadeInUpVariants, staggerContainer } from "@/utils";

const features = [
  {
    icon: Shield,
    title: "Verified Indian Hosts",
    description:
      "Every host is personally verified with background checks and local community recommendations for your safety.",
    gradient: "from-emerald-400 to-teal-600",
    bgColor: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    icon: DollarSign,
    title: "Best Price Promise",
    description:
      "Find a lower price elsewhere? We'll match it and give you an additional 5% off your booking.",
    gradient: "from-blue-400 to-indigo-600",
    bgColor: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    icon: Headphones,
    title: "24/7 Hindi Support",
    description:
      "Our dedicated support team is available in Hindi, English, and regional languages around the clock.",
    gradient: "from-purple-400 to-pink-600",
    bgColor: "from-purple-50 to-pink-50",
    iconBg: "bg-purple-100",
    iconColor: "text-purple-600",
  },
  {
    icon: Heart,
    title: "Authentic Experiences",
    description:
      "Live like a local with genuine cultural experiences, home-cooked meals, and personal connections.",
    gradient: "from-rose-400 to-pink-600",
    bgColor: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
  {
    icon: Award,
    title: "Quality Assurance",
    description:
      "Handpicked accommodations that meet our high standards for cleanliness, comfort, and hospitality.",
    gradient: "from-yellow-400 to-orange-600",
    bgColor: "from-yellow-50 to-orange-50",
    iconBg: "bg-yellow-100",
    iconColor: "text-yellow-600",
  },
  {
    icon: MapPin,
    title: "Pan-India Coverage",
    description:
      "From Kashmir to Kanyakumari, discover homestays across all 28 states and 8 union territories.",
    gradient: "from-green-400 to-emerald-600",
    bgColor: "from-green-50 to-emerald-50",
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6">
            Why Choose Velisca
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Premium Features for
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              Indian Travelers
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Experience the perfect blend of safety, authenticity, and value
            designed specifically for Indian hospitality
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeInUpVariants}
              className={`group bg-gradient-to-br ${feature.bgColor} border-0 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl p-8 text-center hover:-translate-y-2`}
            >
              <div
                className={`w-20 h-20 ${feature.iconBg} rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className={`h-10 w-10 ${feature.iconColor}`} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
