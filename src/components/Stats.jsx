import React from 'react';

const Stats = () => {
    return (
        <section className="w-full bg-gradient-to-r from-[#7C3AED] to-[#A855F7] py-20 px-4 mt-20 mb-20 text-white">
            <div className="container mx-auto text-center">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold mb-16">
                    Trusted By Millions, Built For You
                </h2>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">

                    {/* Stat 1: Downloads */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Total Downloads
                        </span>
                        <span className="text-5xl md:text-6xl font-extrabold mb-2">
                            29.6M
                        </span>
                        <span className="text-xs opacity-70">
                            21% More Than Last Month
                        </span>
                    </div>

                    {/* Stat 2: Reviews */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Total Reviews
                        </span>
                        <span className="text-5xl md:text-6xl font-extrabold mb-2">
                            906K
                        </span>
                        <span className="text-xs opacity-70">
                            46% More Than Last Month
                        </span>
                    </div>

                    {/* Stat 3: Active Apps */}
                    <div className="flex flex-col items-center">
                        <span className="text-sm font-medium opacity-80 mb-2 uppercase tracking-wide">
                            Active Apps
                        </span>
                        <span className="text-5xl md:text-6xl font-extrabold mb-2">
                            132+
                        </span>
                        <span className="text-xs opacity-70">
                            31 More Will Launch
                        </span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Stats;