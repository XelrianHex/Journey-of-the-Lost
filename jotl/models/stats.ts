import {Stats as StatsInterface} from '../types/stats';
import {Items} from '../types/items';
import {Locations} from '../types/locations';

class Stats implements StatsInterface {
    constructor(
      public name: string,
      public health: number,
      public level: number,
      public strength: number,
      public dexterity: number,
      public constitution: number,
      public intelligence: number,
      public wisdom: number,
      public charisma: number,
      public armorClass: number,
      public hitPoints: number,
      public xp: number,
      public gp: number,
      public facing: string,
      public inventory: Items[],
      public location: Locations) {
        if (health < 0) {
          throw new Error('Health must be greater than 0');
        }
        if (level < 0) {
          throw new Error('Level must be greater than 0');
        }
        if (xp < 0) {
          throw new Error('XP must be greater than 0');
        }
      }

    // TODO: Add methods to update stats
}

export default Stats;