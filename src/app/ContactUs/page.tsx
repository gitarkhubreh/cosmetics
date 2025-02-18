"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Contact Us | AK.Cosmetics</title>
        <meta name="description" content="Get in touch with AK.Cosmetics for inquiries, support, and collaboration." />
      </Head>

      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-gray-700 mb-10">Have questions? Get in touch with us.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Contact Info - AOS Right */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-right">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Contact Info</h2>
            <p className="flex items-center gap-2 text-gray-700 mb-3">
              <FaPhone className="text-pink-500" /> +92 3122050069
            </p>
            <p className="flex items-center gap-2 text-gray-700 mb-3">
              <FaEnvelope className="text-pink-500" /> ab.rahmanedu@gmail.com
            </p>
            <p className="flex items-center gap-2 text-gray-700">
              <FaMapMarkerAlt className="text-pink-500" /> Karachi, Pakistan
            </p>
          </div>

          {/* Contact Form - AOS Left */}
          <div className="bg-white shadow-md rounded-lg p-6" data-aos="fade-left">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Send Us a Message</h2>
            <form action="https://formspree.io/f/xyzkdrbk" method="POST" className="space-y-4">
              {/* Redirect after submission */}
              <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                required
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              ></textarea>
              <button type="submit" className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
