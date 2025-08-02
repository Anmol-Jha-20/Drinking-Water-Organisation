// import React, { useState, useEffect } from "react";
// import { ChevronLeft, ChevronRight } from "lucide-react";

// const TestimonialCarousel = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const testimonials = [
//     {
//       title: "Reliable and Professional Service",
//       content:
//         "I approached Drinking Water Organisation for a borewell drilling project on my farmland. Their team was punctual, professional, and completed the job faster than expected. The quality of work was excellent, and they even guided me on maintaining the borewell. I highly recommend them for anyone needing dependable water solutions.",
//       author: "Mr. Ramesh Patel",
//       position: "farmer",
//       company: "Mondolfo Interior Design",
//     },
//     {
//       title: "Efficient Irrigation System That Boosted My Yield",
//       content:
//         "The irrigation system installed by DWO has transformed the way I manage water on my farm. It’s smart, efficient, and has significantly reduced water wastage. My crop yield improved noticeably within one season. Their support team is also very responsive and helpful.",
//       author: "Ms. Meena Sharma",
//       position: "Agribusiness Owner",
//       company: "",
//     },
//     {
//       title: "Expert Rainwater Harvesting Installation",
//       content:
//         "We wanted to implement rainwater harvesting for our school campus to promote sustainability. Drinking Water Organisation provided an excellent system tailored to our needs. It’s working flawlessly, and we’ve already reduced our municipal water usage by over 40%. Great work and great impact!",
//       author: "Mr. Anil Verma",
//       position: "School Administrator",
//       company: "",
//     },
//     {
//       title: "One-Stop Water Solution Provider",
//       content:
//         "From drilling services to setting up rainwater harvesting for our residential project, DWO handled everything smoothly. Their team is experienced and cooperative, and they maintained high-quality standards throughout. It’s rare to find such a reliable partner in this sector.",
//       author: "Mrs. Kavita Menon",
//       position: "Real Estate Developer",
//       company: "Spectrum Building Company, Inc",
//     },
//   ];

//   const totalSlides = testimonials.length;

//   // Auto-scroll functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, totalSlides]);

//   const goToPrevious = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
//     setTimeout(() => setIsAutoPlaying(true), 3000);
//   };

//   const goToNext = () => {
//     setIsAutoPlaying(false);
//     setCurrentSlide((prev) => (prev + 1) % totalSlides);
//     setTimeout(() => setIsAutoPlaying(true), 3000);
//   };

//   const goToSlide = (index) => {
//     setIsAutoPlaying(false);
//     setCurrentSlide(index);
//     setTimeout(() => setIsAutoPlaying(true), 3000);
//   };

//   const isFirstSlide = currentSlide === 0;
//   const isLastSlide = currentSlide === totalSlides - 1;

//   return (
//     <div className="w-full max-w-6xl mx-auto bg-gray-200 rounded-lg p-8 md:p-12 relative mb-4">
//       <div className="relative overflow-hidden rounded-lg">
//         {/* Carousel Track */}
//         <div
//           className="flex transition-transform duration-500 ease-in-out"
//           style={{ transform: `translateX(-${currentSlide * 100}%)` }}
//         >
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="w-full flex-shrink-0 px-2">
//               <div className="bg-white border-2 border-blue-500 rounded-lg p-8 md:p-10 min-h-[300px] md:min-h-[350px] relative flex flex-col justify-between">
//                 {/* Left blue border */}
//                 <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

//                 <div>
//                   <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
//                     {testimonial.title}
//                   </h2>
//                   <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
//                     {testimonial.content}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="font-bold text-gray-800">
//                     {testimonial.author}
//                     {testimonial.position && `, ${testimonial.position}`}
//                   </p>
//                   {/* {testimonial.company && (
//                     <p className="text-gray-600 text-sm mt-1">
//                       {testimonial.company}
//                     </p>
//                   )} */}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Navigation Buttons */}
//         <button
//           onClick={goToPrevious}
//           className={`absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
//             isFirstSlide ? "cursor-not-allowed" : ""
//           }`}
//           disabled={isFirstSlide}
//         >
//           <ChevronLeft
//             className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
//               isFirstSlide ? "text-gray-600" : "text-blue-800"
//             }`}
//           />
//         </button>

