import React, { useEffect, useState } from 'react';

const ContactUsSection = () => {

    const [minDateTime, setMinDateTime] = useState('');

    useEffect(() => {
        // Get the current date and time in the format required by datetime-local input
        const currentDateTime = new Date().toISOString().slice(0, 16);

        // Set the minimum date and time as the current date and time
        setMinDateTime(currentDateTime);
    }, []);
    return (
        <section className="bg-blue-500 py-16 text-white">
            <div className="container mx-auto">


                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div >
                        <div className='mx-10'>
                            <h2 className=" text-left">
                                <span className="text-6xl font-black  text-white block">Contact Us</span>
                                <span className="text-6xl font-sans  text-yellow-300 block ">For Project Discussion</span>
                                <p className="text-xl my-6">
                                    Once you fill out this form, our sales representatives will contact you within 24 hours.
                                </p>
                            </h2>
                        </div>



                        {/* <div>
                            <div className='m-10'>
                                <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
                                <p className="text-gray-200 ">
                                    Our experienced team is dedicated to providing personalized solutions that align with your business goals.
                                </p>
                            </div>

                        </div> */}
                        <div className='flex flex-col md:flex-row'>
                            <div className='m-10'>
                                <div className='flex flex-row'>
                                    <img src='https://i.postimg.cc/dQdZC3wJ/206606.png' style={{ height: 32, width: 32 }} />
                                    <h3 className="text-2xl font-semibold ml-2">India</h3>
                                </div>
                                <p className="text-gray-200 font-bold "> +91 99251 99198 </p>
                                <p className="text-gray-200 ">
                                    A-308 Classic Paradise, Royal Nawab Avenue, Maktampur, Ahmedabad 380055, Gujarat, INDIA
                                </p>
                                <div className='hidden md:block'>
                                    <hr className='my-2 border-gray-300' />
                                </div>
                                <div className='block md:hidden'>
                                    <hr className='my-2 border-gray-300' />
                                </div>
                                <p className="text-gray-200">
                                    1/A-3, Arjun Tower, Near Chiripal House, Shivranjani Cross Roads, Ahmedabad 380055, Gujarat, India
                                    techsupport@aimzinfotech.com
                                </p>
                            </div>

                            <div className='m-10'>
                                <div className='flex flex-row'>
                                    <img src='https://i.postimg.cc/4d5VkXZh/Screenshot-2024-01-21-142445-Photo-Room-png-Photo-Room.png' style={{ height: 25, width: 32, marginTop: 4 }} />
                                    <h3 className="text-2xl font-semibold ml-2">USA</h3>
                                </div>
                                <p className="text-gray-200">
                                    <b>+1 (214) 789-2273</b> <br />
                                    1227 Timber Lane, <br />
                                    Frisco, TX 75036 <br />
                                    usa@aimztech.com
                                </p>
                                <div className='flex flex-row  mt-4'>
                                    <img src='https://i.postimg.cc/cLnkV14J/istockphoto-1414559861-612x612.jpg' style={{ height: 20, width: 32, marginTop: 8 }} />
                                    <h3 className="text-2xl font-semibold ml-2">Canada</h3>
                                </div>
                                <p className="text-gray-200">
                                    <b>+1 (365) 383-2223</b> <br />
                                    202-215 Glenridge Avenue, St. Catharines, Ontario L2T3J7 <br />
                                    Canada <br />
                                    canada@aimztech.com
                                </p>
                            </div>
                        </div>


                    </div>

                    <div data-aos="fade-left">
                        <form className='bg-white rounded-xl p-8'>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Your Name</label>
                                    <input
                                        style={{ color: 'black' }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        className="w-full border rounded-md py-2 px-3"
                                        placeholder="John Doe"
                                        required
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Your Email</label>
                                    <input
                                        style={{ color: 'black' }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        className="w-full border rounded-md py-2 px-3"
                                        placeholder="john@example.com"
                                        required
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="mb-4">
                                    <label htmlFor="company" className="block text-gray-700 font-semibold mb-2">Company Name</label>
                                    <input
                                        style={{ color: 'black' }}
                                        type="text"
                                        id="company"
                                        name="company"
                                        className="w-full border rounded-md py-2 px-3"
                                        placeholder="Your Company Name"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="phone" className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                                    <input
                                        style={{ color: 'black' }}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        className="w-full border rounded-md py-2 px-3"
                                        placeholder="+1(123)-456-7890"
                                    />
                                </div>
                            </div>

                            <div className="mb-4">
                                <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
                                <input
                                    style={{ color: 'black' }}
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="w-full border rounded-md py-2 px-3"
                                    placeholder="Briefly describe the purpose of your inquiry"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Your Message</label>
                                <textarea
                                    style={{ color: 'black' }}
                                    id="message"
                                    name="message"
                                    rows="4"
                                    className="w-full border rounded-md py-2 px-3"
                                    placeholder="Type your message here..."
                                    required
                                ></textarea>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="datetime" className="block text-gray-700 font-semibold mb-2">Preferred Date and Time (GMT)</label>
                                <input
                                    style={{ color: 'black' }}
                                    type="datetime-local"
                                    id="datetime"
                                    name="datetime"
                                    className="w-full border rounded-md py-2 px-3"
                                    required
                                    min={minDateTime}
                                />
                            </div>

                            <div className="flex items-center">
                                <button

                                    type="submit"
                                    className="bg-white text-blue-500 px-4 py-2 rounded-md hover:bg-blue-200"
                                >
                                    Schedule a Call
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUsSection;
