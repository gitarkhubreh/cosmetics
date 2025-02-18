"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Orders() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Orders</h2>
      <div data-aos="fade-up" className="w-full max-w-4xl p-6 bg-white shadow-lg rounded-lg text-center">
        <p className="text-lg font-semibold">No orders yet</p>
        <p className="text-gray-600">Go to store to place an order.</p>
      </div>
    </div>
  );
}