//         <button
//           onClick={goToNext}
//           className={`absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
//             isLastSlide ? "cursor-not-allowed" : ""
//           }`}
//           disabled={isLastSlide}
//         >
//           <ChevronRight
//             className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
//               isLastSlide ? "text-gray-600" : "text-blue-800"
//             }`}
//           />
//         </button>
//       </div>

//       {/* Dots Navigation */}
//       <div className="flex justify-center mt-8 gap-3">
//         {testimonials.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
//               index === currentSlide ? "bg-blue-500" : "bg-gray-400"
//             }`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TestimonialCarousel;

import React, { useState, useEffect } from "react";

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Excellent borewell drilling service—quick, clean, and professional. The team explained the process clearly and completed it on time. Highly satisfied and would recommend to others!",
      name: "John Doe",
      position: "CEO, Company Name",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 2,
      text: "Installed a rainwater harvesting system for our home. The quality of work was top-notch and pricing was fair. Really impressed with their expertise and support.",
      name: "Mitchel Smith",
      position: "CEO of Port Foundation",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 3,
      text: "Reliable and affordable irrigation service for my farm. Water usage is now much more efficient. Great experience from start to finish!",
      name: "Sarah Johnson",
      position: "CTO, Tech Solutions",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
    },
    {
      id: 4,
      text: "Very professional in deep tubewell installation. They came on time, finished the job smoothly, and left the site clean. Would definitely hire them again.",
      name: "Michael Brown",
      position: "Founder, Innovation Hub",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=80&h=80&fit=crop&crop=face",
    },
  ];

  // Auto-scroll functionality
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section
      className="py-16 px-4 bg-gray-50"
      role="region"
      aria-label="Client Testimonials"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            OUR CLIENT SAYS
          </h2>
        </div>

        {/* Desktop View - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12">
          {testimonials
            .slice(currentIndex, currentIndex + 2)
            .map((testimonial, index) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 transition-all duration-300 hover:shadow-md"
              >
                {/* Quote Icon */}
                <div className="mb-6">
                  <svg
                    className="w-8 h-8 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 text-base leading-relaxed mb-8">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={testimonial.image}
                      alt={`${testimonial.name} profile`}
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          testimonial.name
                        )}&background=e5e7eb&color=374151&size=48`;
                      }}
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500">
                      {testimonial.position}
                    </p>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Mobile View - Single Card with Swipe */}
        <div className="md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                    {/* Quote Icon */}
                    <div className="mb-4">
                      <svg
                        className="w-6 h-6 text-gray-300"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                    </div>

                    {/* Testimonial Text */}
                    <blockquote className="text-gray-700 text-sm leading-relaxed mb-6">
                      "{testimonial.text}"
                    </blockquote>

                    {/* Client Info */}
                    <div className="flex items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="w-10 h-10 rounded-full object-cover"
                          src={testimonial.image}
                          alt={`${testimonial.name} profile`}
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(
                              testimonial.name
                            )}&background=e5e7eb&color=374151&size=40`;
                          }}
                        />
                      </div>
                      <div className="ml-3">
                        <h4 className="text-base font-semibold text-gray-900">
                          {testimonial.name}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows for Mobile */}
          <div className="flex justify-center items-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <svg
                className="w-4 h-4 text-gray-600"
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
              onClick={nextSlide}
              className="p-2 rounded-full bg-white shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <svg
                className="w-4 h-4 text-gray-600"
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
        </div>

        {/* Dots Indicator */}
        <div className="md:hidden flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ||
                (index === currentIndex + 1 && window.innerWidth >= 768)
                  ? "bg-blue-500"
                  : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
