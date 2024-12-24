import React from "react";
import Display from "./display";
import Navbar from "./navbar";

 const Game = () => {
  return(
    <>
    <Navbar />
      <div className="layout bg-dark flex" style={{ height: 'calc(100vh - 100px)' }}>
      <Display />
      </div>
    </>
  )
}

export default Game;
