import React, { useState } from 'react';

const Header = ({ scrollToRef, introRef, missionsRef, servicesRef, industriesRef, technologiesRef, aboutUsRef, contactUsRef }) => {
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <header className="bg-white p-2 fixed w-full z-10">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
                <div className="flex items-center mb-2 md:mb-0">
                    <img
                        className="h-24 md:h-24 w-auto md:w-auto"
                        src="https://i.postimg.cc/vZJ6cFwG/logo-removebg.png"
                        alt="Logo"
                    />
                </div>

                {/* Menu Button for smaller screens */}
                <button
                    className="md:hidden bg-white text-black px-4 py-2 rounded"
                    onClick={toggleMenu}
                >
                    {showMenu ? 'Hide Menu' : 'Show Menu'}
                </button>

                <div className={`flex flex-col md:flex-row mx-12 w-full ${showMenu ? 'block' : 'hidden'}`}>
                    <button onClick={() => scrollToRef(introRef)} className="text-black px-4 py-2 text-sm md:text-xl">Home</button>
                    <button onClick={() => scrollToRef(missionsRef)} className="text-black px-4 py-2 text-sm md:text-xl">Mission</button>
                    <button onClick={() => scrollToRef(servicesRef)} className="text-black px-4 py-2 text-sm md:text-xl">Services</button>
                    <button onClick={() => scrollToRef(industriesRef)} className="text-black px-4 py-2 text-sm md:text-xl">Industries</button>
                    <button onClick={() => scrollToRef(technologiesRef)} className="text-black px-4 py-2 text-sm md:text-xl">Technologies</button>
                    <button onClick={() => scrollToRef(aboutUsRef)} className="text-black px-4 py-2 text-sm md:text-xl">About Us</button>
                    <button onClick={() => scrollToRef(contactUsRef)} className="text-black px-4 py-2 text-sm md:text-xl">Schedule Call</button>
                    <button onClick={() => scrollToRef(contactUsRef)} className={`md:ml-auto justify-center  bg-blue-500 rounded-3xl text-white px-4 py-2 hover:border-black hover:scale-110 border transition-all ${showMenu ? 'mt-2' : ''}`}>
                        Inquire Now
                    </button>
                </div>


            </div>
        </header>
    );
};

export default Header;
