import React from "react";
import girlImage from '../assets/girl.png';
import  Resume  from "../../public/nancy_kumari_resume.pdf";
import {Contact, About, Work, VideoCard}  from "../pages/index";
import { useTranslation } from "react-i18next";

function Home() {

  const ButtonMailTo = ( email) => {
    window.location.href = `mailto:${email}`;
  } 
  const { t } = useTranslation();

    return(
      <div className="bg-[#FFEED9] min-h-screen max-w-screen-2xl px-4 md:px-6 lg:px-12 container mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col-reverse lg:flex-row justify-between items-center gap-6 sm:gap-10 md:gap-16">
        
        {/* Left Content */}
        <div className="flex flex-col justify-center text-center lg:text-left lg:py-12 xl:py-20">
          <button className="bg-[#FFDDBF] text-base md:text-lg xl:text-xl font-semibold rounded-xl mb-4 md:mb-6 px-4 py-2 md:px-6 md:py-3">
            👋 {t("home.wave")}
          </button>
    
          <h1 className="text-black-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-8">
            {t("home.name")}
            <span className="block py-2 text-xl sm:text-2xl md:text-3xl lg:text-4xl">{t("home.title")}</span>
            <span className="block text-base sm:text-lg md:text-xl lg:text-2xl">
              (PHP | Laravel | Symfony | MySQL | React)
            </span>
          </h1>
    
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-3">
            <button
              className="w-full sm:w-auto bg-[#4E5E80] cursor-pointer focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-3 md:px-8 md:py-4"
              onClick={() => ButtonMailTo("nancykumari2630@gmail.com")}
            >
              {t("home.btn_email")}
            </button>
            <a
              href={Resume}
              target="_blank"
              className="w-full sm:w-auto focus-visible:ring ring-[#4E5E80] border-[#4E5E80] border-2 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-6 py-3 md:px-8 md:py-4"
            >
              {t("home.btn_resume")}
            </a>
          </div>
        </div>
    
        {/* Right Image */}
        <div className="w-full lg:w-1/2 max-h-[28rem] sm:max-h-[32rem] lg:max-h-[40rem] overflow-hidden rounded-2xl shadow-md">
          <img
            src={girlImage}
            loading="lazy"
            alt="Portfolio Illustration"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </section>
    
      {/* Divider + Video Section */}
      <hr className="my-8 border-gray-300" />
      <section className="flex justify-center items-center">
        <VideoCard
          title={t("home.introduction")}
          description={t("home.video")}
          className="bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-md"
        />
      </section>
    
      {/* Divider + About */}
      <hr className="my-8 border-gray-300" />
      <section>
        <About />
      </section>
    
      {/* Divider + Work */}
      <hr className="my-8 border-gray-300" />
      <section>
        <Work />
      </section>
    
      {/* Divider + Contact */}
      <hr className="my-8 border-gray-300" />
      <section>
        <Contact />
      </section>
    </div>
    
    )
}

export default Home;