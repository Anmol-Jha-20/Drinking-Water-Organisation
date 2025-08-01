import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      title: "Reliable and Professional Service",
      content:
        "I approached Drinking Water Organisation for a borewell drilling project on my farmland. Their team was punctual, professional, and completed the job faster than expected. The quality of work was excellent, and they even guided me on maintaining the borewell. I highly recommend them for anyone needing dependable water solutions.",
      author: "Mr. Ramesh Patel",
      position: "farmer",
      company: "Mondolfo Interior Design",
    },
    {
      title: "Efficient Irrigation System That Boosted My Yield",
      content:
        "The irrigation system installed by DWO has transformed the way I manage water on my farm. It’s smart, efficient, and has significantly reduced water wastage. My crop yield improved noticeably within one season. Their support team is also very responsive and helpful.",
      author: "Ms. Meena Sharma",
      position: "Agribusiness Owner",
      company: "",
    },
    {
      title: "Expert Rainwater Harvesting Installation",
      content:
        "We wanted to implement rainwater harvesting for our school campus to promote sustainability. Drinking Water Organisation provided an excellent system tailored to our needs. It’s working flawlessly, and we’ve already reduced our municipal water usage by over 40%. Great work and great impact!",
      author: "Mr. Anil Verma",
      position: "School Administrator",
      company: "",
    },
    {
      title: "One-Stop Water Solution Provider",
      content:
        "From drilling services to setting up rainwater harvesting for our residential project, DWO handled everything smoothly. Their team is experienced and cooperative, and they maintained high-quality standards throughout. It’s rare to find such a reliable partner in this sector.",
      author: "Mrs. Kavita Menon",
      position: "Real Estate Developer",
      company: "Spectrum Building Company, Inc",
    },
  ];

  const totalSlides = testimonials.length;

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index) => {
    setIsAutoPlaying(false);
    setCurrentSlide(index);
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const isFirstSlide = currentSlide === 0;
  const isLastSlide = currentSlide === totalSlides - 1;

  return (
    <div className="w-full max-w-6xl mx-auto bg-gray-200 rounded-lg p-8 md:p-12 relative mb-4">
      <div className="relative overflow-hidden rounded-lg">
        {/* Carousel Track */}
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full flex-shrink-0 px-2">
              <div className="bg-white border-2 border-blue-500 rounded-lg p-8 md:p-10 min-h-[300px] md:min-h-[350px] relative flex flex-col justify-between">
                {/* Left blue border */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"></div>

                <div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-6 leading-tight">
                    {testimonial.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                    {testimonial.content}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-gray-800">
                    {testimonial.author}
                    {testimonial.position && `, ${testimonial.position}`}
                  </p>
                  {/* {testimonial.company && (
                    <p className="text-gray-600 text-sm mt-1">
                      {testimonial.company}
                    </p>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className={`absolute left-0 md:left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
            isFirstSlide ? "cursor-not-allowed" : ""
          }`}
          disabled={isFirstSlide}
        >
          <ChevronLeft
            className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
              isFirstSlide ? "text-gray-600" : "text-blue-800"
            }`}
          />
        </button>

        <button
          onClick={goToNext}
          className={`absolute right-0 md:right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full border-none cursor-pointer flex items-center justify-center text-lg md:text-xl z-10 transition-all duration-300 ${
            isLastSlide ? "cursor-not-allowed" : ""
          }`}
          disabled={isLastSlide}
        >
          <ChevronRight
            className={`w-6 h-6 md:w-7 md:h-7 transition-colors duration-300 ${
              isLastSlide ? "text-gray-600" : "text-blue-800"
            }`}
          />
        </button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-8 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
