import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import InstalledAppCard from '../components/InstalledAppCard';
import Footer from '../components/Footer';

const InstalledApp = () => {

    const [installedApps, setInstalledApps] = useState([])

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



    return (
        <div className="bg-slate-50 min-h-screen">
            <Navbar />
            <div className="container mx-auto py-10 px-4 md:px-20 mb-5" >
                <h1 className='text-4xl font-extrabold text-[#1E293B]'>Your Installed Apps</h1>
                <p className="text-gray-500 mt-2 mb-10">Explore the apps you have added to your collection</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {installedApps.length > 0 ? (
                        installedApps.map(app => (
                            <InstalledAppCard key={app.id} app={app}
                                onUninstall={handleUninstall} />
                        ))
                    ) : (
                        <div className="col-span-full text-center py-20">
                            <p className="text-xl text-gray-400 font-semibold">No apps installed yet.</p>
                        </div>
                    )}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default InstalledApp;