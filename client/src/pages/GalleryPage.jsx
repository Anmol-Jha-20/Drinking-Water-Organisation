import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  ZoomIn,
  Calendar,
  MapPin,
  Users,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import Header from "../components/Header/Header.jsx";
import DrillingImage from "../assets/Drilling.jpeg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState("all");

  // Gallery data with placeholder images
  const galleryItems = [
    {
      id: 1,
      title: "PVC Borewell Drilling Service",
      description:
        "Efficient and reliable PVC Borewell Drilling Service designed for long-lasting water access and durable performance.",
      category: "community",
      date: "2024-01-15",
      location: "Rural District A",
      participants: 150,
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2022/7/WV/WP/DJ/6169003/prod-20220715-0743356041530766023575981-jpg-500x500.jpg",
      alt: "Volunteers distributing clean water to community members",
    },
    {
      id: 2,
      title: "Agriculture Drilling Service",
      description:
        "Professional Agriculture Drilling Service tailored to ensure reliable water supply for farms and irrigation needs.",
      category: "infrastructure",
      date: "2024-02-20",
      location: "Main Facility",
      participants: 25,
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2022/7/KL/OA/DB/6169003/product-jpeg-500x500.jpg",
      alt: "Scientists testing water quality in laboratory",
    },
    {
      id: 3,
      title: "PVC Tubewell Drilling Service",
      description:
        "Durable and cost-effective PVC Tubewell Drilling Service for consistent and long-term groundwater extraction.",
      category: "education",
      date: "2024-03-10",
      location: "Local School",
      participants: 80,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/ZH/JN/GA/6169003/tubewell-drilling-service-500x500.png",
      alt: "Children learning about water conservation",
    },
    {
      id: 4,
      title: "Landscape Irrigation Service",
      description:
        "Efficient Landscape Irrigation Service designed to keep your lawns and gardens healthy, green, and water-optimized.",
      category: "infrastructure",
      date: "2024-01-30",
      location: "Treatment Center",
      participants: 50,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/10/353941887/EH/CD/AY/6169003/landscape-irrigation-service-500x500.png",
      alt: "Modern water treatment facility",
    },
    {
      id: 5,
      title: "PVC Household Tubewell Installation Services",
      description:
        "Reliable PVC Household Tubewell Installation Service ensuring clean and consistent water supply for residential needs.",
      category: "community",
      date: "2024-02-05",
      location: "Village Center",
      participants: 200,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320243231/NN/KG/NW/6169003/pvc-household-tubewell-installation-services-500x500.jpeg",
      alt: "Health workers conducting community outreach",
    },
    {
      id: 6,
      title: "PVC Submersible Pump Installation Service",
      description:
        "Professional PVC Submersible Pump Installation ensuring efficient water flow and long-lasting performance for residential and agricultural use.",
      category: "research",
      date: "2024-03-15",
      location: "R&D Center",
      participants: 30,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/TV/OE/VX/6169003/submersible-pump-installation-service-500x500.png",
      alt: "Researchers developing water purification technology",
    },
    {
      id: 7,
      title: "PVC Domestic Tubewell Installation Service",
      description:
        "Trusted PVC Domestic Tubewell Installation Service for a dependable and safe water supply in residential settings.",
      category: "education",
      date: "2024-02-28",
      location: "Training Center",
      participants: 45,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2023/6/320243104/CR/PU/WT/6169003/pvc-domestic-tubewell-installation-service-500x500.jpeg",
      alt: "Volunteers participating in training session",
    },
    {
      id: 8,
      title: "Irrigation Survey Service",
      description:
        "Accurate Irrigation Survey Service to assess land and water needs for optimal agricultural planning and system design.",
      category: "emergency",
      date: "2024-03-20",
      location: "Emergency Zone",
      participants: 35,
      image:
        "https://5.imimg.com/data5/SELLER/Default/2022/7/NN/TK/SG/6169003/irrigation-survey-service-500x500.png",
      alt: "Emergency response team in action",
    },
    {
      id: 9,
      title: "Deep Hole Drilling Service",
      description:
        "Precision Deep Hole Drilling Service designed for high-depth water access with reliable and efficient performance.",
      category: "infrastructure",
      date: "2024-01-25",
      location: "Remote Area",
      participants: 20,
      image:
        "https://5.imimg.com/data5/ANDROID/Default/2022/7/RW/XB/JJ/6169003/product-jpeg-500x500.jpg",
      alt: "Solar powered water pumping system",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", count: galleryItems.length },
    {
      id: "community",
      name: "Community",
      count: galleryItems.filter((item) => item.category === "community")
        .length,
    },
    {
      id: "infrastructure",
      name: "Infrastructure",
      count: galleryItems.filter((item) => item.category === "infrastructure")
        .length,
    },
    {
      id: "education",
      name: "Education",
      count: galleryItems.filter((item) => item.category === "education")
        .length,
    },
    {
      id: "research",
      name: "Research",
      count: galleryItems.filter((item) => item.category === "research").length,
    },
    {
      id: "emergency",
      name: "Emergency",
      count: galleryItems.filter((item) => item.category === "emergency")
        .length,
    },
  ];

  const filteredItems =
    currentCategory === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === currentCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  return (
    <>
      {/* SEO Meta Tags */}
      <div style={{ display: "none" }}>
        <h1>
          Drinking Water Organisation Gallery - Clean Water Projects & Community
          Outreach
        </h1>
        <meta
          name="description"
          content="Explore our comprehensive gallery showcasing clean water initiatives, community programs, infrastructure development, and educational outreach by Drinking Water Organisation."
        />
        <meta
          name="keywords"
          content="clean water, water organisation, community health, water treatment, water conservation, humanitarian aid"
        />
      </div>

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
        {/* Header */}
        <Header />
        <motion.section
          className="relative h-64 md:h-80 lg:h-96 bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Background Image Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
            style={{
              backgroundImage: `url(${DrillingImage})`,
            }}
          />

          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black opacity-40" />

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center justify-center uppercase h-full text-white">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Gallery
            </motion.h1>

            <motion.nav
              className="text-lg md:text-xl"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <span className="text-white hover:text-yellow-400 cursor-pointer transition-colors">
                Home
              </span>
              <span className="mx-3 text-yellow-400">/</span>
              <span className="text-yellow-400">Gallery</span>
            </motion.nav>
          </div>
        </motion.section>

        <div className="text-center mb-16 py-16">
          <h1 className="text-4xl md:text-5xl font-bold uppercase text-blue-900 mb-6 tracking-wide">
            Our Impact Gallery
          </h1>
          <p className="text-gray-700 text-lg md:text-xl max-w-4xl mx-auto leading-relaxed px-4">
            Discover the transformative work of our Drinking Water Organisation
            through powerful images and stories of hope, health, and community
            empowerment.
          </p>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-lg border-b-4 border-blue-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-clip-text text-transparent mb-4"
              >
                Our Impact Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              >
                Discover the transformative work of our Drinking Water
                Organisation through powerful images and stories of hope,
                health, and community empowerment.
              </motion.p>
            </div>
          </div>
        </motion.div> */}

        {/* Category Filter */}
        {/* <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        >
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 shadow-lg hover:shadow-xl ${
                  currentCategory === category.id
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-50 border-2 border-gray-200"
                }`}
              >
                {category.name}
                <span
                  className={`ml-2 px-2 py-1 rounded-full text-xs ${
                    currentCategory === category.id
                      ? "bg-white/20 text-white"
                      : "bg-yellow-400 text-gray-800"
                  }`}
                >
                  {category.count}
                </span>
              </motion.button>
            ))}
          </div>
        </motion.section> */}

        {/* Gallery Grid */}
        <motion.section className="max-w-7xl mx-auto px-4 my-8 sm:px-6 lg:px-8 pb-16">
          <motion.div
            key={currentCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group cursor-pointer"
                onClick={() => setSelectedImage(item)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-56 sm:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ opacity: 1, scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg">
                      <ZoomIn className="w-6 h-6 text-blue-600" />
                    </div>
                  </motion.div>
                  {/* <div className="absolute top-4 right-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        item.category === "community"
                          ? "bg-green-500"
                          : item.category === "infrastructure"
                          ? "bg-blue-500"
                          : item.category === "education"
                          ? "bg-purple-500"
                          : item.category === "research"
                          ? "bg-indigo-500"
                          : "bg-red-500"
                      }`}
                    >
                      {item.category.charAt(0).toUpperCase() +
                        item.category.slice(1)}
                    </span>
                  </div> */}
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* <div className="space-y-2">
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2 text-blue-500" />
                      {new Date(item.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <MapPin className="w-4 h-4 mr-2 text-green-500" />
                      {item.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Users
                        className="w-4 h-4 mr-2"
                        style={{ color: "#F0B100" }}
                      />
                      {item.participants} participants
                    </div>
                  </div> */}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredItems.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Users className="w-16 h-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500">
                Try selecting a different category to see more projects.
              </p>
            </motion.div>
          )}
        </motion.section>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                variants={modalVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.alt}
                    className="w-full h-64 sm:h-96 object-cover"
                  />
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors duration-200 shadow-lg"
                  >
                    <X className="w-6 h-6 text-gray-700" />
                  </button>
                  {/* <div className="absolute top-4 left-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                        selectedImage.category === "community"
                          ? "bg-green-500"
                          : selectedImage.category === "infrastructure"
                          ? "bg-blue-500"
                          : selectedImage.category === "education"
                          ? "bg-purple-500"
                          : selectedImage.category === "research"
                          ? "bg-indigo-500"
                          : "bg-red-500"
                      }`}
                    >
                      {selectedImage.category.charAt(0).toUpperCase() +
                        selectedImage.category.slice(1)}
                    </span>
                  </div> */}
                </div>

                {/* <div className="p-6">
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                    {selectedImage.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {selectedImage.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-3 text-blue-500" />
                      <div>
                        <div className="text-sm text-gray-500">Date</div>
                        <div className="font-semibold">
                          {new Date(selectedImage.date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <MapPin className="w-5 h-5 mr-3 text-green-500" />
                      <div>
                        <div className="text-sm text-gray-500">Location</div>
                        <div className="font-semibold">
                          {selectedImage.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Users
                        className="w-5 h-5 mr-3"
                        style={{ color: "#F0B100" }}
                      />
                      <div>
                        <div className="text-sm text-gray-500">
                          Participants
                        </div>
                        <div className="font-semibold">
                          {selectedImage.participants}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        {/* <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-blue-700 py-16"
        >
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission for Clean Water
            </h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Together, we can ensure every community has access to safe, clean
              drinking water. Your support makes these projects possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 hover:bg-yellow-300 text-gray-800 font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Support Our Projects
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl border-2 border-white/30"
              >
                Learn More
              </motion.button>
            </div>
          </div>
        </motion.section> */}
      </div>
    </>
  );
};

export default GalleryPage;
