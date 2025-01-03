import React from "react";
import Buttons from "./buttons";

interface CombatProps {
    combatState: {
      monsterName: string;
      monsterHp: number;
      playerName: string;
      playerHp: number;
      text: string;
    }
}

const Combat: React.FC<CombatProps> = ({combatState}) => {
    return (
    <div className="combat-display  m-24 block bg-black-10 border-2 border-black-20 p-5 rounded-lg shadow-md text-xl text-offWhite text-center flex-1 overflow-y-auto">
      <span id="opponent-name" className="text-3xl">{combatState.monsterName}</span>
      <div id="opponent-hp" className="bg-red border border-black text-white h-6 my-5 mx-auto">{combatState.monsterHp}</div>
      <p id="combat-text" className="m-12">{combatState.text}</p>
      <div id="player-hp" className="bg-red border border-black text-white h-6 my-5 mx-auto">{combatState.playerHp}</div>
      <span id="player-name" className="text-3xl">{combatState.playerName}</span>
      <Buttons/>
    </div>
    )
}

export default Combat;