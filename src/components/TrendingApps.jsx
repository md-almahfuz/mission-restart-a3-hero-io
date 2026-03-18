import React from 'react';
import AppCard from './AppCard';

const TrendingApps = ({ appsData }) => {
    // 1. Logic to get the 8 most popular apps
    // We sort by downloads (highest first) and take the first 8
    const popularApps = [...appsData]
        .sort((a, b) => b.downloads - a.downloads)
        .slice(0, 8);

    return (
        <section className="py-16 bg-slate-50">
            <div className="container mx-auto px-4 text-center">
                {/* Header Section */}
                <h2 className="text-4xl font-bold text-[#1E293B] mb-2">Trending Apps</h2>
                <p className="text-gray-500 mb-12">
                    Explore All Trending Apps on the Market developed by us
                </p>

                {/* Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {popularApps.map((app) => (
                        <AppCard key={app.id} app={app} />

                    ))}
                </div>

                {/* Show All Button */}
                <div className="mt-12">
                    <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-10">
                        Show All
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TrendingApps;