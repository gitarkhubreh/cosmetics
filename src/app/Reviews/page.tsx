"use client"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import { FaStar } from "react-icons/fa";

const reviews = [
  { name: "SarahKhan", rating: 5, review: "Amazing products! My skin feels so much better after using AK.Cosmetics. Highly recommended!" },
  { name: "Ali Raza", rating: 4, review: "Great quality and results! Just wish the delivery was a little faster." },
  { name: "AyeshaMalik", rating: 5, review: "Love the fact that it's alcohol-free and cruelty-free. My go-to skincare brand now!" },
  { name: "Hina Akram", rating: 5, review: "The best skincare brand I've ever used! Totally worth it." },
  { name: "Zain UlAb", rating: 4, review: "Good products, but I wish they had more variety." },
  { name: "Nida Yasin", rating: 5, review: "Fast delivery and excellent results. Definitely buying again!" },
];

const truncateName = (name: string) => (name.length > 10 ? name.substring(0, 10) + "..." : name);

const Reviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      <Head>
        <title>Customer Reviews | AK.Cosmetics</title>
        <meta name="description" content="See what our customers say about AK.Cosmetics. Read genuine reviews and share your own experience." />
      </Head>

      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Customer Reviews</h1>
          <p className="text-gray-700 mb-10">See what our customers say about our products.</p>
        </div>

        <div className="max-w-4xl mx-auto">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-6 mb-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <h3 className="text-lg font-semibold text-gray-900">{truncateName(review.name)}</h3>
              <div className="flex items-center text-yellow-500 my-2">
                {[...Array(review.rating)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>
              <p className="text-gray-700">{review.review}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Reviews;
