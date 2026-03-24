import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import InstalledAppCard from '../components/InstalledAppCard';
import Footer from '../components/Footer';

const InstalledApp = () => {

    //State to track installed app
    const [installedApps, setInstalledApps] = useState([])

    //State to track current sort selection (default: a-z)
    const [sortBy, setSortBy] = useState('a-z');


    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('installed-apps')) || [];

        setInstalledApps(data);



    }, []);

    const handleUninstall = (id) => {
        // Filter out the app with the matching ID
        const remainingApps = installedApps.filter(app => app.id !== id);

        // Update the State (UI updates immediately)
        setInstalledApps(remainingApps);

        // Update LocalStorage (Filing cabinet updates)
        localStorage.setItem('installed-apps', JSON.stringify(remainingApps));
    };

    //Sort installed app eather a-z, z-a or size

    const sortedApps = [...installedApps].sort((a, b) => {
        if (sortBy === 'a-z') {
            return a.title.localeCompare(b.title);

        } else if (sortBy === 'z-a') {
            return b.title.localeCompare(a.title);
        } else if (sortBy === 'size') {
            //largest size first
            return b.size - a.size;
        }
        return 0;

    });



    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto py-10 px-4 md:px-20 mb-5">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
                    <div>
                        <h1 className='text-4xl font-extrabold text-[#1E293B]'>Your Installed Apps</h1>
                        <p className="text-gray-500 mt-2">Explore the apps you have added to your collection</p>
                    </div>

                    {/* 3. Sorting Dropdown */}
                    <div className="flex items-center gap-3">
                        <span className="text-sm font-bold text-gray-400  tracking-wider">Sort By:</span>
                        <select
                            className="select select-bordered bg-white rounded-xl focus:outline-[#7C3AED] border-gray-200"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                        >
                            <option value="a-z">Name: A to Z</option>
                            <option value="z-a">Name: Z to A</option>
                            <option value="size">Size: Largest First</option>
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {sortedApps.length > 0 ? (
                        sortedApps.map(app => (
                            <InstalledAppCard
                                key={app.id}
                                app={app}
                                onUninstall={handleUninstall}
                            />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-xl text-gray-400 font-semibold">No apps installed yet.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default InstalledApp;