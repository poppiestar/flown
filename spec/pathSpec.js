
describe('Path', function() {

    it('should be an object', function() {
        expect(Flown.Path).toBeDefined();
        expect(typeof Flown.Path).toBe('object')
    });

    describe('creating a path', function() {

        it('should have a create function', function() {
            expect(Flown.Path.create).toBeDefined();
            expect(typeof Flown.Path.create).toBe('function');
        });        

        it('should create a new Path object', function() {
            var path = Flown.Path.create();

            expect(path).toBeDefined();
        });

    });

    describe('initialising a path', function() {

        it('should have an init function', function() {
            expect(Flown.Path.init).toBeDefined();
            expect(typeof Flown.Path.init).toBe('function');
        });        

        it('should initialise a Path object', function() {
            var path = Flown.Path.create();

            path.init();

            expect(path.get()).toEqual([]);
        });

    });

    describe('getting path contents', function() {

        it('should have a get function', function() {
            var path = Flown.Path.create();

            expect(path.get).toBeDefined();
            expect(typeof path.get).toBe('function');
        });

        it('should return a list of squares in the path', function() {
            var path = Flown.Path.create();

            expect(path.get()).toEqual([]);
        });

    });

    describe('adding a square to a path', function() {

        var path;

        beforeEach(function() {
            path = Flown.Path.create();
        });

        it('should have an add function', function() {
            expect(path.add).toBeDefined();
            expect(typeof path.add).toBe('function');
        });

        it('should add a square to the path', function() {
            var square = Flown.Square.create(5, 10);

            path.add(square);

            expect(path.get()).toEqual([square]);
        });

        it('should truncate a path if the same square is entered twice', function() {
            var duplicateSquare = Flown.Square.create(0, 2),
                expectedPath;

            path.add(Flown.Square.create(0,0));
            path.add(Flown.Square.create(0,1));
            path.add(duplicateSquare);
            path.add(Flown.Square.create(0,3));
            path.add(duplicateSquare);

            expect(path.get()).toEqual([Flown.Square.create(0,0), Flown.Square.create(0,1), duplicateSquare]);
        });

    });

});
