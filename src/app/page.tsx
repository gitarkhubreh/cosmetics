


"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/1.jpg", "/2.avif", "/3.avif"];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]); // ✅ Added images.length to dependencies
  return (
    <main
    className="flex items-center justify-center min-h-screen bg-cover bg-center transition-all duration-1000"
    style={{ backgroundImage: `url(${images[currentImage]})` }}
    id="home"
  >
    <div className="bg-black bg-opacity-50 p-6 rounded text-white text-center">
      <h1 className="text-4xl font-bold">Welcome to AK.Cosmetic Online Store</h1>
      <p className="text-lg mt-2">Discover beauty with every moment.</p>
    </div>
  </main>
  );
}
