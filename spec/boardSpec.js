
describe('Board', function() {

    it('is an object', function() {
        expect(Flown.Board).toBeDefined();
        expect(typeof Flown.Board).toBe('object')
    });

    describe('creating a board', function() {

        it('has a create function', function() {
            expect(Flown.Board.create).toBeDefined();
            expect(typeof Flown.Board.create).toBe('function');
        });

        it('creates a new Board object', function() {
            var board = Flown.Board.create();

            expect(board).toBeDefined();
        });

    });

    describe('initialising a board', function() {

        it('has an initialisation function', function() {
            expect(Flown.Board.init).toBeDefined();
            expect(typeof Flown.Board.init).toBe('function');
        });

        it('sets the initial values of the Board object', function() {
            var board = Flown.Board.create();

            expect(board.getAll()).toEqual({});
        });

    });

    describe('adding a path to the board', function() {

        var board;

        beforeEach(function() {
            board = Flown.Board.create();
        });

        it('has an add path function', function() {
            expect(board.add).toBeDefined();
            expect(typeof Flown.Board.add).toBe('function');
        });

        it('adds a path to the board', function() {
            var path = Flown.Path.create();

            path.add(Flown.Square.create(5, 10));
            board.add('green', path);

            expect(board.get('green')).toEqual(path);
        });

    });

    describe('getting a path from the board', function() {

        var board,
            path;

        beforeEach(function() {
            board = Flown.Board.create();
            path = Flown.Path.create();
            path.add(Flown.Square.create(5, 10));
            board.add('green', path);
        });

        it('has a get path function', function() {
            expect(board.get).toBeDefined();
            expect(typeof Flown.Board.get).toBe('function');
        });

        it('returns the requested path', function() {
            expect(board.get('green')).toEqual(path);
        });

    });

});
