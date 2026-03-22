import React from 'react';
import { useLoaderData } from 'react-router';
import { FaArrowCircleDown, FaStar, FaThList, FaDownload } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import RatingCrart from '../components/RatingCrart';

const AppDetails = () => {
    const app = useLoaderData();

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Navbar stays outside the main container for full-width layout */}
            <Navbar />

            <main className="container mx-auto py-10 px-4 md:px-20 max-w-6xl">
                {/* Main Header Card */}
                <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-base-200 flex flex-col md:flex-row items-center gap-12">

                    {/* App Icon */}
                    <figure className="flex-none p-2 border border-gray-100 rounded-[40px] shadow-sm">
                        <img
                            src={app.image || "/assets/placeholder-app.png"}
                            alt={app.title}
                            className="w-48 h-48 object-cover rounded-[38px]"
                            onError={(e) => { e.target.src = "https://via.placeholder.com/150?text=App" }}
                        />
                    </figure>

                    {/* Text & Metrics */}
                    <div className="flex-1 w-full text-center md:text-left">
                        <h1 className="text-4xl font-extrabold text-[#1E293B] mb-2">{app.title}</h1>
                        <p className="text-gray-500 text-lg mb-8">
                            Developed by <span className="text-[#7C3AED] font-semibold">{app.companyName}</span>
                        </p>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 border-t border-gray-100 pt-8">
                            {/* Metrics Grid */}
                            <div className="flex justify-between md:gap-16 flex-1 max-w-md">
                                <div className="text-center md:text-left">
                                    <FaArrowCircleDown className="text-3xl text-green-500 mb-2 mx-auto md:mx-0" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Downloads</p>
                                    <p className="text-2xl font-black text-[#1E293B]">{(app.downloads / 1000000).toFixed(0)}M</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <FaStar className="text-3xl text-orange-500 mb-2 mx-auto md:mx-0" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Average Ratings</p>
                                    <p className="text-2xl font-black text-[#1E293B]">{app.ratingAvg}</p>
                                </div>
                                <div className="text-center md:text-left">
                                    <FaThList className="text-3xl text-[#7C3AED] mb-2 mx-auto md:mx-0" />
                                    <p className="text-xs text-gray-400 uppercase font-bold">Total Reviews</p>
                                    <p className="text-2xl font-black text-[#1E293B]">{(app.reviews / 1000).toFixed(0)}K</p>
                                </div>
                            </div>

                            {/* Green Install Button */}
                            <button className="btn btn-lg bg-[#00D094] hover:bg-[#00B883] text-white border-none rounded-xl px-10 text-lg shadow-lg shadow-green-100">
                                <FaDownload className="mr-2" />
                                Install Now ({app.size} MB)
                            </button>
                        </div>
                    </div>
                </div>

                {/* Rating Chart Section */}
                <RatingCrart ratingsData={app.ratings} />

                {/* Description Section */}
                <div className="mt-8 bg-white p-10 rounded-3xl shadow-sm border border-base-200">
                    <h2 className="text-2xl font-bold text-[#1E293B] mb-6">Description</h2>
                    <div className="space-y-6 text-gray-500 leading-relaxed text-lg">
                        {app.description}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default AppDetails;