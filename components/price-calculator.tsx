"use client";

import React, { useState, useRef } from "react";
import { Sun, Home, Zap, Plus, Minus, ArrowRight } from "lucide-react";

interface CalculatorState {
  areaSquareFeet: number;
  pricePerSquareFoot: number;
}

export default function PriceCalculator() {
  const [state, setState] = useState<CalculatorState>({
    areaSquareFeet: 500,
    pricePerSquareFoot: 290, // Average price per square foot in INR
  });

  const dragRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);

  // Calculate total price
  const totalPrice = state.areaSquareFeet * state.pricePerSquareFoot;

  // Handle drag to adjust area
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaY = e.clientY - dragStart;
    const newArea = Math.max(100, state.areaSquareFeet + deltaY);

    setState((prev) => ({
      ...prev,
      areaSquareFeet: newArea,
    }));

    setDragStart(e.clientY);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Handle manual input
  const handleAreaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setState((prev) => ({
      ...prev,
      areaSquareFeet: Math.max(100, value),
    }));
  };

  const handlePricePerSqFtChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value) || 0;
    setState((prev) => ({
      ...prev,
      pricePerSquareFoot: Math.max(0, value),
    }));
  };

  // Handle increment/decrement
  const handleIncrement = (field: "area" | "price", amount: number) => {
    setState((prev) => ({
      ...prev,
      [field === "area" ? "areaSquareFeet" : "pricePerSquareFoot"]: Math.max(
        field === "area" ? 100 : 0,
        (field === "area" ? prev.areaSquareFeet : prev.pricePerSquareFoot) +
          amount
      ),
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header Section */}
      <div className="container mx-auto px-6 lg:px-8 py-20 sm:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Installation Price Calculator
          </h1>
          <p className="mt-6 text-lg text-slate-600">
            Drag to adjust the installation area and see the estimated price update in real-time. Get an instant quote for your solar system.
          </p>
        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-5">
          {/* Left Column - Drag Component */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              {/* Drag Area Indicator */}
              <div
                ref={dragRef}
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseUp}
                className={`relative min-h-72 cursor-grab rounded-t-xl bg-gradient-to-b from-indigo-500 to-indigo-600 p-8 text-center transition-all ${
                  isDragging ? "cursor-grabbing ring-2 ring-indigo-400" : ""
                }`}
              >
                {/* Main Content */}
                <div className="flex flex-col items-center justify-center h-full">
                  <div className="mb-6 text-white">
                    <Home className="mx-auto h-16 w-16 opacity-90" />
                  </div>

                  <div className="mb-6 text-center">
                    <p className="text-sm font-medium uppercase tracking-wider text-indigo-100 mb-2">
                      Installation Area
                    </p>
                    <div className="text-6xl font-bold text-white">
                      {Math.round(state.areaSquareFeet)}
                      <span className="text-2xl"> sq ft</span>
                    </div>
                  </div>

                  <p className="text-sm text-indigo-100">
                    ↑ Drag up to increase  |  ↓ Drag down to decrease
                  </p>
                </div>
              </div>

              {/* Manual Input Section */}
              <div className="space-y-6 p-8 border-t border-slate-200">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Area (Square Feet)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleIncrement("area", -100)}
                      className="rounded-lg border border-slate-200 bg-white p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Minus className="h-4 w-4 text-slate-600" />
                    </button>
                    <input
                      type="number"
                      value={Math.round(state.areaSquareFeet)}
                      onChange={handleAreaChange}
                      className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-center font-semibold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <button
                      onClick={() => handleIncrement("area", 100)}
                      className="rounded-lg border border-slate-200 bg-white p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Plus className="h-4 w-4 text-slate-600" />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-3">
                    Price per Square Foot (₹)
                  </label>
                  <div className="flex items-center gap-3">
                    <button
                      onClick={() => handleIncrement("price", -10)}
                      className="rounded-lg border border-slate-200 bg-white p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Minus className="h-4 w-4 text-slate-600" />
                    </button>
                    <input
                      type="number"
                      value={state.pricePerSquareFoot.toFixed(0)}
                      onChange={handlePricePerSqFtChange}
                      step="1"
                      className="flex-1 rounded-lg border border-slate-200 px-4 py-3 text-center font-semibold text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all"
                    />
                    <button
                      onClick={() => handleIncrement("price", 10)}
                      className="rounded-lg border border-slate-200 bg-white p-3 hover:bg-slate-50 transition-colors"
                    >
                      <Plus className="h-4 w-4 text-slate-600" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Price Breakdown */}
          <div className="lg:col-span-2 space-y-6">
            {/* Main Price Card */}
            <div className="bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-xl p-8 shadow-lg text-white">
              <p className="text-sm font-medium uppercase tracking-wider text-indigo-100">
                Total Price
              </p>
              <h2 className="mt-4 text-5xl font-bold">
                ₹{totalPrice.toLocaleString("en-IN", {
                  minimumFractionDigits: 0,
                  maximumFractionDigits: 0,
                })}
              </h2>
              <p className="mt-4 text-indigo-100 text-sm">
                For {Math.round(state.areaSquareFeet)} sq ft installation
              </p>
            </div>

            {/* Breakdown Cards */}
            <div className="grid grid-cols-1 gap-4">
              {/* Area Card */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Area</p>
                <p className="text-3xl font-bold text-slate-900">
                  {Math.round(state.areaSquareFeet)}
                  <span className="text-sm font-normal text-slate-500 ml-1">sq ft</span>
                </p>
              </div>

              {/* Price per SqFt Card */}
              <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Per Sq Ft</p>
                <p className="text-3xl font-bold text-slate-900">
                  ₹{state.pricePerSquareFoot.toFixed(0)}
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <button className="w-full rounded-lg bg-indigo-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 flex items-center justify-center gap-2">
              Get Free Quote
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
