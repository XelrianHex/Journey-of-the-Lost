import React from "react";

const Display = () => {
  return (
    <div className="display-area bg-black-10 border-2 border-black-20 p-5 rounded-lg shadow-lg text-x1 text-off-white text-center flex-1 overflow-y-auto">
      <h2 id="chapter" className="mb-2">Chapter One</h2>
      <h3 id="chapter-title" >~The Beginning or the End~</h3>
      <hr className="mb-4"/>
      <p id="text">
        You find your self waking up in a small field surrounded by trees.
        Strange looking trees...are, are those leaves blue?!?!
      </p>
    </div>
  );
}

export default Display;