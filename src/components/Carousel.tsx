import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Autoplay } from 'swiper/modules'; // Ajout des modules nécessaires
import 'swiper/swiper-bundle.css';

interface CarouselItem {
  title: string;
  description: string;
}

interface CarouselProps {
  items: CarouselItem[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation
      modules={[Navigation,Autoplay]} 
      autoplay={{
        delay: 10000, 
        disableOnInteraction: false, 
      }}
    >
      {items.map((item, index) => (
        <SwiperSlide key={index}>
          <div className="bg-gray-200 p-5 rounded-md text-center">
            <h2 className="text-xl font-bold">{item.title}</h2>
            <p>{item.description}</p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
