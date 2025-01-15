import {NPCs as NPCsInterface} from '../types/NPCs';

class NPCs implements NPCsInterface {
    name: string;
    description: string;
    items: string[];
    dialog: string[];
    quests: string[];
    location: string;

    constructor(name: string, description: string, items: string[], dialog: string[], quests: string[], location: string) {
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