'use client';
import { useState } from 'react';
import { FiShoppingCart, FiHeart } from 'react-icons/fi';
import { IoMdStar, IoMdStarOutline } from 'react-icons/io';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { FaChevronDown } from 'react-icons/fa';
import Link from 'next/link';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [wishlistOpen, setWishlistOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold">AK.Cosmetics</Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="hover:text-pink-500">Home</Link>
          <Link href="/Shop" className="hover:text-pink-500">Shop</Link>
          
          {/* Our Range Dropdown */}
          <div className="relative">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center hover:text-pink-500">
              Our Range <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="absolute bg-white shadow-md mt-2 py-2 w-40">
                <Link href="/OurRange/Cosmetics" className="block px-4 py-2 hover:bg-pink-100">Cosmetic</Link>
                <Link href="/OurRange/SkineCare" className="block px-4 py-2 hover:bg-pink-100">Skincare</Link>
              </div>
            )}
          </div>

          <Link href="/DiscountedBundles" className="hover:text-pink-500">Discounted Bundles</Link>
          <Link href="/AboutUs" className="hover:text-pink-500">About Us</Link>
          <Link href="/Reviews" className="hover:text-pink-500">Reviews</Link>
          <Link href="/ContactUs" className="hover:text-pink-500">Contact Us</Link>
          <Link href="/LogIn" className="bg-pink-500 text-white px-4 py-2 rounded">Log In</Link>
          
          {/* Wishlist & Cart Icons */}
          <FiHeart className="text-xl hover:text-pink-500 cursor-pointer" onClick={() => setWishlistOpen(true)} />
          <FiShoppingCart className="text-xl hover:text-pink-500 cursor-pointer" onClick={() => setCartOpen(true)} />
          
          {/* 3-Star Rating */}
          <div className="flex text-yellow-500">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarOutline />
            <IoMdStarOutline />
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(true)} className="md:hidden">
          <RxHamburgerMenu className="text-2xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col md:hidden">
          <button onClick={() => setMenuOpen(false)} className="self-end text-2xl">
            <AiOutlineClose />
          </button>

          <Link href="/" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/Shop" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Shop</Link>
          
          {/* Our Range Dropdown */}
          <div className="py-2">
            <button onClick={() => setDropdownOpen(!dropdownOpen)} className="flex items-center w-full text-left hover:text-pink-500">
              Our Range <FaChevronDown className="ml-1" />
            </button>
            {dropdownOpen && (
              <div className="ml-4 mt-2">
                <Link href="/OurRange/Cosmetics" className="block py-2 hover:text-pink-500">Cosmetic</Link>
                <Link href="/OurRange/SkineCare" className="block py-2 hover:text-pink-500">Skincare</Link>
              </div>
            )}
          </div>

          <Link href="/DiscountedBundles" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Discounted Bundles</Link>
          <Link href="/AboutUs" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>About Us</Link>
          <Link href="/Reviews" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Reviews</Link>
          <Link href="/ContactUs" className="py-2 hover:text-pink-500" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          <Link href="/LogIn" className="bg-pink-500 text-white px-4 py-2 rounded mt-4 text-center" onClick={() => setMenuOpen(false)}>Log In</Link>
          
          {/* Icons */}
          <div className="flex space-x-4 mt-6">
            <FiHeart className="text-xl hover:text-pink-500 cursor-pointer" onClick={() => setWishlistOpen(true)} />
            <FiShoppingCart className="text-xl hover:text-pink-500 cursor-pointer" onClick={() => setCartOpen(true)} />
          </div>

          {/* 3-Star Rating */}
          <div className="flex text-yellow-500 mt-4">
            <IoMdStar />
            <IoMdStar />
            <IoMdStar />
            <IoMdStarOutline />
            <IoMdStarOutline />
          </div>
        </div>
      )}

      {/* Wishlist Drawer */}
      {wishlistOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col">
          <button onClick={() => setWishlistOpen(false)} className="self-end text-2xl">
            <AiOutlineClose />
          </button>
          <h2 className="text-xl font-bold">Your Wishlist</h2>
          <p className="text-gray-500 mt-2">No items in wishlist.</p>
        </div>
      )}

      {/* Cart Drawer */}
      {cartOpen && (
        <div className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg p-6 flex flex-col">
          <button onClick={() => setCartOpen(false)} className="self-end text-2xl">
            <AiOutlineClose />
          </button>
          <h2 className="text-xl font-bold">Your Cart</h2>
          <p className="text-gray-500 mt-2">No items in cart.</p>
        </div>
      )}
    </nav>
  );
}
