
describe('Board', function() {

    it('should be an object', function() {
        expect(Flown.Board).toBeDefined();
        expect(typeof Flown.Board).toBe('object')
    });

    describe('creating a board', function() {

        it('should have a create function', function() {
            expect(Flown.Board.create).toBeDefined();
            expect(typeof Flown.Board.create).toBe('function');
        });

        it('should create a new Board object', function() {
            var board = Flown.Board.create();

            expect(board).toBeDefined();
        });

    });

    describe('initialising a board', function() {

        it('should have an init function', function() {
            expect(Flown.Board.init).toBeDefined();
            expect(typeof Flown.Board.init).toBe('function');
        });

        it('should initialise a Board object', function() {
            var board = Flown.Board.create();

            expect(board.getAll()).toEqual({});
        });

    });

    describe('adding a path to the board', function() {

        var board;

        beforeEach(function() {
            board = Flown.Board.create();
        });

        it('should have an add path function', function() {
            expect(board.add).toBeDefined();
            expect(typeof Flown.Board.add).toBe('function');
        });

        it('should add the path to the board', function() {
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

        it('should have a get path function', function() {
            expect(board.get).toBeDefined();
            expect(typeof Flown.Board.get).toBe('function');
        });

        it('should return the requested path', function() {
            expect(board.get('green')).toEqual(path);
        });

    });

});
