"use client";

import Head from "next/head";

const RefundPolicy = () => {
  return (
    <>
      <Head>
        <title>Refund Policy | AK.Cosmetics</title>
        <meta
          name="description"
          content="Learn about AK.Cosmetics' refund and exchange policy for damaged or incorrect products."
        />
      </Head>

      <section className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20 mt-20">
        <div className="max-w-4xl mx-auto bg-white p-8 shadow-md rounded-lg">
          <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
            Refund Policy
          </h1>
          <p className="text-gray-700 mb-6">
            At AK.Cosmetics, we strive to provide our customers with products of
            the highest quality. However, we understand that there may be
            instances where you need to return or exchange an item. Please
            review our return and exchange policy below:
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Damaged or Wrong Product Delivery:
          </h2>
          <p className="text-gray-700 mb-4">
            If you receive a damaged item or an incorrect product, please
            contact our customer service team within 3 days of receiving the
            order. We will provide you with instructions on how to return the
            item and will either send you a replacement or issue a full refund,
            including any applicable shipping costs.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Return or Exchange Eligibility:
          </h2>
          <ul className="list-disc list-inside text-gray-700 mb-4">
            <li>Items must be returned in their original condition and unused.</li>
            <li>
              The return or exchange request must be initiated within 3 days of
              receiving the order.
            </li>
            <li>
              Original proof of purchase (order confirmation email) is required
              for all returns or exchanges.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Return Process:</h2>
          <ol className="list-decimal list-inside text-gray-700 mb-4">
            <li>
              Contact our customer service team at
              <span className="font-bold"> akcosmetics.support@gmail.com </span>
              to initiate the return or exchange process.
            </li>
            <li>Provide your order number, a description of the issue, and any relevant photos.</li>
            <li>
              Our team will guide you through the return or exchange process
              and provide you with a return authorization (RA) number.
            </li>
            <li>Pack the item securely and include the original proof of purchase.</li>
            <li>Ship the item to the address provided by our customer service team.</li>
            <li>
              Upon receiving the returned item, we will inspect it to ensure it
              meets the eligibility criteria.
            </li>
            <li>
              If eligible, we will process the refund to the original payment
              method or ship the replacement item, depending on your
              preference.
            </li>
          </ol>
          <p className="text-gray-700 mb-4">
            Please allow 10-15 business days for the processing of returns and
            exchanges.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Sale Items:</h2>
          <p className="text-gray-700 mb-4">
            Unfortunately, we do not offer refunds or exchanges on sale items.
          </p>

          <p className="text-gray-700 mt-6">
            AK.Cosmetics reserves the right to refuse returns or exchanges that
            do not meet the outlined criteria. If you have any questions or
            concerns regarding our return and exchange policy, please contact
            our customer service team for assistance. Thank you for choosing
            AK.Cosmetics!
          </p>
        </div>
      </section>
    </>
  );
};

export default RefundPolicy;
