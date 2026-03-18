import React from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa'; // Install: npm install react-icons

const Hero = () => {
    return (
        <section className="relative bg-base-100 pt-0 pb-0 overflow-hidden">
            <div className="container mx-auto px-4 text-center">
                {/* Header Text */}
                <div className="max-w-5xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-extrabold text-[#1E293B] leading-tight">
                        We Build <br />
                        <span className="text-[#7C3AED]">Productive</span> Apps
                    </h1>
                    <p className="mt-6 text-gray-500 text-lg md:text-xl leading-relaxed max-w-full mx-auto">
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
                        Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>

                {/* App Store Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mt-10">
                    <button className="btn btn-outline border-gray-300 bg-white hover:bg-gray-50 text-black px-6 flex items-center gap-3 lowercase first-letter:uppercase">
                        <FaGooglePlay className="text-xl text-[#3DDC84]" />
                        <div className="text-left">
                            <span className="block font-bold text-sm">Google Play</span>
                        </div>
                    </button>
                    <button className="btn btn-outline border-gray-300 bg-white hover:bg-gray-50 text-black px-8 flex items-center gap-3 lowercase first-letter:uppercase">
                        <FaApple className="text-2xl text-black" />
                        <div className="text-left">
                            <span className="block font-bold text-sm">App Store</span>
                        </div>
                    </button>
                </div>

                {/* Phone Image & Floating Icons Container */}
                <div className="relative mt-16 max-w-200 mx-auto">
                    {/* The Phone Image */}
                    <img
                        src="/assets/hero.png"
                        alt="Hero App Mobile"
                        className="relative z-10 mx-auto w-full max-w-100]"
                    />


                </div>
            </div>
        </section>
    );
};

export default Hero;