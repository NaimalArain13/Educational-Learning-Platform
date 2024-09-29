"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { FiX } from "react-icons/fi";
import { MdMenuBook } from "react-icons/md";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const pathname = usePathname();
  const routes = [
    { href: "/", name: "Home" },
    { href: "/courses", name: "My Courses" },
    { href: "/team", name: "Team" },
    { href: "/about", name: "About Us" },
    { href: "/testimonial", name: "Testimonials" },
  ];

  return (
    <nav className="bg-gray-300 p-1 border border-b-black shadow-md shadow-gray-900">
      <div className="mx-5 flex flex-row items-center justify-between">
        {/* Logo or Profile Image */}
        <div className="flex flex-row space-x-3 items-center">
          <Image
            src={"/dp.jpg"}
            alt=""
            width={40}
            height={0}
            className="h-full rounded-full"
          />
          <p className="font-bold">e-LEARN</p>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-6 bg-white p-2 rounded-lg shadow-md">
          {routes.map((route) => (
            <Link key={route.href}href={route.href}className={`${pathname === route.href? "text-blue-600 font-bold":"text-gray-800"} hover:text-blue-500`}>{route.name}</Link>
          ))}
        </div>

        {/* Mobile Navbar Toggle Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="toggle menu">
            {isOpen ? <FiX size={28} /> : <MdMenuBook size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar */}
      {isOpen && (
        <div className="md:hidden absolute bg-white text-center top-16 left-0 right-0 shadow-md">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={`block px-4 py-2 ${
                pathname === route.href ? "text-blue-600 font-bold" : "text-gray-800"
              } hover:text-blue-500`}
              onClick={() => setIsOpen(false)} // Close menu after clicking a link
            >
              {route.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
