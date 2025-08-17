import React,{useState} from "react";
import {Link, NavLink} from "react-router-dom"
import girlImage from '../assets/girl.png';
import {LanguageSelector} from "../pages/index";
import { useTranslation } from "react-i18next";

function Header () {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="shadow sticky top-0 z-50 bg-white">
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            {/* Logo */}
            <Link to="/" className="flex items-center">
            <img src={girlImage} className="mr-3 h-12" alt="Logo" />
            </Link>

            {/* Hamburger Button */}
            <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="mobile-menu"
            aria-expanded={isOpen ? "true" : "false"}
            >
            <span className="sr-only">Open main menu</span>
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
            >
                {isOpen ? (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
                ) : (
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                />
                )}
            </svg>
            </button>

            {/* Menu */}
            <div
            className={`${
                isOpen ? "block" : "hidden"
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
            >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                {["home", "about", "contact", "work"].map((item) => (
                <li key={item}>
                    <NavLink
                    to={`/${item === "home" ? "" : item}`}
                    className={({ isActive }) =>
                        `block py-2 pr-4 pl-3 duration-200 ${
                        isActive ? "text-orange-500" : "text-gray-600"
                        } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                    }
                    >
                    {t(`header.${item}`)}
                    </NavLink>
                </li>
                ))}
                <li>
                <LanguageSelector />
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </header>
    )
}

export default Header