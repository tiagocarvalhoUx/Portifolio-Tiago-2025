import React, { useState } from "react";

// Work slider data
const workSliderfs = {
  slides: [
    {
      images: [
        {
          title: "Coffe-app",
          path: "/coffe-app.png",
          link: "https://coffe-web-henna.vercel.app/",
        },
        {
          title: "Hamburgueria",
          path: "/hambugueria.png",
          link: "https://example.com/hamburgueria",
        },
        {
          title: "Batman",
          path: "/Batman.png",
          link: "https://example.com/batman",
        },
        {
          title: "Popcorn",
          path: "/popcorne.png",
          link: "https://example.com/popcorn",
        },
      ],
    },
    {
      images: [
        {
          title: "Batman",
          path: "/Batman.png",
          link: "https://example.com/batman",
        },
        {
          title: "Popcorn",
          path: "/popcorne.png",
          link: "https://example.com/popcorn",
        },
        {
          title: "Barbearia",
          path: "/Barbearia.png",
          link: "https://barbearia-react-eight.vercel.app/",
        },
        {
          title: "Hamburgueria",
          path: "/hambugueria.png",
          link: "https://example.com/hamburgueria",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleImageClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % workSliderfs.slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + workSliderfs.slides.length) % workSliderfs.slides.length
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="relative h-80 sm:h-96 md:h-[480px] overflow-hidden rounded-lg">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-300 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {workSliderfs.slides.map((slide, slideIndex) => (
            <div key={slideIndex} className="w-full h-full flex-shrink-0">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-full p-2">
                {slide.images.map((image, imageIndex) => (
                  <div
                    key={imageIndex}
                    className="relative rounded-lg overflow-hidden cursor-pointer shadow-lg hover:shadow-xl transition-shadow duration-300"
                    onClick={() => handleImageClick(image.link)}
                  >
                    {/* Background Image */}
                    <div
                      className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"
                      style={{
                        backgroundImage: `url(${image.path})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    ></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          ←
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300 backdrop-blur-sm"
        >
          →
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {workSliderfs.slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "bg-white"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Current slide info */}
      <div className="mt-4 text-center text-gray-600">
        <p className="text-sm">
          Slide {currentSlide + 1} de {workSliderfs.slides.length} - Clique nas
          imagens para acessar os projetos
        </p>
      </div>

      <style jsx>{`
        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default WorkSlider;
