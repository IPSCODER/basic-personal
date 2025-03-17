"use client"
import React, { Suspense, useEffect, useState } from "react";
// import logo from "../../assets/parentMe36O.png";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import NavMenuItems from "./navigation-menu/navigation";
import { Skeleton } from "@/components/ui/skeleton";
 "./navigation-menu/navigation";

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixed top-0 left-0 w-full h-16 bg-white shadow-md flex items-center justify-between px-4 transition-all duration-300 z-50 ${visible ? "top-0" : "-top-16"}`}
    >
      <Link href="/">
        {/* <Image src={""} className="w-36" alt="Logo" /> */}
      </Link>

      {/* <nav>
        <ul
          className={`md:flex md:gap-6 md:static absolute top-0 right-0 bg-white md:bg-transparent h-screen md:h-auto w-2/3 md:w-auto flex flex-col md:flex-row items-start md:items-center p-6 md:p-0 transition-all duration-300 ${isOpen ? "right-0" : "right-[-100%]"}`}
        >
          <li><Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link></li>
          <li><Link href="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link></li>
          <li><Link href="/" className="text-gray-700 hover:text-gray-900">Parenting Stages</Link></li>
          <li><Link href="/special-children" className="text-gray-700 hover:text-gray-900">Special Children</Link></li>
          <li><Link href="/services" className="text-gray-700 hover:text-gray-900">Services</Link></li>
          <li><Link href="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link></li>
        </ul>
      </nav> */}
      <Suspense fallback={<Skeleton className="w-full h-4" />} >
      <NavMenuItems/>
      </Suspense>

      <div className="flex items-center gap-4">
        <Button variant="default">Login</Button>
      </div>

      <button className="md:hidden flex flex-col gap-1 w-6 h-6" onClick={() => setIsOpen(!isOpen)}>
        <span className="w-full h-1 bg-gray-800 transition-all duration-300" />
        <span className="w-full h-1 bg-gray-800 transition-all duration-300" />
        <span className="w-full h-1 bg-gray-800 transition-all duration-300" />
      </button>
    </header>
  );
};

export default Header;
