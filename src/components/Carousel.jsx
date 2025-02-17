import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Carousel.css";

import carousel1 from "../assets/carousel1.png";
import carousel2 from "../assets/carousel2.png";
import carousel3 from "../assets/carousel3.png";

const slides = [
  {
    id: 1,
    title: "Trendy Women's Fashion - New Arrivals",
    description: "Step into style with our latest women's fashion collection!",
    image: carousel1,
  },
  {
    id: 2,
    title: "Men's Collection - Elevate Your Style",
    description: "Upgrade your wardrobe with the latest trends in men's fashion!",
    image: carousel2,
  },
  {
    id: 3,
    title: "Adorable & Stylish - Kids' Fashion Sale",
    description: "Dress your little ones in the cutest and trendiest outfits!",
    image: carousel3,
  }
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1} 
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      loop={true}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="carousel-slide" style={{backgroundImage: `url(${slide.image})`}}>
            <div className="carousel-overlay"></div>
            <div className="carousel-content">
              <h2 className="carousel-h2">{slide.title}</h2>
              <p className="carousel-p">{slide.description}</p>
              <button className="carousel-btn">Shop Now</button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
