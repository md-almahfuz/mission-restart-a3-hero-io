import React from 'react';

const Loading = () => {
    return (
        <div className="min-h-[80vh] flex flex-col justify-center items-center gap-4">
            {/* Using a single, large, branded spinner */}
            <span className="loading loading-dots w-24 bg-[#7C3AED]"></span>

            {/* Optional: Add a nice text underneath to match the design */}
            <p className="text-gray-400 font-medium tracking-wide animate-pulse">
                Fetching the best apps for you...
            </p>
        </div>
    );
};

export default Loading;