import React from "react";
import { Link } from "react-router-dom";
import girlImage from "../assets/girl.png";
import {SocialLinks} from "../pages/index";

function Footer() {
    return (
        <footer className="bg-white border-t py-6">
        <div className="max-w-screen-xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Logo */}
            <Link to="/" className="flex items-center">
            <img src={girlImage} className="h-12 sm:h-14 mr-2" alt="Logo" />
            <span className="font-semibold text-gray-700">Nancy Kumari</span>
            </Link>

            {/* Social Links */}
            <SocialLinks />
        </div>
        </footer>

    )
}

export default Footer