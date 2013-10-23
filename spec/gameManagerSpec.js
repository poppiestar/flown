
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
            gameManager = Flown.GameManager.create();
        });

        it('has an init function', function() {
            expect(Flown.GameManager.init).toBeDefined();
            expect(typeof Flown.GameManager.init).toBe('function');
        });

        it('sets the initial values of the game manager object', function() {
            var gameManager = Flown.GameManager.create();

            expect(gameManager._levelManager).toBeDefined();
            expect(gameManager._gameBoard).toBeDefined();
        });

    });

});
