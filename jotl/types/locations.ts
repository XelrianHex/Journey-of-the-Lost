import {Items} from './items';
import {NPCs} from './NPCs';

export interface Locations {
    name: string;
    description: string;
    items: Items[];
    NPCs: NPCs[];
    buildings: any[];
    monsters: any[];
    exits: any[];
}