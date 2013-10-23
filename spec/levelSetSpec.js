
describe('Level Set', function() {

    it('is an object', function() {
        expect(Flown.LevelSet).toBeDefined();
        expect(typeof Flown.LevelSet).toBe('object');
    });

    describe('creating a level set', function() {

        it('has a create function', function() {
            expect(Flown.LevelSet.create).toBeDefined();
            expect(typeof Flown.LevelSet.create).toBe('function');
        });

        it('creates a new level set object', function() {
            var levelSet = Flown.LevelSet.create(exampleLevelSet1);

            expect(levelSet).toBeDefined();
            expect(levelSet._name).toBe(exampleLevelSet1.name);
            expect(levelSet._description).toBe(exampleLevelSet1.description);
            expect(levelSet._levels.length).toBe(3);
        });

    });

    describe('initialising a level set', function() {

        var levelSet;

        beforeEach(function() {
            levelSet = Flown.LevelSet.create(exampleLevelSet1);
        });

        it('has an initialisation function', function() {
            expect(Flown.LevelSet.init).toBeDefined();
            expect(typeof Flown.LevelSet.init).toBe('function');
        });

        it('sets the initial values of the level set object', function() {
            levelSet.init(exampleLevelSet2);

            expect(levelSet._name).toBe(exampleLevelSet2.name);
            expect(levelSet._description).toBe(exampleLevelSet2.description);
            expect(levelSet._levels.length).toBe(2);
        });

    });

    describe('getting a level object from the level set', function() {

        var levelSet;

        beforeEach(function() {
            levelSet = Flown.LevelSet.create(exampleLevelSet1);
        });

        it('has a getLevel function', function() {
            expect(levelSet.getLevel).toBeDefined();
            expect(typeof levelSet.getLevel).toBe('function');
        });

        it('returns a level object', function() {
            var level = levelSet.getLevel(1);

            expect(level._points["red"]).toBeDefined();
            expect(level._points["orange"]).toBeDefined();
            expect(level._size).toBe(exampleLevel1.size);
        });

    });

    describe('getting the number of levels in level set', function() {

        var levelSet;

        beforeEach(function() {
            levelSet = Flown.LevelSet.create(exampleLevelSet1);
        });

        it('has a getSize function', function() {
            expect(levelSet.getSize).toBeDefined();
            expect(typeof levelSet.getSize).toBe('function');
        });

        it('returns the number of levels in the set', function() {
            var levelSize = levelSet.getSize();

            expect(levelSize).toBe(exampleLevelSet1.levels.length);
        });

    });

});
