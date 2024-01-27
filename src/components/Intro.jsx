// src/components/Hero.tsx
import React from 'react';

const Intro = () => {
    return (
        <section className="relative flex items-center">
            {/* Full-width Responsive Image */}
            <img
                className="w-full"
                src={"https://i.postimg.cc/G2zbBFBQ/bg2.jpg"}
                alt="Hero Image"
                // style={{ width: "100%", maxHeight: '700px', height: 'auto' }}
                style={{ width: "100%", height: '700px' }}
            />

            {/* Content Overlay */}
            <div className="absolute text-white pl-4 md:mx-20 lg:mx-28">
                <h1 className="text-sm md:text-6xl font-bold mx-2 md:mx-14 lg:mx-20">Empowering Your Digital Future</h1>
                <h5 className="text-sm md:text-3xl  my-8 mx-2 md:mx-12 lg:mx-28">
                    Building innovative solutions in Software Development and Ensuring Cybersecurity Excellence
                </h5>
                <button className="bg-blue-500 text-white px-10 py-4  hover:bg-blue-700 rounded-full mx-2 md:mx-12 lg:mx-28">
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default Intro;
