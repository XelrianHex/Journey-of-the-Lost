'use client';

import React from "react";
import Header from "@/components/header";
import Display from "@/components/display";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const Game = () => {
  const headerState = useSelector((state: RootState) => state.header);
  const displayState = useSelector((state: RootState) => state.display);
  return (
    <>
      <Header headerState={headerState}/>
      <div className="layout flex h-[calc(100vh-100px)] bg-dark">
        <Display displayState={displayState}/>
      </div>
    </>
  );
};

export default Game;