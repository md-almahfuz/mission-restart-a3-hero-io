import React from 'react';
import { Link } from 'react-router';

const AppCard = ({ app }) => {
    return (
        <div
            key={app.id}
            className="card bg-white shadow-sm border border-base-200 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
        >
            <Link to={`/apps/${app.id}`} className="block">
                {/* Placeholder/App Image */}
                <figure className="bg-gray-200 aspect-square m-4 rounded-lg">
                    <img
                        src={app.image}
                        alt={app.title}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div className="p-4 pt-0 text-left">
                    <h3 className="font-bold text-[#1E293B] text-lg mb-4 truncate">
                        {app.title}
                    </h3>

                    {/* App Meta: Downloads & Rating */}
                    <div className="flex justify-between items-center">
                        <div className="bg-green-50 text-green-600 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                            {(app.downloads / 1000000).toFixed(0)}
                        </div>

                        <div className="bg-orange-50 text-orange-500 text-xs font-bold px-2 py-1 rounded flex items-center gap-1">
                            <span className="text-sm">★</span> {app.ratingAvg}
                        </div>
                    </div>
                </div>
            </Link>
        </div >
    );
};

export default AppCard;

