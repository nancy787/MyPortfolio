import React from "react";
import { ButtonMailto, SocialLinks} from "../pages/index";
import  Resume  from "../../public/nancy_kumari_resume.pdf";
import contactMeImg from "../assets/contact_me.png";
import { useTranslation } from "react-i18next";

function Contact() {
  const { t } = useTranslation();
  return (
    <section className="container mx-auto py-10 px-4 sm:px-6 bg-[#FFEED9]">
      {/* Title */}
      <div className="relative mb-12 flex justify-center items-center">
        <h1 className="text-gray-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold relative z-10 text-center">
          {t("contact.title")}
        </h1>
        <img
          src={contactMeImg}
          alt="Decoration"
          className="absolute -top-6 right-1/2 translate-x-1/2 w-24 sm:w-32 md:w-40 lg:w-48 object-contain opacity-10 z-0"
        />
      </div>
  
      {/* Form / Info */}
      <form>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* First Name */}
          <input
            type="text"
            value="Nancy"
            className="border border-gray-500 px-4 py-2 rounded focus:outline-none cursor-not-allowed w-full"
            readOnly
          />
  
          {/* Last Name */}
          <input
            type="text"
            value="Kumari"
            className="border border-gray-500 px-4 py-2 rounded focus:outline-none cursor-not-allowed w-full"
            readOnly
          />
  
          {/* Email */}
          <ButtonMailto
            label="nancykumari2630@gmail.com"
            mailto="mailto:nancykumari2630@gmail.com"
            className="w-full border border-gray-500 px-4 py-2 rounded text-center"
          />
  
          {/* Location */}
          <div className="flex items-center border border-gray-500 px-4 py-2 rounded cursor-not-allowed w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-700 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5 9 6.343 9 8s1.343 3 3 3z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 22s8-7.58 8-14A8 8 0 104 8c0 6.42 8 14 8 14z"
              />
            </svg>
            <span className="text-gray-800">Panchkula, Haryana, India</span>
          </div>
  
          {/* Resume Button */}
          <a
            href={Resume}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 focus-visible:ring ring-[#4E5E80] border-[#4E5E80] border-2 text-sm md:text-base font-semibold text-[#4E5E80] text-center rounded-lg outline-none transition duration-100 px-6 py-3 w-full"
          >
            {t("contact.btn_resume")}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 21h10a2 2 0 002-2V9.828a2 2 0 00-.586-1.414l-4.828-4.828A2 2 0 0012.172 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          </a>
  
          {/* Social Links */}
          <SocialLinks />
        </div>
      </form>
    </section>
  );
  
}

export default Contact;
