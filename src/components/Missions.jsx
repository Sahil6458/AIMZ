import React, { forwardRef } from 'react';

const Missions = forwardRef((props, ref) => {

    return (
        <section ref={ref} className="flex items-center justify-center py-12 bg-gray-100">
            <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
                {/* Text on the left side */}
                <div className="lg:w-1/2 lg:pr-10 ml-4">
                    <h2 className="text-4xl font-black mb-4">Transforming Ideas into Digital Reality</h2>
                    <p className="text-gray-700 leading-loose">

                        Welcome to AIMZ Tech, where we specialize in transforming innovative ideas into powerful digital solutions. Our dedicated team of experts is committed to delivering cutting-edge technology services tailored to meet your business goals and drive success.

                        Get in Touch
                    </p>
                    <a href="#" className="text-blue-500 mt-4 hover:underline">Learn More</a>
                </div>

                {/* Image on the right side */}
                <div className="lg:w-1/2 lg:pl-10 mt-6 lg:mt-0">
                    <img
                        src="https://i.postimg.cc/kgvfb8Wd/i1.webp"
                        alt="Sample Image"
                        className="w-full h-auto rounded-lg shadow-md"
                    />
                </div>
            </div>
        </section>

    )
})

export default Missions