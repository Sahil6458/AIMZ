import React from 'react';

const AboutUsSection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.postimg.cc/13CLQvw7/about1.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center p-4 md:p-8">
                    <h2 className="text-4xl font-bold mb-4 ">About Us</h2>
                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                        <p className="text-white">
                            At AIMZ InfoTech, our mission is to empower individuals and businesses through innovative solutions. We strive to create technology that enhances lives and drives positive change in the world.
                        </p>
                    </div>

                    <div className="mb-4">
                        <h3 className="text-2xl font-semibold mb-2">Our Values</h3>
                        <ul className="list-disc list-inside text-white">
                            <li>Integrity: Upholding the highest ethical standards in everything we do.</li>
                            <li>Innovation: Fostering a culture of creativity and continuous improvement.</li>
                            <li>Customer-Centric: Placing our customers at the center of all our endeavors.</li>
                            <li>Collaboration: Working together to achieve shared goals and success.</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
                        <p className="text-white">
                            AIMZ Infotech stands out for its commitment to excellence, customer satisfaction, and cutting-edge solutions. Our team of experts is dedicated to delivering results that exceed expectations.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
