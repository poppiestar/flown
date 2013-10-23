
describe('Level Manager', function() {

    it('is an object', function() {
        expect(Flown.LevelManager).toBeDefined();
        expect(typeof Flown.LevelManager).toBe('object');
    });

    describe('creating a level manager', function() {

        it('has a create function', function() {
            expect(Flown.LevelManager.create).toBeDefined();
            expect(typeof Flown.LevelManager.create).toBe('function');
        });

        it('creates a new level manager object', function() {
            var levelManager = Flown.LevelManager.create(exampleLevelPacks1);

            expect(levelManager).toBeDefined();
            expect(levelManager._packs.length).toBe(exampleLevelPacks1.length);
        });

    });

    describe('initialising a level manager', function() {

        var levelManager;

        beforeEach(function() {
            levelManager = Flown.LevelManager.create(exampleLevelPacks1);
        });

        it('has an initialisation function', function() {
            expect(Flown.LevelManager.init).toBeDefined();
            expect(typeof Flown.LevelManager.init).toBe('function');
        });

        it('sets the initial values of the level manager object', function() {
            levelManager.init(exampleLevelPacks2);

            expect(levelManager._packs.length).toBe(exampleLevelPacks2.length);
        });

    });

    describe('getting a level pack object from the level manager', function() {

        var levelManager;

        beforeEach(function() {
            levelManager = Flown.LevelManager.create(exampleLevelPacks1);
        });

        it('has a getLevelPack function', function() {
            expect(levelManager.getLevelPack).toBeDefined();
            expect(typeof levelManager.getLevelPack).toBe('function');
        });

        it('returns a level set object', function() {
            var levelPack = levelManager.getLevelPack(1);

            expect(levelPack._name).toBe(exampleLevelPack1.name);
            expect(levelPack._description).toBe(exampleLevelPack1.description);
            expect(levelPack._sets.length).toBe(exampleLevelPack1.sets.length);
        });

    });

    describe('adding a level pack to the level manager', function() {

        var levelManager;

        beforeEach(function() {
            levelManager = Flown.LevelManager.create(exampleLevelPacks1);
        });

        it('has an addLevelPack function', function() {
            expect(levelManager.addLevelPack).toBeDefined();
            expect(typeof levelManager.addLevelPack).toBe('function');
        });

        it('adds a new level pack to the existing level packs', function() {
            levelManager.addLevelPack(exampleLevelPack1);

            expect(levelManager._packs.length).toBe(exampleLevelPacks1.length + 1);
        });

    });

});
