// IndustriesSection.js
import React, { forwardRef, useRef } from 'react';

const Industries = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="bg-gray-200 py-16">
            <div className="container mx-auto text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Industries We Serve</h2>
                <p className="text-gray-700">Provide Best Fit Industry Product For Your Business.</p>
            </div>
            <div className="container mx-auto flex flex-col md:flex-row items-left">
                {/* <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 flex flex-col md:flex-row bg-slate-900"> */}

                <img
                    src="https://i.postimg.cc/ht2D0gJ3/gold-necklaces-earrings-table.jpg"
                    alt="Industry Image"
                    className="rounded-lg shadow-md ml-10 "
                />
                <div className='ml-12'>
                    <h1 className="font-bold text-4xl" >Gems & Jewellary</h1>

                    <p className="text-gray-700 my-2">
                        Transforming Gems & Jewelry Business with Innovative IT Solutions
                        In the dazzling world of Gems & Jewelry, precision, and elegance are paramount. At
                        AIMZ Tech, we offer tailored Information Technology (IT) solutions to empower your business, enhance efficiency, and ensure unparalleled craftsmanship.                    </p>
                </div>

            </div>
            {/* </div> */}


            <div className="container mx-auto flex flex-col md:flex-row items-left">
                {/* <div className="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4 flex flex-col md:flex-row bg-slate-900"> */}

                <img
                    src="https://i.postimg.cc/LsVzDJkF/transparent-perfume-bottle-roses-flowers-fragrances.jpg"
                    alt="Industry Image"
                    className="rounded-lg shadow-md ml-10 mt-10"
                />
                <div className='ml-12 mt-10'>
                    <h1 className="font-bold text-4xl" >Perfumery</h1>

                    <p className="text-gray-700 my-2">
                        Perfumery Industry Solutions with Cutting-Edge Technology
                        In the dynamic world of perfumery, where fragrance innovation is at the heart of success, harnessing the power of Information Technology (IT) can elevate your business to new heights. At AIMZ Tech, we offer tailored IT solutions designed specifically for the unique challenges and opportunities within the perfumery industry.
                    </p>
                </div>

            </div>

        </section >
    );
})

export default Industries;
