"use client";
import Head from "next/head";

const PrivacyPolicy = () => {
  return (
    <>
      <Head>
        <title>Privacy Policy | AK.Cosmetics</title>
        <meta
          name="description"
          content="Learn how AK.Cosmetics collects, uses, and protects your personal information."
        />
      </Head>

      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-700 mb-10">
            Your privacy is important to us. This Privacy Policy outlines how we
            collect, use, and protect your information.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Information We Collect
          </h2>
          <p className="text-gray-700 mb-6">
            We may collect personal information such as your name, email,
            phone number, and address when you interact with our website,
            make a purchase, or contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We use your information to process orders, improve our services,
            send updates, and respond to inquiries. We do not sell or share
            your information with third parties.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Security of Your Information
          </h2>
          <p className="text-gray-700 mb-6">
            We take reasonable precautions to protect your personal
            information from unauthorized access, disclosure, or misuse.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Cookies and Tracking
          </h2>
          <p className="text-gray-700 mb-6">
            Our website may use cookies to enhance user experience. You can
            adjust your browser settings to refuse cookies if you prefer.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-700 mb-6">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-gray-700">
            If you have any questions about this Privacy Policy, please
            contact us at <span className="font-semibold">ab.rahmanedu@gmail.com</span>.
          </p>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
