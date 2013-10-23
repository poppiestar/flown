
describe('Level Pack', function() {

    it('is an object', function() {
        expect(Flown.LevelPack).toBeDefined();
        expect(typeof Flown.LevelPack).toBe('object');
    });

    describe('creating a level pack', function() {

        it('has a create function', function() {
            expect(Flown.LevelPack.create).toBeDefined();
            expect(typeof Flown.LevelPack.create).toBe('function');
        });

        it('creates a new level pack object', function() {
            var levelPack = Flown.LevelPack.create(exampleLevelPack1);

            expect(levelPack).toBeDefined();
            expect(levelPack._name).toBe(exampleLevelPack1.name);
            expect(levelPack._description).toBe(exampleLevelPack1.description);
            expect(levelPack._sets.length).toBe(exampleLevelPack1.sets.length);
        });

    });

    describe('initialising a level pack', function() {

        var levelPack;

        beforeEach(function() {
            levelPack = Flown.LevelPack.create(exampleLevelPack1);
        });

        it('has an initialisation function', function() {
            expect(Flown.LevelPack.init).toBeDefined();
            expect(typeof Flown.LevelPack.init).toBe('function');
        });

        it('sets the initial values of the level pack object', function() {
            levelPack.init(exampleLevelPack2);

            expect(levelPack._name).toBe(exampleLevelPack2.name);
            expect(levelPack._description).toBe(exampleLevelPack2.description);
            expect(levelPack._sets.length).toBe(exampleLevelPack2.sets.length);
        });

    });

    describe('getting a level set object from the level pack', function() {

        var levelPack;

        beforeEach(function() {
            levelPack = Flown.LevelPack.create(exampleLevelPack1);
        });

        it('has a getLevelSet function', function() {
            expect(levelPack.getLevelSet).toBeDefined();
            expect(typeof levelPack.getLevelSet).toBe('function');
        });

        it('returns a level set object', function() {
            var levelSet = levelPack.getLevelSet(1);

            expect(levelSet._name).toBe(exampleLevelSet1.name);
            expect(levelSet._description).toBe(exampleLevelSet1.description);
            expect(levelSet._levels.length).toBe(exampleLevelSet1.levels.length);
        });

    });
});
