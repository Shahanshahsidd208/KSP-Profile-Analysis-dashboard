import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Header({ language , toggleLanguage}) {
    return (
        <header className="shadow sticky z-50 top-0 bg-white">
            <nav className="border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    {/* Logo and Text */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center">
                            <img
                                src="logoksp.png"
                                className="mr-1 h-12"
                                alt="Logo"
                            />
                            <span className="text-xl font-bold text-gray-800">
                                {language === 'english' ? 'Karnataka State Police' : 'ಕರ್ನಾಟಕ ರಾಜ್ಯ ಪೊಲೀಸ್'}
                            </span>
                        </Link>
                    </div>

                  {/* Language Toggle Button */}
<div className="flex items-center">
    <button
        className={`relative mx-4 bg-gray-800 font-bold w-36 h-8 rounded-full focus:outline-none flex items-center justify-center text-orange-100 transition-colors duration-300 ${language === 'english' ? 'bg-red-800' : 'bg-red-950'}`}
        onClick={toggleLanguage}
    >
        <span className="hidden sm:inline">{language === 'english' ? 'English' : 'ಕನ್ನಡ'}</span>
        <span className="sm:hidden">{language === 'english' ? 'EN' : 'ಕನ್ನಡ'}</span>
        <div className={`absolute left-0 w-8 h-8 rounded-full shadow-md transform transition-transform duration-1500 ${language === 'english' ? 'bg-red-950 translate-x-0' : 'bg-red-800 translate-x-28'}`}></div>
    </button>
</div>


                    {/* Navigation Links */}
                    <div className="flex justify-end items-center w-full lg:w-auto">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive }) =>
                                        `block py-2 px-2 duration-200 ${isActive ? "text-orange-800" : "text-gray-700"} border-b border-transparent hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-800 lg:p-0`
                                    }
                                >
                                    <i className="fas fa-home mr-2"></i>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive }) =>
                                        `block py-2 px-4  font-bold duration-200 ${isActive ?  "text-orange-800" : "text-gray-700"} border-b border-transparent hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-800 lg:p-0`
                                    }
                                >
                                    {language === 'english' ? 'About Us' : 'ನಮ್ಮ ಬಗ್ಗೆ'}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/contact"
                                    className={({ isActive }) =>
                                        `block py-2 px-4 font-bold duration-200 ${isActive ? "text-orange-800" : "text-gray-700"} border-b border-transparent hover:bg-gray-100 lg:hover:bg-transparent lg:border-0 hover:text-orange-800 lg:p-0`
                                    }
                                >
                                    {language === 'english' ? 'Contact Us' : 'ನಮ್ಮನೇ ಸಂಪರ್ಕಿಸಿ'}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
