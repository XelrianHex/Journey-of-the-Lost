import {NPCs as NPCsInterface} from '../types/NPCs';
import {Items} from '../types/items';
import {Locations} from '../types/locations';

class NPCs implements NPCsInterface {
    name: string;
    description: string;
    items: Items[];
    dialog: string[];
    quests: string[];
    location: Locations;

    constructor(name: string, description: string, items: Items[], dialog: string[], quests: string[], location: Locations) {
        this.name = name;
        this.description = description;
        this.items = items;
        this.dialog = dialog;
        this.quests = quests;
        this.location = location;
    }

    // TODO: Add methods to update NPCs
}

export default NPCs;