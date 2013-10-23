
describe('Game Manager', function() {

    it('is an object', function() {
        expect(Flown.GameManager).toBeDefined();
        expect(typeof Flown.GameManager).toBe('object');
    });

    describe('creating a game manager', function() {

        it('has a create function', function() {
            expect(Flown.GameManager.create).toBeDefined();
            expect(typeof Flown.GameManager.create).toBe('function');
        });

        it('creates a new game manager object', function() {
            var gameManager = Flown.GameManager.create();

            expect(gameManager).toBeDefined();
            expect(gameManager._levelManager).toBeDefined();
            expect(gameManager._gameBoard).toBeDefined();
        });

    });

    describe('initialising a game manager', function() {

        var gameManager;

        beforeEach(function() {
            Flown.DefaultLevels = exampleLevelPacks1;
        });

        it('has an init function', function() {
            expect(Flown.GameManager.init).toBeDefined();
            expect(typeof Flown.GameManager.init).toBe('function');
        });

        it('sets the initial values of the game manager object', function() {
            gameManager = Flown.GameManager.create();

            expect(gameManager._levelManager).toBeDefined();
            expect(gameManager._gameBoard).toBeDefined();
            expect(gameManager._levelManager._packs.length).toBe(exampleLevelPacks1.length);
        });

        it('sets the initial values of the game manager object when there are installed level packs', function() {
            window.localStorage.setItem('flown.extrapacks', JSON.stringify(exampleLevelPacks2));
            gameManager = Flown.GameManager.create();
            window.localStorage.clear('flown.extrapacks');

            expect(gameManager._levelManager).toBeDefined();
            expect(gameManager._gameBoard).toBeDefined();
            expect(gameManager._levelManager._packs.length).toBe(exampleLevelPacks1.length + exampleLevelPacks2.length);
        });

    });

});
