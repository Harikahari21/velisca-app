import { motion } from "framer-motion";
import Image from "next/image";
// import { Badge } from "@/components/ui/badge"
import { MapPin, Star } from "lucide-react";
import { fadeInUpVariants, staggerContainer } from "@/utils";

const destinations = [
  {
    name: "Kerala Backwaters",
    state: "Kerala",
    image: "/villas/img1.jpg?height=400&width=600",
    description: "Traditional houseboats and waterside homestays",
    properties: "120+ homestays",
    rating: 4.8,
    price: "₹2,500",
  },
  {
    name: "Rajasthan Heritage",
    state: "Rajasthan",
    image: "/pic1.webp?height=400&width=600",
    description: "Royal havelis and desert camps",
    properties: "85+ homestays",
    rating: 4.9,
    price: "₹3,200",
  },
  {
    name: "Himachal Hills",
    state: "Himachal Pradesh",
    image: "/pic2.webp?height=400&width=600",
    description: "Mountain retreats and apple orchards",
    properties: "200+ homestays",
    rating: 4.7,
    price: "₹1,800",
  },
  {
    name: "Goa Beaches",
    state: "Goa",
    image: "/pic3.jpg?height=400&width=600",
    description: "Beachside villas and Portuguese homes",
    properties: "150+ homestays",
    rating: 4.8,
    price: "₹2,800",
  },
  {
    name: "Tamil Nadu Temples",
    state: "Tamil Nadu",
    image: "/pic4.jpg?height=400&width=600",
    description: "Heritage homes near ancient temples",
    properties: "90+ homestays",
    rating: 4.6,
    price: "₹2,000",
  },
  {
    name: "Kashmir Valley",
    state: "Jammu & Kashmir",
    image: "/pic5.webp?height=400&width=600",
    description: "Houseboats and mountain lodges",
    properties: "60+ homestays",
    rating: 4.9,
    price: "₹3,500",
  },
];

const DestinationSection = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 text-sm font-medium mb-6">
            Popular Destinations
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Explore Incredible
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              {" "}
              India
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            From the backwaters of Kerala to the palaces of Rajasthan, discover
            authentic homestays across India's most beautiful destinations
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {destinations.map((destination, index) => (
            <motion.div key={index} variants={fadeInUpVariants}>
              <div className="group bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 rounded-3xl overflow-hidden hover:-translate-y-2">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 bg-white/90 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
                    {destination.properties}
                  </span>
                  <div className="absolute top-4 right-4 flex items-center bg-white/90 rounded-full px-2 py-1">
                    <Star className="h-3 w-3 text-yellow-500 fill-current mr-1" />
                    <span className="text-xs font-medium text-gray-800">
                      {destination.rating}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {destination.name}
                    </h3>
                    <span className="text-lg font-bold text-purple-600">
                      {destination.price}/night
                    </span>
                  </div>
                  <div className="flex items-center mb-3">
                    <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                    <span className="text-sm text-gray-500 font-medium">
                      {destination.state}
                    </span>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {destination.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default DestinationSection;
