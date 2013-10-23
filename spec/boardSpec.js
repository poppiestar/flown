
describe('Board', function() {

    it('is an object', function() {
        expect(Flown.Board).toBeDefined();
        expect(typeof Flown.Board).toBe('object');
    });

    describe('creating a board', function() {

        it('has a create function', function() {
            expect(Flown.Board.create).toBeDefined();
            expect(typeof Flown.Board.create).toBe('function');
        });

        it('creates a new Board object', function() {
            var testSize = 10,
                board = Flown.Board.create(testSize);

            expect(board).toBeDefined();
            expect(board._paths).toEqual({});
            expect(board._size).toBe(testSize);
        });

    });

    describe('initialising a board', function() {

        it('has an initialisation function', function() {
            expect(Flown.Board.init).toBeDefined();
            expect(typeof Flown.Board.init).toBe('function');
        });

        it('sets the initial values of the Board object', function() {
            var testSize = 8,
                board;

            board = Flown.Board.create(10);

            board.init(testSize);

            expect(board._paths).toEqual({});
            expect(board._size).toBe(testSize);
        });

    });

    describe('adding a path to the board', function() {

        var board;

        beforeEach(function() {
            board = Flown.Board.create(10);
        });

        it('has an add path function', function() {
            expect(board.addPath).toBeDefined();
            expect(typeof Flown.Board.addPath).toBe('function');
        });

        it('adds a path to the board', function() {
            var path = Flown.Path.create();

            path.add(Flown.Square.create(5, 10));
            board.addPath('green', path);

            expect(board.getPath('green')).toEqual(path);
        });

    });

    describe('getting a path from the board', function() {

        var board,
            path;

        beforeEach(function() {
            board = Flown.Board.create(10);
            path = Flown.Path.create();
            path.add(Flown.Square.create(5, 10));
            board.addPath('green', path);
        });

        it('has a get path function', function() {
            expect(board.getPath).toBeDefined();
            expect(typeof Flown.Board.getPath).toBe('function');
        });

        it('returns the requested path', function() {
            expect(board.getPath('green')).toEqual(path);
        });

    });

    describe('getting a path at a specific square on the board', function() {

        var board,
            path,
            square;

        beforeEach(function() {
            board = Flown.Board.create(10);
            path = Flown.Path.create();
            square = Flown.Square.create(5, 10);
            path.add(square);
            board.addPath('green', path);
        });

        it('has a get path at square function', function() {
            expect(board.getPathAt).toBeDefined();
            expect(typeof Flown.Board.getPathAt).toBe('function');
        });

        it('returns the requested path when given a path square', function() {
            expect(board.getPathAt(square)).toEqual(path);
        });

        it('returns nothing when given a non-path square', function() {
            var nonSquare = Flown.Square.create(0, 0);

            expect(board.getPathAt(nonSquare)).not.toBeDefined();
        });

    });

    describe('getting all paths from the board', function() {

        var board,
            path;

        beforeEach(function() {
            board = Flown.Board.create(10);
            path = Flown.Path.create();
            path.add(Flown.Square.create(5, 10));
            board.addPath('green', path);
        });

        it('has a get all paths function', function() {
            expect(board.getAllPaths).toBeDefined();
            expect(typeof Flown.Board.getAllPaths).toBe('function');
        });

        it('returns the requested path', function() {
            expect(board.getAllPaths()).toEqual({'green': path});
        });

    });

});
