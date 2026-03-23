import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Navigate, useNavigate } from 'react-router';

const NoRoute = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen bg-slate-50">
            <Navbar />

            {/* Main Content Area */}
            <main className="grow flex items-center justify-center py-20 px-4">
                <div className="text-center max-w-2xl">
                    {/* 404 Image with a soft shadow and float animation */}
                    <div className="mb-10 flex justify-center">
                        <img
                            className="w-full max-w-md drop-shadow-2xl animate-pulse"
                            src="/assets/error-404.png"
                            alt="404 Page Not Found"
                            onError={(e) => { e.target.src = "https://cdn-icons-png.flaticon.com/512/2748/2748558.png" }}
                        />
                    </div>

                    <h1 className="text-5xl font-black text-[#1E293B] mb-4">
                        Lost in Space?
                    </h1>
                    <p className="text-gray-500 text-lg mb-8 max-w-md mx-auto">
                        Oops! The page you are looking for doesn't exist or has been moved to another galaxy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button
                            onClick={() => navigate('/')}
                            className="btn btn-lg bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-10 rounded-2xl shadow-lg shadow-purple-100"
                        >
                            Return Home
                        </button>

                        <button
                            onClick={() => Navigate(-1)}
                            className="btn btn-lg btn-outline border-2 border-gray-300 hover:bg-gray-100 hover:text-gray-900 rounded-2xl px-10"
                        >
                            Go Back
                        </button>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default NoRoute;