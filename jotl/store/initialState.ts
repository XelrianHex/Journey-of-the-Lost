export enum Facing {
  North = "North",
  East = "East",
  South = "South",
  West = "West"
}

export interface PlayerState {
  playerName: string;
  playerXp: number;
  playerHp: number;
  playerGp: number;
  facing: Facing;
  inventory: string[];
}

export interface PlayerAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armorClass: number;
  hitPoints: number;
}

export interface MonsterState {
  monsterName: string;
  monsterHp: number;
  monsterLvl: number;
}

export interface monsterAbilities {
  strength: number;
  dexterity: number;
  constitution: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  armorClass: number;
  hitPoints: number;
}

export interface Locations {
  title: string;
  chapter: string;
  chapterTitle: string;
  buttons: (string | null)[];
  text: string;
}

export interface GameState {
  player: PlayerState;
  playerAbilities: PlayerAbilities;
  monster: MonsterState;
  monsterAbilities: monsterAbilities;
  locations: Locations;
}

const initialState: GameState = {
  player: {
    playerName: "Player",
    playerXp: 0,
    playerHp: 100,
    playerGp: 0,
    facing: Facing.North,
    inventory: [],
  },
  playerAbilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    armorClass: 10,
    hitPoints: 10,
  },
  monster: {
    monsterName: "Monster",
    monsterHp: 100,
    monsterLvl: 1,
  },
  monsterAbilities: {
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    armorClass: 10,
    hitPoints: 10,
  },
  locations: {
    title: "Journey of the Lost",
    chapter: "Chapter One",
    chapterTitle: "~The Beginning or the End?~",
    buttons: ["Option 1", "Option 2", "Option 3", "Option 4"],
    text: "You find your self waking up in a small field surrounded by trees. Strange looking trees...are, are those leaves blue?!?!",
  },
};

export default initialState;