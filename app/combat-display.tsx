import React from 'react'

const CombatDisplay = () => {
  return (
    <div id="combat-display" className="bg-black-10 border-2 border-black-20 p-5 rounded-lg shadow-lg text-x1 text-off-white text-center flex-1 overflow-y-auto display-none">
      <span id="opponent-name" className="font-bold">Rat</span>
      <div id="opponent-hp" className="bg-red border-1 border-black-10">100%</div>
      <p id="combat-text" className="m-2 border-1 border-off-white p-5">It can&apost be that dangerous can it?</p>
      <div id="player-hp" className="bg-red border-1 border-black-10">100%</div>
      <span id="player-name" className="font-bold">Xelrian</span>
    </div>
  )}

  export default CombatDisplay;