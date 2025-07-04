"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathName = usePathname();
  const sideBarRef = useRef();
  return (
    <nav className="logo flex items-center justify-around bg-[#f2f2ff] max-[715px]:justify-between text-black p-4 shadow-md sticky top-0">
      <Image
        className="invert max-[915px]:w-16"
        width={120}
        height={120}
        src="/favicon.ico"
        alt=""
      />
      <ul className="flex items-center justify-center gap-8 max-[715px]:hidden font-semibold">
        <li>
          <Link
            className={pathName === "/" ? "border-b-2 border-b-[#00FFFF]" : ""}
            href="/"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/blog" ? "border-b-2 border-b-[#00FFFF]" : ""
            }
            href="/blog"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/services" ? "border-b-2 border-b-[#00FFFF]" : ""
            }
            href="/services"
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/about" ? "border-b-2 border-b-[#00FFFF]" : ""
            }
            href="/linkabout"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            className={
              pathName === "/contact" ? "border-b-2 border-b-[#00FFFF]" : ""
            }
            href="/contact"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="flex items-center justify-center gap-4 max-[715px]:gap-2">
        <button className="bg-[#0be7e7] px-3 py-2 max-[715px]:hidden rounded-md text-black font-semibold hover:bg-[#5eb6b6] transition-colors">
          <Link href="#" className="btn max-[915px]:text-sm">
            Hire Me
          </Link>
        </button>
        <button
          onClick={(e) => {
            if (sideBarRef.current.style.right === "-100%") {
              sideBarRef.current.style.right = "0";
            } else {
              sideBarRef.current.style.right = "-100%";
            }
          }}
          className="w-6 h-6 sidebar cursor-pointer hidden max-[715px]:block hover:bg-[#0be7e7] rounded-md text-black font-semibold transition-colors"
        >
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
      <div
        ref={sideBarRef}
        className="sidebar h-screen w-3/4 bg-[#f2f2ff] absolute right-[-100%] top-16 z-10 shadow-2xl transition-all duration-300 ease-in-out"
      >
        <button
        className="hover:bg-[#60646463] rounded-md text-black font-semibold transition-colors"
         onClick={()=>{
          sideBarRef.current.style.right = "-100%";
        }}>
          <i className="cursor-pointer px-3 fa-solid fa-xmark"></i>
        </button>
        <ul className="flex flex-col items-center justify-center gap-8 pt-8 font-semibold">
          <li>
            <Link
              className={
                pathName === "/" ? "border-b-2 border-b-[#00FFFF] px-5" : ""
              }
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/blog" ? "border-b-2 border-b-[#00FFFF] px-5" : ""
              }
              href="/blog"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/services" ? "border-b-2 border-b-[#00FFFF] px-5" : ""
              }
              href="/services"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/about" ? "border-b-2 border-b-[#00FFFF] px-5" : ""
              }
              href="/linkabout"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={
                pathName === "/contact" ? "border-b-2 border-b-[#00FFFF] px-5" : ""
              }
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
