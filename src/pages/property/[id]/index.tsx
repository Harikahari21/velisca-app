"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useRouter } from "next/router";

// Extended mock data for individual properties
const propertyData: Record<number, any> = {
  1: {
    id: 1,
    name: "Beachfront Villa Deluxe",
    images: [
      "/banner2.webp?height=400&width=600&text=Villa+Exterior+View",
      "/pic5.webp?height=400&width=600&text=Living+Room+Interior",
      "/banner1.jpg?height=400&width=600&text=Bedroom+Suite",
      "/banner2.webp?height=400&width=600&text=Private+Pool",
      "/banner2.webp?height=400&width=600&text=Beach+Access",
      "/banner2.webp?height=400&width=600&text=Kitchen+Dining",
    ],
    price: 8500,
    rating: 4.8,
    reviews: 127,
    description:
      "Experience luxury at its finest in this stunning oceanfront villa. Wake up to the sound of waves and enjoy breathtaking sunsets from your private terrace. This villa features contemporary design with traditional Goan elements, offering the perfect blend of comfort and elegance.",
    location: "Calangute Beach, Goa",
    amenities: [
      "High-Speed WiFi",
      "Air Conditioning",
      "Complimentary Breakfast",
      "Private Swimming Pool",
      "Direct Beach Access",
      "Free Parking",
      "24/7 Room Service",
      "Housekeeping",
      "Beach Chairs & Umbrellas",
      "BBQ Grill",
      "Sound System",
      "Smart TV",
    ],
    facilities: [
      "Pet Friendly",
      "Free Cancellation up to 24 hours",
      "24/7 Customer Support",
      "Concierge Service",
      "Airport Transfer Available",
      "Laundry Service",
    ],
    specifications: {
      bedrooms: 3,
      bathrooms: 2,
      maxGuests: 6,
      area: "2500 sq ft",
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
    },
    highlights: [
      "Private beach access with exclusive section",
      "Infinity pool overlooking the ocean",
      "Fully equipped modern kitchen",
      "Spacious living areas with sea views",
      "Master bedroom with ocean-facing balcony",
      "Outdoor dining area perfect for sunset dinners",
    ],
  },
  2: {
    id: 2,
    name: "Cozy Beach Cottage",
    images: [
      "/pic3.jpg?height=400&width=600&text=Cottage+Exterior",
      "/pic4.jpg?height=400&width=600&text=Cozy+Living+Room",
      "/pic3.jpg?height=400&width=600&text=Bedroom+Interior",
      "/banner1.jpg?height=400&width=600&text=Garden+View",
    ],
    price: 4200,
    rating: 4.5,
    reviews: 89,
    description:
      "A charming cottage that captures the essence of Goan coastal living. Perfect for couples or small families seeking a peaceful retreat just steps away from pristine beaches.",
    location: "Anjuna Beach, Goa",
    amenities: [
      "WiFi",
      "AC",
      "Kitchenette",
      "Private Garden",
      "Parking",
      "Beach Towels",
    ],
    facilities: ["Free Cancellation", "Eco Friendly", "Bicycle Rental"],
    specifications: {
      bedrooms: 2,
      bathrooms: 1,
      maxGuests: 4,
      area: "1200 sq ft",
      checkIn: "2:00 PM",
      checkOut: "12:00 PM",
    },
    highlights: [
      "Traditional Goan architecture",
      "Lush tropical garden",
      "5-minute walk to beach",
      "Local market nearby",
    ],
  },
};

