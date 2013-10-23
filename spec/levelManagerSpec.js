
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
            var levelManager = Flown.LevelManager.create();

            expect(levelManager).toBeDefined();
        });

    });

    describe('initialising a level manager', function() {

        it('has an initialisation function', function() {
            expect(Flown.LevelManager.init).toBeDefined();
            expect(typeof Flown.LevelManager.init).toBe('function');
        });

        it('sets the initial values of the level manager object', function() {
            var levelManager = Flown.LevelManager.create();

            levelManager.init();
        });

    });

});
