import React from 'react';
import { ComposedChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const RatingCrart = ({ ratingsData }) => {
    if (!ratingsData) return null;

    // Reverse so 5-star is at the top
    const chartData = [...ratingsData].reverse();

    return (
        <div className="bg-white p-10 rounded-3xl border border-base-200 mt-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-8 text-[#1E293B]">Ratings</h2>

            <div style={{ width: '100%', height: 250 }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        data={chartData}
                        margin={{ top: 0, right: 30, left: 0, bottom: 0 }}
                    >
                        <XAxis type="number" hide />

                        <YAxis
                            dataKey="name"
                            type="category"
                            tick={{ fontSize: 13, fontWeight: 500, fill: '#94a3b8' }}
                            axisLine={false}
                            tickLine={false}
                            width={70}
                        />

                        {/* Orange Bars using same color */}
                        <Bar
                            dataKey="count"
                            fill="#FF8C00"
                            radius={[0, 4, 4, 0]}
                            barSize={18}
                        />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

            <div className="border-b border-gray-100 mt-10"></div>
        </div>
    );
};

export default RatingCrart;