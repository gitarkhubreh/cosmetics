"use client"; // Add this line at the top

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation"; // For Next.js 13+ (App Router)

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required!");
      return;
    }
    setError("");
    alert("Login Successful!");
    router.push("/dashboard");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div data-aos="fade-up" className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>
        {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}
        <form onSubmit={handleLogin} className="mt-6">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:ring-2 focus:ring-pink-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-pink-500 rounded-md hover:bg-pink-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
