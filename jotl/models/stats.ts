import {Stats as StatsInterface} from '../types/stats';
import {Items} from '../types/items';
import {Locations} from '../types/locations';

class Stats implements StatsInterface {
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

    constructor(name: string, health: number, level: number, strength: number, dexterity: number, constitution: number, intelligence: number, wisdom: number, charisma: number, armorClass: number, hitPoints: number, xp: number, gp: number, facing: string, inventory: Items[], location: Locations) {
        this.name = name;
        this.health = health;
        this.level = level;
        this.strength = strength;
        this.dexterity = dexterity;
        this.constitution = constitution;
        this.intelligence = intelligence;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.armorClass = armorClass;
        this.hitPoints = hitPoints;
        this.xp = xp;
        this.gp = gp;
        this.facing = facing;
        this.inventory = inventory;
        this.location = location;
    }

    // TODO: Add methods to update stats
}

export default Stats;