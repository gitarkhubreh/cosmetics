"use client";
import Head from "next/head";

const ShippingPolicy = () => {
  return (
    <>
      <Head>
        <title>Shipping Policy | AK.Cosmetics</title>
        <meta
          name="description"
          content="Learn about our shipping policies, delivery times, and possible delays at AK.Cosmetics."
        />
      </Head>
      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Shipping Policy</h1>
        </div>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Delivery Time</h2>
          <p className="text-gray-700 mb-6">5-7 working days after order confirmation.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Possible Delays</h2>
          <p className="text-gray-700 mb-6">Rain or crucial situations may extend delivery by 2-3 extra days.</p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Order Confirmation</h2>
          <p className="text-gray-700">Delivery starts after your order is confirmed.</p>
        </div>
      </section>
    </>
  );
};

export default ShippingPolicy;
