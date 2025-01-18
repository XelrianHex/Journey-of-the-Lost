import {Items} from './items';
import {Locations} from './locations';

export interface Stats {
    name: string;
    health: number;
    level: number;
    strength: number;
    dexterity: number;
    constitution: number;
    intelligence: number;
    wisdom: number;
    charisma: number;
    armorClass: number;
    hitPoints: number;
    xp: number;
    gp: number;
    facing: string;
    inventory: Items[];
    location: Locations;
}

export type Abilities = Pick<Stats, 'strength' | 'dexterity' | 'constitution' | 'intelligence' | 'wisdom' | 'charisma'>;