import React, { forwardRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = forwardRef(({ scrollToRef, introRef, missionsRef, servicesRef, industriesRef, technologiesRef, aboutUsRef, contactUsRef }) => {
    return (
        <section className="bg-black text-white py-16 mt-0.5">
            <div className="container mx-auto">

                <div className="flex flex-wrap justify-around">
                    <div className="flex items-center flex-col mb-2 md:mb-0">
                        <img
                            className="h-24 md:h-24 w-auto md:w-auto "
                            src="https://i.imgur.com/6Q5VNmv.png"
                            alt="Logo"

                        />
                        <p>Empowering Tomorrow, Today. </p>
                        <ul className="flex mt-4">
                            {/* Add social media icons */}
                            <li className="mr-4">
                                <a onClick={() => scrollToRef()} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                                </a>
                            </li>
                            <li className="mr-4">
                                <a onClick={() => scrollToRef()} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                                </a>
                            </li>
                            <li>
                                <a onClick={() => scrollToRef()} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Menu Links</h4>
                        <ul >
                            <li><a >Home</a></li>
                            <li><a onClick={() => scrollToRef(missionsRef)}>Our Mission</a></li>
                            <li><a onClick={() => scrollToRef(servicesRef)}>Our Services</a></li>
                            <li><a onClick={() => scrollToRef(industriesRef)}>Industries</a></li>
                            <li><a onClick={() => scrollToRef(technologiesRef)}>Technologies</a></li>
                        </ul>
                    </div> */}

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Our Services</h4>
                        <ul >
                            <li><a onClick={() => scrollToRef(contactUsRef)}>Cybersecurity</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>Web Design</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>Web Development</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>App Development</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>AI/ML</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>AR/VR</a></li>
                        </ul>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Information</h4>
                        <ul >
                            <li><a onClick={() => scrollToRef(aboutUsRef)}>About Us</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)}>Schedule Call</a></li>
                            <li><a onClick={() => scrollToRef()}>Privacy Policy</a></li>
                            <li><a onClick={() => scrollToRef()}>Terms & Conditions</a></li>
                        </ul>
                    </div>


                    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/4 mb-8">
                        <h4 className="text-lg font-bold mb-4" >Industries</h4>
                        <ul >
                            <li><a onClick={() => scrollToRef(contactUsRef)}>Gems & Jewellary</a></li>
                            <li><a onClick={() => scrollToRef(contactUsRef)} >Perfumary</a></li>

                        </ul>
                    </div>


                    <div className="w-full">
                        {/* Copyright notice */}
                        <p className="text-center text-sm">&copy; 2024 AIMZ Tech. All rights reserved.</p>
                    </div>


                </div>
            </div >
        </section >
    );
})

export default Footer;
