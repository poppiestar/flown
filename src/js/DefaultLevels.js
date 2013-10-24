var Flown = this.Flown || {};

var realLevel1 = {
    size: 5,
    points: {
        'red': [
            [1, 1],
            [2, 5]
        ],
        'green': [
            [3, 1],
            [2, 4]
        ],
        'blue': [
            [3, 2],
            [3, 5]
        ],
        'yellow': [
            [5, 1],
            [4, 4]
        ],
        'orange': [
            [5, 2],
            [4, 5]
        ]
    }
};

var realLevel2 = {
    size: 5,
    points: {
        'red': [
            [1, 1],
            [2, 5]
        ],
        'green': [
            [3, 1],
            [2, 4]
        ],
        'blue': [
            [3, 2],
            [3, 5]
        ],
        'yellow': [
            [5, 1],
            [4, 4]
        ],
        'orange': [
            [5, 2],
            [4, 5]
        ]
    }
};

var realLevel3 = {
    size: 5,
    points: {
        'red': [
            [1, 1],
            [2, 5]
        ],
        'green': [
            [3, 1],
            [2, 4]
        ],
        'blue': [
            [3, 2],
            [3, 5]
        ],
        'yellow': [
            [5, 1],
            [4, 4]
        ],
        'orange': [
            [5, 2],
            [4, 5]
        ]
    }
};

Flown.DefaultLevels = [
    {
        name: 'Regular Pack',
        description: 'Free 5x5 to 9x9 boards',
        sets: [
            {
                name: '5x5 - easy',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '6x6',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 - medium',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '9x9 - hard',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
        ]
    },
    {
        name: 'Bonus Pack',
        description: 'Free 5x5 to 9x9 boards',
        sets: [
            {
                name: '5x5 - easy',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '6x6',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 - medium',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '9x9 - hard',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
        ]    },
    {
        name: '7x7 Mania',
        description: 'Free all 7x7, all the time!',
        sets: [
            {
                name: '7x7 (1 - 30)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 (31 - 60)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 (61 - 90)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 (91 - 120)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '7x7 (121 - 150)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
        ]    
    },
    {
        name: '8x8 Mania',
        description: 'Free all 8x8, all the time!',
        sets: [
            {
                name: '8x8 (1 - 30)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8 (31 - 60)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8 (61 - 90)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8 (91 - 120)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '8x8 (121 - 150)',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
        ]
    },
    {
        name: 'Jumbo Pack (iPad)',
        description: 'Free 10x10 to 14x14 boards',
        sets: [
            {
                name: '10x10 - hard',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '11x11',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '12x12 - harder',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '13x13',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
            {
                name: '14x14 - hardest',
                levels: [
                    realLevel1,
                    realLevel2,
                    realLevel3
                ]
            },
        ]
    }
];
