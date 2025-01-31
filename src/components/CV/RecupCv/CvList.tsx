import React from "react";
import { cvData, CV } from "../../../utils/CvData";
import { SwiperSlide } from "swiper/react";

const CVList: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cv des utilisateurs</h2>
      {cvData.length === 0 ? (
        <p className="text-gray-500 text-center">Aucun CV disponible.</p>
      ) : (
        <ul className="space-y-4">
          {cvData.map((cv: CV, index:number) => (
        <SwiperSlide key={index}>
            <li key={cv.id} className="p-6 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-800">{cv.name}</h3>
              <p className="text-gray-600"><strong>Éducation:</strong> {cv.education}</p>
              <p className="text-gray-600"><strong>Compétences:</strong> {cv.skills.join(", ")}</p>
              <h4 className="font-semibold mt-4 text-gray-700">Expérience:</h4>
              <ul className="list-disc pl-5 space-y-1">
                {cv.experience.map((exp, index) => (
                  <li key={index} className="text-gray-600">
                    {exp.role} chez <span className="font-semibold">{exp.company}</span> ({exp.duration})
                  </li>
                ))}
              </ul>
            </li>
        </SwiperSlide>
          ))}
        </ul>
      )}
    </div>
    
  );
};

export default CVList;
