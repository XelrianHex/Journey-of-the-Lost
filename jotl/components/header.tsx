import React from "react";
import Image from "next/image";

const Header = () => {
    return (
        <header id="header">
            <h1 className="headerTitle">Journey of the Lost</h1>
            <div id="stats">
                <span className="stat">
                    <Image src="experience-icon.svg" alt="exerpience-icon" width={34} height={34}/>
                    <strong>0</strong>
                </span>
                <span className="stat">
                    <Image src="health-icon.svg" alt="health-icon" width={34} height={34}/>
                    <strong>100</strong>
                </span>
                <span className="stat">
                    <Image src="gold-pouch-icon.svg" alt="gold-pouch-icon" width={34} height={34}/>
                    <strong>0</strong>
                </span>
            </div>
        </header>
    )
}

export default Header;