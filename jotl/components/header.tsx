
import React from "react";
import Image from "next/image";

interface HeaderProps {
    headerState: {
        title: string;
        xp: number;
        hp: number;
        gp: number;
    }
}

const Header: React.FC<HeaderProps> = ({headerState}) => {
    return (
        <header id="header" className="flex flex-col items-center bg-dark text-white p-2.5 shadow-lg">
            <h1 className="headerTitle text-2xl font-bold mb-2">{headerState.title}</h1>
            <div id="stats" className="flex gap-10">
                <span className="stat flex items-center gap-10">
                    <Image src="experience-icon.svg" alt="exerpience-icon" width={34} height={34}/>
                    <strong>{headerState.xp}</strong>
                </span>
                <span className="stat flex items-center gap-10">
                    <Image src="health-icon.svg" alt="health-icon" width={34} height={34}/>
                    <strong>{headerState.hp}</strong>
                </span>
                <span className="stat flex items-center gap-10">
                    <Image src="gold-pouch-icon.svg" alt="gold-pouch-icon" width={34} height={34}/>
                    <strong>{headerState.gp}</strong>
                </span>
            </div>
        </header>
    )
}

export default Header;