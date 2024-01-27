// ServicesSection.js
import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';


const servicesData = [
    { title: 'DataML and AI', description: 'Envisage the future by leveraging Data, Machine Learning & Artificial Intelligence for Your Business Growth.', image: "https://i.postimg.cc/mDbGG9pt/aiml.png" },
    { title: 'Business Improvement', description: 'We assist you to identify whether to Re-engineer, Automate or Transform the existing technology.', image: "https://i.postimg.cc/tJFgHdzB/business.png" },
    { title: 'Deep Learning', description: 'Leveraging innovation via Deep Learning Deep learning is considered a groundbreaking technology in many business areas.', image: "https://i.postimg.cc/brhVGfKH/deeplearning.png" },
    { title: 'Web Development', description: 'We don’t develop websites; we envisage your vision, design them with your perspective with constant innovation.', image: "https://i.postimg.cc/tTWb1qVT/webdevelopement.png" },
    // { title: 'Cybersecurity', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', image: "https://i.postimg.cc/xdLpMcgW/security.jpg" },
    { title: 'Mobile App Development', description: 'AIMZ Has A Confident Android And IOS Development Team To Leverage The Latest Trends On A Mobile Platform Including The Progressive Web Apps', image: "https://i.postimg.cc/XJVL5xrC/mobiledevelopement.png" },
    // { title: 'Cloud Services', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',image:"" },
    { title: 'Web Solution', description: "Web Solution is consisting of different jobs running for the same site with different technology and features.", image: "https://i.postimg.cc/mkncXTB7/websolution-rbg.png" }


];


const ServicesSection = () => {
    useEffect(() => {
        // Initialize AOS library
        AOS.init();
    }, []);

    return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold mb-4 text-center" data-aos="fade-up">Our Services</h2>
                <p className="text-gray-700 leading-loose mb-4 text-center" data-aos="fade-up" >Explore a range of comprehensive IT solutions designed to elevate your business. From custom software development to cybersecurity, we offer services that empower your organization and foster innovation.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center hover:bg-blue-200" data-aos="flip-up">
                            <div className="flex items-center">
                                <img
                                    className="h-24 md:h-24 w-auto md:w-auto"
                                    src={service.image}
                                    alt="Logo"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-center" data-aos="fade-up">{service.title}</h3>
                            <p className="text-gray-700 text-center" data-aos="fade-up">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;

