import Link from "next/link";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            {[
              { name: "Home", path: "/HomePage" },
              { name: "Shop", path: "/Shop" },
              { name: "Discounted Bundles", path: "/DiscountedBundles" },
              { name: "About Us", path: "/AboutUs" },
              { name: "Reviews", path: "/Reviews" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-pink-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* User Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">User Links</h2>
          <ul className="space-y-2">
            {[
              { name: "Contact Us", path: "/contact" },
              { name: "Privacy Policy", path: "/PrivacyPolicy" },
              { name: "Return / Refund / Exchange Policy", path: "/RefundPolicy" },
              { name: "Shipping Policy", path: "/ShippingPolicy" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.path} className="hover:text-pink-400 transition">
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Contact Info</h2>
          <p className="flex items-center gap-2">
            <FaPhone /> +92 3122050069
          </p>
          <p className="flex items-center gap-2 mt-2">
            <FaEnvelope /> ab.rahmanedu@gmail.com
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-pink-400 hover:text-white transition">
              <FaFacebook size={24} />
            </a>
            <a href="#" className="text-pink-400 hover:text-white transition">
              <FaInstagram size={24} />
            </a>
            <a href="#" className="text-pink-400 hover:text-white transition">
              <FaTwitter size={24} />
            </a>
            <a href="#" className="text-pink-400 hover:text-white transition">
              <FaYoutube size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-8">
        © {new Date().getFullYear()} AK.Cosmetics. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
