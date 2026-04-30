"use client";

import Link from "next/link";
import { FaShoppingCart, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-white shadow-md sticky top-0 z-50">

      {/* Logo */}
      <div>
        <h1 className="text-2xl font-bold text-red-600">STEMSAGE</h1>
        <p className="text-xs text-gray-500">Once Step Towards DIGITAL !</p>
      </div>

      {/* Menu */}
      <div className="hidden md:flex items-center space-x-6 font-medium text-gray-800">

        <Link href="/" className="hover:text-red-500 transition">
          Home
        </Link>

        <Link href="/about" className="hover:text-red-500 transition">
          About
        </Link>

        {/* Courses Dropdown */}
        <div className="relative group">

          <button className="flex items-center hover:text-red-500 transition">
            Courses ▼
          </button>

          <div className="absolute left-0 top-full pt-2 hidden group-hover:block">
            <div className="bg-white shadow-lg rounded w-44">

              <Link
                href="/courses"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                All Courses
              </Link>

              <Link
                href="/courses/robotics"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Robotics
              </Link>

              <Link
                href="/courses/iot"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                IoT
              </Link>

              <Link
                href="/courses/programming"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Programming
              </Link>

            </div>
          </div>
        </div>

        <Link href="/services" className="hover:text-red-500 transition">
          Services
        </Link>

        <Link href="/store" className="hover:text-red-500 transition">
          Our Store
        </Link>

        <Link href="/forum" className="hover:text-red-500 transition">
          Our Forum
        </Link>

      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 text-gray-800 text-xl">

        <Link href="/cart" className="hover:text-red-500 transition">
          <FaShoppingCart size={20} />
        </Link>

        <Link href="/profile" className="hover:text-red-500 transition">
          <FaUser size={20} />
        </Link>

      </div>

    </nav>
  );
}