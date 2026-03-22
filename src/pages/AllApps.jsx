import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AllApps = () => {

    // Load apps data using useLoaderData
    const allApps = useLoaderData();


    //console.log("Loaded apps data in AllApps:", allApps); // Debugging log to check loaded data


    // State for search query
    const [searchQuery, setSearchQuery] = useState("");

    // Filter apps based on search query (case-insensitive)
    const filteredApps = allApps.filter((app) =>
        app.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.companyName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const TotalApps = filteredApps.length;


    return (
        <div className='container mx-auto px-4 py-10'>
            <Navbar />
            <h1 className='text-4xl font-bold text-[#1E293B]'>Our All Applications</h1>
            <p className='text-gray-500 mt-2'>Explore All Apps on the Market developed by us. We code for Millions</p>
            <div className="flex justify-between gap-6 mt-4 mb-8">

                <div>
                    <p className="text-gray-500 font-medium">
                        Showing: {TotalApps} {TotalApps === 1 ? 'App' : 'Apps'}
                    </p>
                </div>


                <div className='flex gap-2 w-full md:w-auto'>
                    <div className="relative w-full">
                        <input
                            type="text"
                            placeholder="Search apps..."
                            className="input input-bordered w-full focus:outline-[#7C3AED]"
                            // Connect input to state
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    {/* The button is optional since the search happens as we type! */}
                    <button className="btn bg-[#7C3AED] hover:bg-[#6D28D9] text-white border-none px-6">
                        Search
                    </button>
                </div>

            </div>


            {/* Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
                {filteredApps.length > 0 ? (
                    filteredApps.map((app) => (
                        <AppCard key={app.id} app={app} />
                    ))
                ) : (
                    <div className="col-span-full py-20 text-center">
                        <p className="text-2xl text-gray-400 font-semibold">No apps found matching "{searchQuery}"</p>

                        {/* Clear search button */}
                        <button
                            onClick={() => setSearchQuery("")}
                            className="btn btn-link text-[#7C3AED] mt-2"
                        >
                            Clear search

                        </button>
                    </div>


                )}
            </div>
            <Footer />

        </div>
    );
};

export default AllApps;