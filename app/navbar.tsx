import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="navbar flex flex-col items-center bg-dark p-4 shadow-lg shadow-black-10">
      <h1 className="title text-white text-2x1 font-bold">
        Journey of the Lost
      </h1>
      <div id="stats" className="flex space-x-4 mt-2">
        <span className="stat flex items-center space-x-2">
          <Image
            src="/experience-icon.svg"
            alt="experience-icon"
            id="exp"
            width={24}
            height={24}
          />
          <strong className="text-white">0</strong>
        </span>
        <span className="stat flex items-center space-x-2">
          <Image
            src="/health-icon.svg"
            alt="health-icon"
            width={24}
            height={24}
          />
          <strong className="text-white">100</strong>
        </span>
        <span className="stat flex items-center space-x-2">
          <Image
            src="/gold-pouch-icon.svg"
            alt="gold-pouch-icon"
            width={24}
            height={24}
          />
          <strong className="text-white">0</strong>
        </span>
      </div>
    </nav>
  );
}

export default Navbar;