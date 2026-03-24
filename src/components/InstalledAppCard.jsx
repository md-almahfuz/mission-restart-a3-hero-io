import React from 'react';

const InstalledAppCard = ({ app, onUninstall }) => {
    return (
        <div className="card bg-white shadow-sm border border-base-200 p-4 rounded-2xl">
            <div className="flex items-center gap-4">
                <img src={app.image} className="w-16 h-16 rounded-xl object-cover" alt={app.title} />
                <div>
                    <h3 className="font-bold text-lg">{app.title}</h3>
                    <p className="text-sm text-[#7C3AED]">{app.companyName}</p>
                    <p className="text-sm text-[#76ed3a]">Size: {app.size}MB</p>
                </div>
            </div>
            <div className="">

                <button
                    onClick={() => onUninstall(app.id)} // 👈 Call the parent function
                    className="btn btn-sm btn-ghost text-red-500 hover:bg-red-50 border-amber-900"
                >
                    Uninstall
                </button>
            </div>
        </div>
    );
};

export default InstalledAppCard;