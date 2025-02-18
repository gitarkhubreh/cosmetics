"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>About Us | AK.Cosmetics</title>
        <meta name="description" content="Learn more about AK.Cosmetics, a skincare brand driven by expert doctors and pharmacists, offering high-quality, cruelty-free, and paraben-free products." />
      </Head>

      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900">About Us</h1>
          <p className="text-lg text-gray-700 mt-4">
            Welcome to <span className="font-semibold text-pink-600">AK.Cosmetics</span>, where innovation and care come together to redefine skincare.
          </p>
        </div>

        <div className="max-w-5xl mx-auto mt-10">
          <p className="text-gray-800 text-lg leading-relaxed" data-aos="fade-up">
            Crafted by a dedicated team of doctors and pharmacists, our products are the result of meticulous research and precise formulation. Every ingredient is carefully selected and tested to meet the highest standards of quality and effectiveness.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="200">
            At <span className="font-semibold text-pink-600">AK.Cosmetics</span>, we believe in creating skincare and makeup that are as kind to your skin as they are powerful. Our products are <span className="font-semibold">free from alcohol, parabens, and cruelty</span>, designed to deliver visible results while being gentle on your skin.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="400">
            Unlock the secret to glowing, healthy skin with <span className="font-semibold text-pink-600">AK.Cosmetics</span>, where every product is a promise of care and excellence.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-10 text-center" data-aos="zoom-in">
            Our Commitment
          </h2>

          <p className="text-gray-800 text-lg leading-relaxed mt-4" data-aos="fade-up">
            Driven by a team of expert doctors and pharmacists, we meticulously craft our products to deliver top-notch quality. Every ingredient undergoes <span className="font-semibold">rigorous testing and extensive research</span> before it becomes part of our formulations.
          </p>

          <p className="text-gray-800 text-lg leading-relaxed mt-6" data-aos="fade-up" data-aos-delay="200">
            At <span className="font-semibold text-pink-600">AK.Cosmetics</span>, we are committed to creating <span className="font-semibold">alcohol-free, paraben-free, and cruelty-free</span> skincare and makeup products that guarantee results. Our formulations are designed to reveal <span className="font-semibold">radiant, healthy skin in just a few days</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
