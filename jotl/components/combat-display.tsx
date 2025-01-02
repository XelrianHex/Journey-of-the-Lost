import React from "react";

const CombatDisplay = () => {
    return (
    <div id="combat-display">
      <span id="opponent-name"></span>
      <div id="opponent-hp"></div>
      <p id="combat-text"></p>
      <div id="player-hp"></div>
      <span id="player-name"></span>
    </div>
    )
}

export default CombatDisplay;