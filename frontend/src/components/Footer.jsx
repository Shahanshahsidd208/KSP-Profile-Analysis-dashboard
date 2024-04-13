import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Footer({ language }) {
    const whatsappNumber = '+917063031336'; // Your WhatsApp number including country code
    const [visitorCount, setVisitorCount] = useState(0);

    // Simulate updating visitor count on component mount
    useEffect(() => {
        // Fetch the visitor count from your database or API
        // For demo purposes, let's simulate it with a random number
        const randomCount = Math.floor(Math.random() * 1000) + 1;
        setVisitorCount(randomCount);
    }, []);

    return (
        <footer className="bg-red-950 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-mm font-semibold text-white uppercase">{language === 'english' ? 'Resources' : 'ಸಂಪನ್ಮೂಲಗಳು'}</h2>
                            <ul className="text-orange-100 font-medium">
                                <li className="mb-4">
                                    <Link to="/" className="hover:underline">
                                        {language === 'english' ? 'Home' : 'ಮುಖಪುಟ'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/about" className="hover:underline">
                                        {language === 'english' ? 'About' : 'ಬಗ್ಗೆ'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-m font-semibold text-white uppercase">{language === 'english' ? 'Contact Developer' : 'ಡೆವಲಪರ್ ಸಂಪರ್ಕಿಸಿ'}</h2>
                            <ul className="text-orange-100 font-medium">
                                <li className="mb-4">
                                    <a
                                        href="mailto:your.shahanshahsidd208@gmail.com"
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                       {language === 'english' ? 'Gmail' : 'ಜಿಮೇಲ್'}
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href={`https://wa.me/${whatsappNumber}`}
                                        className="hover:underline"
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {language === 'english' ? 'WhatsApp' : 'ವಾಟ್‌ಸ್‌ಆಪ್'}
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="ml-6 mb-6 text-m font-semibold text-white uppercase">{language === 'english' ? 'Legal' : 'ಕಾನೂನಿಗಳು'}</h2>
                            <ul className="text-orange-100 font-medium">
                                <li className="mb-4">
                                    <Link to="/privacy" className="hover:underline">
                                        {language === 'english' ? 'Privacy Policy' : 'ಗೌಪ್ಯತೆ ನೀತಿ'}
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/terms" className="hover:underline">
                                        {language === 'english' ? 'Terms & Conditions' : 'ಶರತ್ತುಗಳು'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="text-sm text-gray-200 absolute right-10 mt-2 ">
                   <h3 className="ml-6 mb-6 text-m font-semibold text-white uppercase">{language === 'english' ? 'Visitor' : 'ಸಂದರ್ಶಕ'}: {visitorCount}</h3>  
                </div>
                <hr className="my-6 border-orange-100 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-200 sm:text-center">
                        © 2024
                        <a href="#" className="hover:underline">
                            Team Shadow.
                        </a>
                        {language === 'english' ? 'All Rights Reserved' : 'ಎಲ್ ರೈಟ್ಸ್ ರಿಸರ್ವ್ಡ್'}
                    </span>
                    <div className=" flex mt-4 space-x-5 sm:justify-center sm:mt-0 text-2xl">
                        {/* WhatsApp icon */}
                        <a
                            href={`https://wa.me/${whatsappNumber}`}
                            className="text-orange-100 hover:text-orange-200"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-whatsapp"></i>
                            <span className="sr-only">WhatsApp</span>
                        </a>
                        {/* Gmail icon */}
                        <a
                            href="mailto:your.shahanshahsidd208@gmail.com"
                            className="text-orange-100 hover:text-orange-200"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="far fa-envelope"></i>
                            <span className="sr-only">Gmail</span>
                        </a>
                        {/* Twitter icon */}
                        <a
                            href="https://twitter.com/shahanshahsidd"
                            className="text-orange-100 hover:text-orange-200"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fab fa-twitter"></i>
                            <span className="sr-only">Twitter</span>
                        </a>
                    </div>
                </div>
            </div>
            {/* <button className='text-red-950 z=0' onClick={toggleLanguage}></button> */}
        </footer>
    );
}
