
describe('Path', function() {

    it('is an object', function() {
        expect(Flown.Path).toBeDefined();
        expect(typeof Flown.Path).toBe('object');
    });

    describe('creating a path', function() {

        it('has a create function', function() {
            expect(Flown.Path.create).toBeDefined();
            expect(typeof Flown.Path.create).toBe('function');
        });        

        it('creates a new Path object', function() {
            var path = Flown.Path.create();

            expect(path).toBeDefined();
            expect(path._path).toEqual({});
        });

    });

    describe('initialising a path', function() {

        it('has an initialisation function', function() {
            expect(Flown.Path.init).toBeDefined();
            expect(typeof Flown.Path.init).toBe('function');
        });        

        it('sets the initial values of the Path object', function() {
            var path = Flown.Path.create();

            path.add(Flown.Square.create(0,0));
            path.init();

            expect(path.get()).toEqual([]);
        });

    });

    describe('getting path contents', function() {

        it('has a get function', function() {
            var path = Flown.Path.create();

            expect(path.get).toBeDefined();
            expect(typeof path.get).toBe('function');
        });

        it('returns a list of squares in the path', function() {
            var path = Flown.Path.create();

            expect(path.get()).toEqual([]);
        });

    });

    describe('adding a square to a path', function() {

        var path;

        beforeEach(function() {
            path = Flown.Path.create();
        });

        it('has an add function', function() {
            expect(path.add).toBeDefined();
            expect(typeof path.add).toBe('function');
        });

        it('adds a square to the path', function() {
            var square = Flown.Square.create(5, 10);

            path.add(square);

            expect(path.get()).toEqual([square]);
        });

        it('truncates a path if the same square is added twice', function() {
            var duplicateSquare = Flown.Square.create(0, 2);

            path.add(Flown.Square.create(0,0));
            path.add(Flown.Square.create(0,1));
            path.add(duplicateSquare);
            path.add(Flown.Square.create(0,3));
            path.add(duplicateSquare);

            expect(path.get()).toEqual([Flown.Square.create(0,0), Flown.Square.create(0,1), duplicateSquare]);
        });

    });

    describe('finding the index of a square in the path', function() {

        var path,
            square;

        beforeEach(function() {
            path = Flown.Path.create();
            square = Flown.Square.create(5, 10);
        });

        it('has a function to find the index of a square in the path', function() {
            expect(path.indexOf).toBeDefined();
            expect(typeof path.indexOf).toBe('function');
        });

        it('returns the index in the path where the square exists', function() {
            path.add(square);

            expect(path.indexOf(square)).toEqual(0);
        });

        it('returns -1 if the square is not in the path', function() {
            expect(path.indexOf(square)).toEqual(-1);
        });

    });

    describe('truncating a path at a square', function() {

        var path,
            square;

        beforeEach(function() {
            path = Flown.Path.create();
            square = Flown.Square.create(5, 10);
        });

        it('has a truncate path function', function() {
            expect(path.truncateAt).toBeDefined();
            expect(typeof path.truncateAt).toBe('function');
        });

        it('truncates a path at square', function() {
            var truncateSquare = Flown.Square.create(0, 2);

            path.add(Flown.Square.create(0,0));
            path.add(Flown.Square.create(0,1));
            path.add(truncateSquare);
            path.add(Flown.Square.create(0,3));
            path.add(Flown.Square.create(0,4));

            path.truncateAt(truncateSquare);

            expect(path.get()).toEqual([Flown.Square.create(0,0), Flown.Square.create(0,1)]);
        });

    });

});
