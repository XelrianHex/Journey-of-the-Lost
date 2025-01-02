import React from "react";
import CombatDisplay from "./combat-display";

interface DisplayProps {
    displayState: {
        chapter: string;
        chapterTitle: string;
        text: string;
    }
}

const Display: React.FC<DisplayProps> = ({displayState}) => {
    return (
        <>
          <CombatDisplay />
          <div className="display-area m-24 hidden bg-black-10 border-2 border-black-20 p-5 rounded-lg shadow-md text-xl text-offWhite text-center flex-1 overflow-y-auto">
            <h2 id="chapter" className="text-2xl">{displayState.chapter}</h2>
            <h3 id="chapter-title" className="mt-4 text-4xl">{displayState.chapterTitle}</h3>
            <p id="text" className="mt-8">{displayState.text}</p>
          </div>
        </>
    )
}

export default Display;