export default function PropertyPage() {
  const router = useRouter();
  const { id } = router.query;

  const [cityId, setCityId] = useState<string | null>(null);
  const [cityName, setCityName] = useState("City");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const searchParams = new URLSearchParams(window.location.search);
      setCityId(searchParams.get("city"));
      setCityName(searchParams.get("cityName") || "City");
    }
  }, []);

  if (!router.isReady || !id) return <div>Loading...</div>;

  const propertyId = parseInt(id as string, 10);
  const property = propertyData[propertyId];

  // State for image gallery and amenities
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAllAmenities, setShowAllAmenities] = useState(false);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Property Not Found
          </h1>
          <Link href="/" className="text-[#8d67a2] hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <motion.header
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
              <Link
                href={`/city/${cityId}?name=${encodeURIComponent(cityName)}`}
                className="text-gray-700 hover:text-[#8d67a2] transition-colors"
              >
                {cityName}
              </Link>
            </nav>
          </div>
        </div>
      </motion.header>

      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
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
                <Link
                  href={`/city/${cityId}?name=${encodeURIComponent(cityName)}`}
                  className="text-gray-500 hover:text-[#8d67a2] transition-colors"
                >
                  {cityName}
                </Link>
              </li>
              <li>
                <span className="text-gray-400 mx-2">/</span>
                <span className="text-[#8d67a2] font-medium">
                  {property.name}
                </span>
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Property Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Images and Details */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                <img
                  src={property.images[currentImageIndex] || "/placeholder.svg"}
                  alt={property.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/20" />

                {/* Image Navigation */}
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      currentImageIndex > 0
                        ? currentImageIndex - 1
                        : property.images.length - 1
                    )
                  }
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setCurrentImageIndex(
                      currentImageIndex < property.images.length - 1
                        ? currentImageIndex + 1
                        : 0
                    )
                  }
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </div>

              {/* Image Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {property.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative h-16 rounded-lg overflow-hidden ${
                      currentImageIndex === index ? "ring-2 ring-[#8d67a2]" : ""
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Property Details */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    {property.name}
                  </h1>
                  <p className="text-gray-600 flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {property.location}
                  </p>
                </div>
                <div className="text-right">
                  <div className="flex items-center mb-1">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="font-semibold">{property.rating}</span>
                    <span className="text-gray-500 ml-1">
                      ({property.reviews} reviews)
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 leading-relaxed mb-6">
                {property.description}
              </p>

              {/* Specifications */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#8d67a2]">
                    {property.specifications.bedrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bedrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#8d67a2]">
                    {property.specifications.bathrooms}
                  </div>
                  <div className="text-sm text-gray-600">Bathrooms</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#8d67a2]">
                    {property.specifications.maxGuests}
                  </div>
                  <div className="text-sm text-gray-600">Max Guests</div>
                </div>
                <div className="text-center p-3 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#8d67a2]">
                    {property.specifications.area}
                  </div>
                  <div className="text-sm text-gray-600">Area</div>
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Property Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {property.highlights.map(
                    (highlight: string, index: number) => (
                      <div key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-[#8d67a2] rounded-full mr-3"></div>
                        <span className="text-gray-700">{highlight}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              {/* Amenities */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  Amenities
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {(showAllAmenities
                    ? property.amenities
                    : property.amenities.slice(0, 6)
                  ).map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center">
                      <svg
                        className="w-4 h-4 text-[#8d67a2] mr-2"
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
                      <span className="text-gray-700 text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
                {property.amenities.length > 6 && (
                  <button
                    onClick={() => setShowAllAmenities(!showAllAmenities)}
                    className="mt-3 text-[#8d67a2] hover:underline text-sm font-medium"
                  >
                    {showAllAmenities
                      ? "Show Less"
                      : `Show All ${property.amenities.length} Amenities`}
                  </button>
                )}
              </div>
            </motion.div>

            {/* Facilities */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-6 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Facilities & Policies
              </h3>
              <div className="flex flex-wrap gap-3">
                {property.facilities.map((facility: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-white rounded-xl p-6 shadow-lg sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="text-3xl font-bold text-[#8d67a2] mb-1">
                  ₹{property.price.toLocaleString()}
                </div>
                <div className="text-gray-600">per night</div>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-in
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8d67a2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Check-out
                  </label>
                  <input
                    type="date"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8d67a2] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Guests
                  </label>
                  <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8d67a2] focus:border-transparent">
                    {Array.from(
                      { length: property.specifications.maxGuests },
                      (_, i) => (
                        <option key={i + 1} value={i + 1}>
                          {i + 1} {i + 1 === 1 ? "Guest" : "Guests"}
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-[#8d67a2] text-white py-3 rounded-lg font-semibold hover:bg-[#7a5a91] transition-colors mb-4"
              >
                Book Now
              </motion.button>

              <div className="text-center text-sm text-gray-500 mb-4">
                Free cancellation up to 24 hours before check-in
              </div>

              <div className="border-t pt-4">
                <div className="text-sm text-gray-600 space-y-1">
                  <div className="flex justify-between">
                    <span>Check-in:</span>
                    <span>{property.specifications.checkIn}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Check-out:</span>
                    <span>{property.specifications.checkOut}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
