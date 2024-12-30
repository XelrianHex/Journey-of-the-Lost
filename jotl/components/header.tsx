import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header id="header" className="flex flex-col items-center bg-dark text-white p-2.5 shadow-lg">
            <h1 className="headerTitle text-2xl font-bold mb-2">Journey of the Lost</h1>
            <div id="stats" className="flex gap-10">
                <span className="stat flex items-center gap-10">
                    <Image src="experience-icon.svg" alt="exerpience-icon" width={34} height={34}/>
                    <strong>0</strong>
                </span>
                <span className="stat flex items-center gap-10">
                    <Image src="health-icon.svg" alt="health-icon" width={34} height={34}/>
                    <strong>100</strong>
                </span>
                <span className="stat flex items-center gap-10">
                    <Image src="gold-pouch-icon.svg" alt="gold-pouch-icon" width={34} height={34}/>
                    <strong>0</strong>
                </span>
            </div>
        </header>
    )
}

export default Header;