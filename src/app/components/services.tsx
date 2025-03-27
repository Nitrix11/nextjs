'use client'; // Ensure this is at the top of your file

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination } from 'swiper/modules';
import service from './image/service.jpg';
import service2 from './image/service2.jpg';
import service3 from './image/service3.jpg';
import Image from 'next/image'; // Import Next.js Image component
import hero2 from"./image/hero2.jpg"

const servicesData = [
    {
        title: 'General Construction',
        description: 'Comprehensive construction services from foundation to finish.',
        imageUrl: service,
        additionalInfo: '✔ Residential and commercial projects\n✔ Quality materials\n✔ Experienced contractors',
    },
    {
        title: 'Property Maintenance',
        description: 'Regular maintenance services to keep your property in top condition.',
        imageUrl: service2,
        additionalInfo: '✔ Routine check-ups\n✔ Emergency repairs\n✔ Customized maintenance plans',
    },
    {
        title: 'Project Management',
        description: 'Expert project management to ensure timely and efficient completion.',
        imageUrl: service3,
        additionalInfo: '✔ Budget management\n✔ Schedule oversight\n✔ Risk assessment',
    },
    {
        title: 'Virtual Design & Build',
        description: 'Innovative design solutions using advanced technology.',
        imageUrl: service,
        additionalInfo: '✔ 3D modeling\n✔ Collaborative design\n✔ Efficient workflow',
    },
    {
        title: 'Reconstruction',
        description: 'Expert reconstruction services for damaged properties.',
        imageUrl: service,
        additionalInfo: '✔ Structural repairs\n✔ Modern upgrades\n✔ Compliance with regulations',
    },
];

const Services: React.FC = () => {
    return (
        <section className="py-16 bg-white pb-16"> {/* Background set to white */}
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-4xl font-bold text-black text-center mb-10">Our Services</h2> {/* Text set to black */}

                {/* Swiper Carousel */}
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={30}
                    navigation
                    pagination={{ clickable: true }}
                    className="mySwiper"
                >
                    {servicesData.map((service, index) => (
                        <SwiperSlide key={index}>
                            <div className="bg-white border border-gray-300 rounded-lg shadow-lg p-6 flex flex-col items-center text-center relative transition-transform transform hover:scale-105"> {/* Added border and shadow */}
                                <div className="w-full h-40 relative">
                                    <Image
                                        src={service.imageUrl}
                                        alt={service.title}
                                        layout="fill"
                                        objectFit="contain"
                                        className="rounded-t-lg mb-4"
                                    />
                                </div>
                                <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold py-1 px-2 rounded">
                                    Featured
                                </div>
                                <h3 className="text-2xl font-semibold mb-2 mt-12">{service.title}</h3>
                                <p className="text-gray-700 mb-2">{service.description}</p>
                                <p className="text-gray-500 text-sm">{service.additionalInfo}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Spacer */}
            <div className="my-10" /> {/* Add margin for spacing */}

            {/* Why Choose Us Section */}
            <div className="py-16 bg-black text-white">
                <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center">
                    <div className="w-full md:w-1/2 mb-6 md:mb-0 text-center">
                        <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
                        <p className="text-gray-300 mb-4">
                            We provide top-notch services that ensure your satisfaction. Our experienced team is dedicated to delivering quality results tailored to your needs.
                        </p>
                        <p className="text-gray-300 mb-4">
                            Our commitment to excellence and client satisfaction has made us a leader in the industry. We focus on innovative solutions and effective project management to achieve your vision.
                        </p>
                        <ul className="list-disc list-inside text-left mx-auto">
                            <li>Expert Team with Industry Experience</li>
                            <li>Quality Assurance and Continuous Improvement</li>
                            <li>Customer-Centric Approach with Open Communication</li>
                            <li>Timely Delivery of Projects with No Compromises</li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2 text-center">
                        <Image
                            src={hero2}
                            alt="Why Choose Us"
                            width={500}
                            height={300}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;