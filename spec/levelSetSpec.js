
describe('Level Set', function() {

    it('is an object', function() {
        expect(Flown.LevelSet).toBeDefined();
        expect(typeof Flown.LevelSet).toBe('object')
    });

    describe('creating a level set', function() {

        it('has a create function', function() {
            expect(Flown.LevelSet.create).toBeDefined();
            expect(typeof Flown.LevelSet.create).toBe('function');
        });

        it('creates a new level set object', function() {
            var levelSet = Flown.LevelSet.create(exampleLevelSet);

            expect(levelSet).toBeDefined();
            expect(levelSet._name).toBe(exampleLevelSet.name);
            expect(levelSet._description).toBe(exampleLevelSet.description);
        });

    });

    describe('initialising a level set', function() {

        it('has an initialisation function', function() {
            expect(Flown.LevelSet.init).toBeDefined();
            expect(typeof Flown.LevelSet.init).toBe('function');
        });

        it('sets the initial values of the level set object', function() {
            var levelManager = Flown.LevelManager.create();

            levelManager.init();
        });

    });

});
