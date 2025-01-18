import {Items as ItemsInterface} from '../types/items';

class Items implements ItemsInterface {
    name: string;
    description: string;
    value: number;
    amount: number;
    ability: string;

    constructor(name: string, description: string, value: number, amount: number, ability: string) {
        this.name = name;
        this.description = description;
        this.value = value;
        this.amount = amount;
        this.ability = ability;
    }

    // TODO: Add methods to update Items
}

export default Items;