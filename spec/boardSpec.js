
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
            var size = 10,
                board = Flown.Board.create(size);

            expect(board).toBeDefined();
            expect(board.getSize()).toBe(size)
        });

    });

    describe('initialising a board', function() {

        it('has an initialisation function', function() {
            expect(Flown.Board.init).toBeDefined();
            expect(typeof Flown.Board.init).toBe('function');
        });

        it('sets the initial values of the Board object', function() {
            var board = Flown.Board.create(10);

            expect(board.getAllPaths()).toEqual({});
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

        it('returns the requested path', function() {
            expect(board.getPathAt(square)).toEqual(path);
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
