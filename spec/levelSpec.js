
describe('Level', function() {

    it('is an object', function() {
        expect(Flown.Level).toBeDefined();
        expect(typeof Flown.Level).toBe('object');
    });

    describe('creating a level', function() {

        it('has a create function', function() {
            expect(Flown.Level.create).toBeDefined();
            expect(typeof Flown.Level.create).toBe('function');
        });

        it('creates a new Level object', function() {
            var level = Flown.Level.create(exampleLevel1);

            expect(level).toBeDefined();

            expect(level._points["red"]).toBeDefined();
            expect(level._points["orange"]).toBeDefined();
            expect(level._size).toBe(exampleLevel1.size);
        });

    });

    describe('initialising a level', function() {

        it('has an initialisation function', function() {
            expect(Flown.Level.init).toBeDefined();
            expect(typeof Flown.Level.init).toBe('function');
        });        

        it('sets the initial values of the Level object', function() {
            var level;

            level = Flown.Level.create(exampleLevel1);

            level.init(exampleLevel2);

            expect(level._points["blue"]).toBeDefined();
            expect(level._size).toBe(exampleLevel2.size);
            expect(level._points["red"]).not.toBeDefined();
            expect(level._points["orange"]).not.toBeDefined();
        });

    });

    describe('listing a set of points', function() {

        var level;

        beforeEach(function() {
            level = Flown.Level.create(exampleLevel1);
        });

        it('has a get all points function', function() {
            expect(Flown.Level.getAllPoints).toBeDefined();
            expect(typeof Flown.Level.getAllPoints).toBe('function');
        });

        it('returns an object containing the start/end points for the level', function() {
            var points = level.getAllPoints();

            expect(typeof points).toBe('object');

            expect(points["red"]).toBeDefined();
            expect(points["orange"]).toBeDefined();
        });

    });

    describe('getting the end point for a given start point', function() {

        var level;

        beforeEach(function() {
            level = Flown.Level.create(exampleLevel1);
        });

        it('has a get end square function', function() {
            expect(Flown.Level.getEndSquare).toBeDefined();
            expect(typeof Flown.Level.getEndSquare).toBe('function');
        });

        it('returns the end square for the given path and start square', function() {
            var startSquare = Flown.Square.create(0, 0),
                expectedEndSquare = Flown.Square.create(1, 4),
                endSquare;

            endSquare = level.getEndSquare('red', startSquare);

            expect(endSquare.equals(expectedEndSquare)).toBe(true);
        });

    });

});
