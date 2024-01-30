// Technologies.js
import React, { forwardRef, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const servicesData = [
    { title: 'AR/VR', description: "Embark on a transformative journey with AIMZ's cutting-edge Augmented Reality (AR) and Virtual Reality (VR) solutions. We bring innovation to life, offering immersive experiences that redefine how users interact with digital content.", image: "https://i.postimg.cc/DfCDjgKx/arvr.png" },
    { title: 'AI/ML', description: "Empower your business with the limitless possibilities of Artificial Intelligence (AI) and Machine Learning (ML) through AIMZ's advanced solutions. Harness the power of data-driven insights and automation to elevate your operations.", image: "https://i.postimg.cc/mDbGG9pt/aiml.png" },
    { title: 'Security & Privacy', description: 'we prioritize the security and privacy of your digital assets. Our comprehensive Security and Privacy services are crafted to safeguard your sensitive information and ensure the confidentiality of your digital operations.', image: "https://i.postimg.cc/tTWb1qVT/webdevelopement.png" },


];
const Technologies = forwardRef((props, ref) => {


    return (
        <section ref={ref} className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-8 text-center">Technologies We Are Interested</h2>
                <h1 className="text-xl  mb-8 text-center">We Propose Artificial Intelligence, Machine Learning To Leverage Your Business Growth. We Aim To Keep Your Company Updated With Futuristic Technologies</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8" >
                    {servicesData.map((service, index) => (
                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                            <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                                <div className="flex items-center">
                                    <img
                                        className="h-24 md:h-24 w-auto md:w-auto cursor-pointer"
                                        src={service.image}
                                        alt="Logo"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center" data-aos="zoom-in" >{service.title}</h3>
                                <p className="text-gray-700 text-center" data-aos="zoom-in">{service.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
})

export default Technologies;
