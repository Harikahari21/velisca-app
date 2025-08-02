"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { PublicLayout } from "@/layouts";

// Mock data for rooms by city
const roomsData: Record<number, any[]> = {
  1: [
    // Goa
    {
      id: 1,
      name: "Beachfront Villa Deluxe",
      image: "/banner1.jpg?height=300&width=400&text=Beach+Villa+Goa",
      price: 8500,
      rating: 4.8,
      description:
        "Stunning oceanfront villa with private beach access and infinity pool",
      amenities: ["WiFi", "AC", "Breakfast", "Pool", "Beach Access", "Parking"],
      facilities: ["Pet Friendly", "Free Cancellation", "24/7 Support"],
      location: "Calangute Beach",
    },
    {
      id: 2,
      name: "Cozy Beach Cottage",
      image: "/banner1.jpg?height=300&width=400&text=Beach+Cottage+Goa",
      price: 4200,
      rating: 4.5,
      description: "Charming cottage just steps away from the pristine beach",
      amenities: ["WiFi", "AC", "Kitchenette", "Garden", "Parking"],
      facilities: ["Free Cancellation", "Eco Friendly"],
      location: "Anjuna Beach",
    },
    {
      id: 3,
      name: "Luxury Beach Resort Suite",
      image: "/banner1.jpg?height=300&width=400&text=Resort+Suite+Goa",
      price: 12000,
      rating: 4.9,
      description:
        "Premium suite with panoramic ocean views and world-class amenities",
      amenities: [
        "WiFi",
        "AC",
        "Breakfast",
        "Pool",
        "Spa",
        "Gym",
        "Beach Access",
      ],
      facilities: [
        "Pet Friendly",
        "Free Cancellation",
        "24/7 Support",
        "Concierge",
      ],
      location: "Baga Beach",
    },
    {
      id: 4,
      name: "Portuguese Heritage Home",
      image: "/banner1.jpg?height=300&width=400&text=Heritage+Home+Goa",
      price: 6800,
      rating: 4.6,
      description: "Authentic Portuguese architecture with modern comforts",
      amenities: ["WiFi", "AC", "Kitchen", "Garden", "Parking"],
      facilities: ["Free Cancellation", "Cultural Tours"],
      location: "Fontainhas, Panaji",
    },
  ],
  7: [
    // Hyderabad
    {
      id: 5,
      name: "Tech City Business Suite",
      image: "/banner1.jpg?height=300&width=400&text=Business+Suite+Hyderabad",
      price: 5500,
      rating: 4.4,
      description: "Modern suite in the heart of HITEC City with city views",
      amenities: [
        "WiFi",
        "AC",
        "Breakfast",
        "Gym",
        "Business Center",
        "Parking",
      ],
      facilities: ["Free Cancellation", "24/7 Support"],
      location: "HITEC City",
    },
  ],
  8: [
    // Bangalore
    {
      id: 6,
      name: "Garden City Retreat",
      image: "/banner1.jpg?height=300&width=400&text=Garden+Retreat+Bangalore",
      price: 4800,
      rating: 4.5,
      description:
        "Peaceful retreat surrounded by lush gardens in the Silicon Valley",
      amenities: ["WiFi", "AC", "Breakfast", "Garden", "Parking"],
      facilities: ["Pet Friendly", "Free Cancellation"],
      location: "Koramangala",
    },
  ],
  9: [
    // Mumbai
    {
      id: 7,
      name: "Marine Drive Penthouse",
      image: "/banner1.jpg?height=300&width=400&text=Penthouse+Mumbai",
      price: 15000,
      rating: 4.8,
      description:
        "Luxury penthouse with stunning views of Marine Drive and Arabian Sea",
      amenities: ["WiFi", "AC", "Kitchen", "Balcony", "Parking"],
      facilities: ["Free Cancellation", "24/7 Support", "Concierge"],
      location: "Marine Drive",
    },
  ],
  10: [
    // Kolkata
    {
      id: 8,
      name: "Colonial Heritage Mansion",
      image: "/banner1.jpg?height=300&width=400&text=Heritage+Mansion+Kolkata",
      price: 5200,
      rating: 4.3,
      description:
        "Historic mansion with colonial architecture and modern amenities",
      amenities: ["WiFi", "AC", "Breakfast", "Library", "Garden", "Parking"],
      facilities: ["Free Cancellation", "Cultural Tours"],
      location: "Park Street",
    },
  ],
  11: [
    // Vizag
    {
      id: 9,
      name: "Coastal Hill Resort",
      image: "/banner1.jpg?height=300&width=400&text=Hill+Resort+Vizag",
      price: 4500,
      rating: 4.4,
      description: "Scenic resort on the hills overlooking the Bay of Bengal",
      amenities: ["WiFi", "AC", "Breakfast", "Pool", "Restaurant", "Parking"],
      facilities: ["Pet Friendly", "Free Cancellation", "24/7 Support"],
      location: "Kailasagiri Hills",
    },
  ],
};

