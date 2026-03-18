import React from 'react';
import { useLoaderData } from 'react-router';
import AppCard from '../components/AppCard';

const AllApps = () => {

    const apps = useLoaderData();

    console.log("Loaded apps data in AllApps:", apps); // Debugging log to check loaded data
    return (
        <div>
            {/* Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {apps.map((app) => (
                    <AppCard key={app.id} app={app} />

                ))}
            </div>

        </div>
    );
};

export default AllApps;