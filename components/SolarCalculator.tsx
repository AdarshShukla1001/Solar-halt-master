"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function SolarCalculator() {
    const [pincode, setPincode] = useState('');
    const [monthlyBill, setMonthlyBill] = useState(2000);
    const [results, setResults] = useState({
        systemSize: 0,
        cost: 0,
        monthlySavings: 0,
        annualSavings: 0,
        roi: 0,
        area: 0,
    });

    useEffect(() => {
        calculateSolar();
    }, [monthlyBill]);

    const calculateSolar = () => {
        // Logic based on standard estimates
        // 1 kW system generates approx 120 units/month, saving approx ₹1000-1200
        // Let's assume avg cost per unit is ₹8.
        // Bill / 8 = Units consumed.
        // System size = Units / 120 (approx generation per kW)

        // Simplified logic as per plan:
        // System Size: Based on monthly bill (approx 1kW per ₹1200 bill)
        const systemSize = monthlyBill / 1200;

        // Cost: Approx ₹70,000 per kW
        const cost = systemSize * 70000;

        // Savings: Approx ₹1000 per kW/month (conservative estimate)
        const monthlySavings = systemSize * 1000;

        // Annual Savings
        const annualSavings = monthlySavings * 12;

        // ROI (Years)
        const roi = cost / annualSavings;

        // Area: 100 sq ft per kW
        const area = systemSize * 100;

        setResults({
            systemSize: parseFloat(systemSize.toFixed(2)),
            cost: Math.round(cost),
            monthlySavings: Math.round(monthlySavings),
            annualSavings: Math.round(annualSavings),
            roi: parseFloat(roi.toFixed(1)),
            area: Math.round(area),
        });
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMonthlyBill(Number(e.target.value));
    };

    return (
        <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-2xl shadow-xl border border-gray-100">
            <div className="grid md:grid-cols-2 gap-12">
                {/* Input Section */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Calculate Your Savings</h2>

                        <div className="mb-6">
                            <label htmlFor="pincode" className="block text-sm font-medium text-gray-600 mb-2">
                                Enter Pincode
                            </label>
                            <input
                                type="text"
                                id="pincode"
                                value={pincode}
                                onChange={(e) => setPincode(e.target.value)}
                                placeholder="e.g. 560001"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="bill" className="block text-sm font-medium text-gray-600 mb-4">
                                Average Monthly Electricity Bill: <span className="text-2xl font-bold text-gray-900 ml-2">₹{monthlyBill.toLocaleString()}</span>
                            </label>
                            <input
                                type="range"
                                id="bill"
                                min="500"
                                max="10000"
                                step="100"
                                value={monthlyBill}
                                onChange={handleSliderChange}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-yellow-500"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>₹500</span>
                                <span>₹10,000</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-100">
                        <h3 className="text-lg font-semibold text-blue-900 mb-2">Why Go Solar?</h3>
                        <ul className="space-y-2 text-sm text-blue-800">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Save up to 90% on electricity bills
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Protect against rising tariff rates
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 mr-2 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                Contribute to a greener planet
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Results Section */}
                <div className="bg-gray-900 text-white p-8 rounded-2xl relative overflow-hidden">
                    <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-yellow-500 rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"></div>

                    <h3 className="text-xl font-semibold mb-8 relative z-10">Your Solar Estimate</h3>

                    <div className="space-y-6 relative z-10">
                        <div className="flex justify-between items-end border-b border-gray-700 pb-4">
                            <span className="text-gray-400 text-sm">Recommended System Size</span>
                            <span className="text-3xl font-bold text-yellow-400">{results.systemSize} kW</span>
                        </div>

                        <div className="flex justify-between items-end border-b border-gray-700 pb-4">
                            <span className="text-gray-400 text-sm">Estimated Cost</span>
                            <span className="text-2xl font-bold">₹{results.cost.toLocaleString()}</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 pt-2">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="text-gray-400 text-xs mb-1">Monthly Savings</div>
                                <div className="text-xl font-bold text-green-400">₹{results.monthlySavings.toLocaleString()}</div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="text-gray-400 text-xs mb-1">Annual Savings</div>
                                <div className="text-xl font-bold text-green-400">₹{results.annualSavings.toLocaleString()}</div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="text-gray-400 text-xs mb-1">ROI Period</div>
                                <div className="text-lg font-semibold">{results.roi} Years</div>
                            </div>
                            <div className="bg-gray-800 p-4 rounded-lg">
                                <div className="text-gray-400 text-xs mb-1">Roof Area Needed</div>
                                <div className="text-lg font-semibold">{results.area} sq. ft.</div>
                            </div>
                        </div>
                    </div>

                    <Link href="/contact" className="block w-full mt-8 bg-yellow-500 hover:bg-yellow-400 text-gray-900 font-bold py-4 rounded-xl transition-colors relative z-10 text-center">
                        Get Detailed Quote
                    </Link>
                </div>
            </div>
        </div>
    );
}
