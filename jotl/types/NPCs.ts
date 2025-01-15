import {Items} from './items';
import {Locations} from './locations';

export interface NPCs {
    name: string;
    description: string;
    items: Items[];
    dialog: string[];
    quests: string[];
    location: Locations;
}