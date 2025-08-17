import React from "react";
// import introduction from "../../public/introduction_video.mp4"
import  Resume  from "../../public/Nancy_Kumari_PHP_Software_Developer.pdf";
import { useTranslation } from "react-i18next";
import introduction from "../../public/intro.mp4"


export default function VideoCard({ title, description, className }) {

  const { t } = useTranslation();
  return (
    <div className={`overflow-hidden rounded-2xl shadow-md ${className || ""}`}>
      <video className="w-full h-auto object-cover rounded-t-2xl" controls>
        <source src={introduction} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  
      <div className="p-6 text-center">
        {title && <h2 className="text-2xl font-bold mb-3">{title}</h2>}
  
        <a
          href={Resume}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#4E5E80] hover:bg-[#3c4966] text-white text-sm md:text-base font-semibold text-center rounded-lg shadow-md transition duration-200 px-6 py-3 md:px-8 md:py-4"
        >
          {t("home.btn_resume")}
        </a>
      </div>
    </div>
  );
  
}
