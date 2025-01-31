import {Swiper, SwiperSlide } from "swiper/react";
import { Pagination,Autoplay } from 'swiper/modules';
import "swiper/swiper-bundle.css";
import { cvData, CV } from "../../utils/CvData";

const getRandomCVs = (data: CV[], count: number) => {
  const shuffled = [...data].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count); 
};

const CarrousselCV: React.FC = () => {
  const randomCVs = getRandomCVs(cvData, 5); 

  return (
    <div className="max-w-4xl mx-auto p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">CV des utilisateurs</h2>
      {randomCVs.length === 0 ? (
        <p className="text-gray-500 text-center">Aucun CV disponible.</p>
      ) : (
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {randomCVs.map((cv: CV, index: number) => (
            <SwiperSlide key={index}>
              <div className="p-6 border border-gray-300 rounded-lg transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800">{cv.name}</h3>
                <p className="text-gray-600">
                  <strong>Éducation:</strong> {cv.education}
                </p>
                <p className="text-gray-600">
                  <strong>Compétences:</strong> {cv.skills.join(", ")}
                </p>
                <h4 className="font-semibold mt-4 text-gray-700">Expérience:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  {cv.experience.map((exp, expIndex) => (
                    <li key={expIndex} className="text-gray-600">
                      {exp.role} chez <span className="font-semibold">{exp.company}</span> ({exp.duration})
                    </li>
                  ))}
                </ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
};

export default CarrousselCV;
