import React from "react";

interface CombatDisplayProps {
    combatState: {
      monsterName: string;
      monsterHp: number;
      playerName: string;
      playerHp: number;
      text: string;
    }
}

const CombatDisplay: React.FC<CombatDisplayProps> = ({combatState}) => {
    return (
    <div className="combat-display  m-24 block bg-black-10 border-2 border-black-20 p-5 rounded-lg shadow-md text-xl text-offWhite text-center flex-1 overflow-y-auto">
      <span id="opponent-name">{combatState.monsterName}</span>
      <div id="opponent-hp">{combatState.monsterHp}</div>
      <p id="combat-text" className="m-12">{combatState.text}</p>
      <div id="player-hp">{combatState.playerHp}</div>
      <span id="player-name">{combatState.playerName}</span>
    </div>
    )
}

export default CombatDisplay;