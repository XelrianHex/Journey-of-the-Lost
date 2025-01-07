export interface ChapterOne {
    text: string;
    options: Options[];
}

export interface Options {
    text: string;
    nextNodeId: number;
}

const commonOptions: Options[] = [
    {text: "Search", nextNodeId: 1},
    {text: "North", nextNodeId: 2},
    {text: "Use Item", nextNodeId: 3},
    {text: "West", nextNodeId: 4},
    {text: "Action", nextNodeId: 5},
    {text: "East", nextNodeId: 6},
    {text: "Inventory", nextNodeId: 7},
    {text: "South", nextNodeId: 8},
    {text: "Skill", nextNodeId: 9}
]

const story: Record<number, ChapterOne> = {
    1: {
        text: "You find yourself waking up in a small field surrounded by trees. Strange looking trees...are, are those leaves blue?!?!",
        options: commonOptions
    },
    2: {
        text: "All around you are strange trees of ash bark and blue leaves surrounded by low bushes and flowers in a variety of colors. Just in front of you is a small unlit campfire.",
        options: commonOptions
    },
    3: {
        text: "How did you get here? What is the last thing you remember?",
        options: commonOptions.map(option => {
            switch(option.text) {
                case "Search":
                    return {...option, text: "Driving home/ to work"};
                case "North":
                    return {...option, text: "Going to sleep"};
                case "Use Item":
                    return {...option, text: "Chilling with friends"};
                default:
                    return option;
            }
        }
    ),
        
    }
}

export default story;