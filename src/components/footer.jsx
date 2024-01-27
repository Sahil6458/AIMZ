import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <section id="footer" className="bg-blue-500 text-white py-16 mt-0.5">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-around">
                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Menu Links</h4>
                        <ul >
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Our Mission</a></li>
                            <li><a href="#">Our Services</a></li>
                            <li><a href="#">Industries</a></li>
                            <li><a href="#">Technologies</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Our Services</h4>
                        <ul >
                            <li><a href="#">Web Design</a></li>
                            <li><a href="#">Web Development</a></li>
                            <li><a href="#">App Development</a></li>
                            <li><a href="#">AI/ML</a></li>
                            <li><a href="#">AR/VR</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Information</h4>
                        <ul >
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Schedule Call</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms & Conditions</a></li>
                        </ul>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Industries</h4>
                        <ul >
                            <li><a href="#aboutus">Gems & Jewellary</a></li>
                            <li><a href="#scheduleCall">Perfumary</a></li>

                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4">Connect With Us</h4>
                        <ul className="flex">
                            {/* Add social media icons */}
                            <li className="mr-4">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </li>
                            <li>
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="w-full">
                        {/* Copyright notice */}
                        <p className="text-center text-sm">&copy; 2024 AIMZ Tech. All rights reserved.</p>
                    </div>


                </div>
            </div>
        </section>
    );
};

export default Footer;
