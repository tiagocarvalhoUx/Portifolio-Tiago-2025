// work slider data
export const workSliderfs = {
  slides: [
    {
      images: [
        {
          title: "Faster-Food",
          path: "/Faster-food.png",
          link: "https://faster-food-omega.vercel.app/", // Adicione o link correto
        },
        {
          title: "Coffe-Web",
          path: "/coffe-app.png",
          link: "https://coffe-web-henna.vercel.app/", // Adicione o link correto
        },
        {
          title: "Pet-Shop",
          path: "/Pet-shop.png",
          link: "https://petshop-chi.vercel.app/",
        },
        {
          title: "Mrv-House",
          path: "/mrv.png",
          link: "https://mrv-house.vercel.app/", // Adicione o link correto
        },
      ],
    },
    {
      images: [
        {
          title: "Barbearia",
          path: "/Barbearia.png",
          link: "https://barbearia-react-eight.vercel.app/",
        },
        {
          title: "Hamburgueria",
          path: "/burguer layout.png",
          link: "https://cardapio-hambuguer-three.vercel.app/", // Adicione o link correto
        },
        {
          title: "Batman",
          path: "/Batman.png",
          link: "https://projeto-batman-mu.vercel.app/", // Adicione o link correto
        },
        {
          title: "Popcorn",
          path: "/PopCorn layout.png",
          link: "https://pop-corn-festas.vercel.app/", // Adicione o link correto
        },
      ],
    },
  ],
};

//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

//import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";

// next image
import Image from "next/image";

const WorkSlider = () => {
  const handleImageClick = (link) => {
    if (link) {
      window.open(link, "_blank");
    }
  };

  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px]  sm:h-[500px] mt-[70px] "
    >
      {workSliderfs.slides.map((slide, slideIndex) => {
        return (
          <SwiperSlide key={slideIndex}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer  ">
              {slide.images.map((image, imageIndex) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex
                    items-center justify-center group"
                    key={`${slideIndex}-${imageIndex}`}
                    onClick={() => handleImageClick(image.link)}
                  >
                    <div
                      className="flex items-center justify-center relative 
                      overflow-hidden group"
                    >
                      <Image
                        src={image.path}
                        width={500}
                        height={300}
                        alt={image.title}
                      />
                      {/* overlay gradient */}
                      <div
                        className="absolute inset-0 bg-gradient-to-l 
                        from-transparent via-[#e838cc] to-[#4a22bd] opacity-0
                        group-hover:opacity-80 transition-all duration-700"
                      >
                        {/* title */}
                        <div
                          className="absolute bottom-0 translate-y-[80px] 
                          group-hover:-translate-y-10 group-hover:xl:-translate-y-20
                          transition-all duration-300"
                        >
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em] text-white">
                            {/* title part.1 */}
                            <div className="delay-100">LIVE</div>
                            {/* title part.2 */}
                            <div
                              className="translate-y-[500%]
                              group-hover:translate-y-0 transition-all duration-300 delay-150"
                            >
                              PROJECT
                            </div>
                            {/* icon */}
                            <div
                              className="text-xl translate-y-[500%]
                              group-hover:translate-y-0 transition-all duration-300 delay-200"
                            >
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
