
const AboutUsSection = () => {
    return (
        <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: "url('https://i.postimg.cc/W1ZFdD4P/man-with-vr-glasses-experiencing-metaverse.jpg')" }}>
            <div className="absolute inset-0 bg-black opacity-40"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                    <h2 className="text-7xl font-bold mb-4">Who we are ?</h2>
                    <p className="text-lg mb-8">
                        At AIMZ Tech, we proudly stand as a distinguished leader in the cybersecurity landscape. As an internationally recognized award winner, our commitment to securing digital landscapes has garnered global acclaim.
                    </p>
                    {/* <p className="text-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p> */}
                </div>
            </div>
        </section>
    );
};

export default AboutUsSection;
