
var exampleLevel1 = {
    size: 5,
    points: {
        "red": [
            [0, 0],
            [1, 4]
        ],
        "orange": [
            [4, 1],
            [3, 4]
        ]
    }
};

var exampleLevel2 = {
    size: 8,
    points: {
        "blue": [
            [4, 1],
            [3, 4]
        ]
    }
};

var exampleLevel3 = {
    size: 6,
    points: {
        "cyan": [
            [1, 1],
            [2, 3]
        ],
        "magenta": [
            [3, 2],
            [2, 3]
        ],
        "pink": [
            [4, 1],
            [3, 4]
        ]
    }
};

var exampleLevelSet1 = {
    name: 'Example Level Set',
    description: 'A set of levels to be played',
    levels: [
        exampleLevel1,
        exampleLevel2,
        exampleLevel3
    ]
};

var exampleLevelSet2 = {
    name: 'Another testing Level Set',
    description: 'Levels not just to be played, but enjoyed',
    levels: [
        exampleLevel3,
        exampleLevel2
    ]
};

var exampleLevelPack1 = {
    name: 'Example Level Pack',
    description: 'Impressive levels from the ends of the universe',
    levelSets: [
        exampleLevelSet1,
        exampleLevelSet2
    ]
};
