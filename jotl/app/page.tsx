import React from "react";
import Header from "@/components/header";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";


const Game = () => {
  const headerState = useSelector((state:RootState) => state.header);
  return (
    <>
      <Header headerState={headerState}/>
    </>
  )
}

export default Game;
