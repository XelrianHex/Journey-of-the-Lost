import buttonNames from "../button-names";

enum Facing {
  North = "North",
  South = "South",
  East = "East",
  West = "West",
}

interface PlayerStats {
  name: string;
  xp: number;
  hp: number;
  gp: number;
  facing: Facing;
  inventory: string[];
}

interface MonsterStats {
  name: string;
  lvl: number;
  hp: number;
}

interface StartArea {}