export default function CityPage() {
  const router = useRouter();
  const [cityId, setCityId] = useState<number | null>(null);
  const [cityName, setCityName] = useState("City");

  const [priceFilter, setPriceFilter] = useState<string>("all");
  const [ratingFilter, setRatingFilter] = useState<string>("all");

  useEffect(() => {
    if (router.isReady) {
      const { id, name } = router.query;

      if (typeof id === "string") {
        setCityId(parseInt(id));
      }

      if (typeof name === "string") {
        setCityName(name);
      }
    }
  }, [router.isReady, router.query]);

  if (!cityId) return <div>Loading...</div>;

  const rooms = roomsData[cityId] || [];

  const getFilteredRooms = () => {
    let filteredRooms = rooms;

    if (priceFilter !== "all") {
      const [min, max] = priceFilter.split("-").map(Number);
      filteredRooms = filteredRooms.filter(
        (room) => room.price >= min && (max ? room.price <= max : true)
      );
    }

    if (ratingFilter !== "all") {
      const minRating = Number.parseFloat(ratingFilter);
      filteredRooms = filteredRooms.filter((room) => room.rating >= minRating);
    }

    return filteredRooms;
  };

  const handleRoomClick = (roomId: number) => {
    router.push(
      `/property/${roomId}?city=${cityId}&cityName=${encodeURIComponent(
        cityName
      )}`
    );
  };

  return (
    <PublicLayout>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        {/* <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-sm sticky top-0 z-40"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-[#8d67a2]">
              Velisca
            </Link>
            <nav className="hidden md:flex space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-[#8d67a2] transition-colors"
              >
                Home
              </Link>
              <a
                href="#"
                className="text-gray-700 hover:text-[#8d67a2] transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-[#8d67a2] transition-colors"
              >
                Contact
              </a>
            </nav>
          </div>
        </div>
      </motion.header> */}

        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-4">
                <li>
                  <Link
                    href="/"
                    className="text-gray-500 hover:text-[#8d67a2] transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <span className="text-gray-400 mx-2">/</span>
                  <span className="text-[#8d67a2] font-medium">{cityName}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* City Hero Section */}
        <section className="relative py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Staycations in {cityName}
              </h1>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Discover premium accommodations and unique experiences in{" "}
                {cityName}
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 mb-8 justify-center"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range
                </label>
                <select
                  value={priceFilter}
                  onChange={(e) => setPriceFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8d67a2] focus:border-transparent"
                >
                  <option value="all">All Prices</option>
                  <option value="0-5000">Under ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-999999">Above ₹10,000</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Rating
                </label>
                <select
                  value={ratingFilter}
                  onChange={(e) => setRatingFilter(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8d67a2] focus:border-transparent"
                >
                  <option value="all">All Ratings</option>
                  <option value="4.5">4.5+ Stars</option>
                  <option value="4.0">4.0+ Stars</option>
                  <option value="3.5">3.5+ Stars</option>
                </select>
              </div>
            </motion.div>

            {/* Results Count */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center mb-8"
            >
              <p className="text-gray-600">
                {getFilteredRooms().length} properties found
              </p>
            </motion.div>

            {/* Rooms Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {getFilteredRooms().map((room, index) => (
                <motion.div
                  key={room.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  onClick={() => handleRoomClick(room.id)}
                  className="group cursor-pointer"
                >
                  {/* Room Image */}
                  <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                    <motion.img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      whileHover={{ scale: 1.05 }}
                    />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-lg">
                      <div className="flex items-center space-x-1">
                        <span className="text-yellow-400">★</span>
                        <span className="text-sm font-medium">
                          {room.rating}
                        </span>
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-lg">
                      <span className="text-white text-sm">
                        {room.location}
                      </span>
                    </div>
                  </div>

                  {/* Room Details */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-[#8d67a2] transition-colors">
                        {room.name}
                      </h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-[#8d67a2]">
                          ₹{room.price.toLocaleString()}
                        </div>
                        <div className="text-sm text-gray-500">per night</div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm leading-relaxed truncate">
                      {room.description}
                    </p>

                    {/* Amenities Preview */}
                    <div className="flex flex-wrap gap-2">
                      {room.amenities.slice(0, 3).map((amenity: string) => (
                        <span
                          key={amenity}
                          className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                        >
                          {amenity}
                        </span>
                      ))}
                      {room.amenities.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          +{room.amenities.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full px-4 py-3 bg-[#8d67a2] text-white rounded-lg hover:bg-[#7a5a91] transition-colors font-medium"
                    >
                      View Details & Book
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* No Results */}
            {getFilteredRooms().length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-gray-500 text-lg">
                  No properties found matching your criteria.
                </p>
                <button
                  onClick={() => {
                    setPriceFilter("all");
                    setRatingFilter("all");
                  }}
                  className="mt-4 px-6 py-2 bg-[#8d67a2] text-white rounded-lg hover:bg-[#7a5a91] transition-colors"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </div>
    </PublicLayout>
  );
}
