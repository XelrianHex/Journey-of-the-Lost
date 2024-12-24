interface ButtonNames {
  control: string[];
  combat: (string | null)[];
  whatDoYouRemember: string[];
}

const buttonNames: ButtonNames = {
  control: ["search", "north", "use-item", "west", "action", "east", "inventory", "south", "skill"],
  combat: ["search", "attack", "use-item", "change weapon", "spells", "run", "inventory", null, "skill" ],
  whatDoYouRemember: ["Going to sleep", "Driving home/to work", "I don't remember anything..."]
}

export default buttonNames;