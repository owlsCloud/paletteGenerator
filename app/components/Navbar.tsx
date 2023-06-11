"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
function Navbar() {
  return (
    <div className="z-100 h-auto w-full flex justify-around p-4 bg-[#F7F7F7]">
      <nav className="">
        <ul className="flex gap-4 text-lg">
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/">
            <li>Saved</li>
          </Link>
        </ul>
      </nav>

      <div>
        <Image src="../../public/next.svg" alt="next" height={30} width={30} />
      </div>
    </div>
  );
}

export default Navbar;
