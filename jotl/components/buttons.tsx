import React from "react";
import { buttonNames } from "../data/button-names";

const Buttons = () => {
    return (
        <div id="controls" className="grid grid-cols-3 gap-2.5 max-w-xs mx-auto my-5 border-3 border-double border-white p-2.5 bg-white10">
            {buttonNames.controls.map((name, index) => {
                return (
                    <button key={index} id={name} className="flex items-center justify-center h-12 bg-dark text-white border-2 border-white20 hover:bg-grey">
                        {name}
                    </button>
                );
            })}
        </div>
    );
}

export default Buttons;