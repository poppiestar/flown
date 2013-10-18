
describe('Square', function() {

    it('is an object', function() {
        expect(Flown.Square).toBeDefined();
        expect(typeof Flown.Square).toBe('object')
    });

    describe('creating a square', function() {

        it('has a create function', function() {
            expect(Flown.Square.create).toBeDefined();
            expect(typeof Flown.Square.create).toBe('function');
        });        

        it('creates a new Square object', function() {
            var square = Flown.Square.create(5, 10);

            expect(square).toBeDefined();
        });

        it('initialises a square object upon creation', function() {
            var square = Flown.Square.create(5, 10);

            expect(square.x).toBe(5);
            expect(square.y).toBe(10);
        });

    });

    describe('initialising a square', function() {

        it('has an initialise function', function() {
            expect(Flown.Square.init).toBeDefined();
            expect(typeof Flown.Square.init).toBe('function');
        });

        it('sets the initial values of the Square object', function() {
            var square = Flown.Square.create(10, 20);

            square.init(5, 10);

            expect(square.x).toBe(5);
            expect(square.y).toBe(10);
        });

    });

    describe('checking for equality', function() {

        it('has a function to check for equality', function() {
            expect(Flown.Square.equals).toBeDefined();
            expect(typeof Flown.Square.equals).toBe('function');
        });

        it('is equal if the square coordinates match', function() {
            var squareOne = Flown.Square.create(1, 2),
                squareTwo = Flown.Square.create(1, 2);

            expect(squareOne.equals(squareTwo)).toBe(true);
            expect(squareTwo.equals(squareOne)).toBe(true);
        });

        it('is not equal if the square coordinates do not match', function() {
            var squareOne = Flown.Square.create(1, 2),
                squareTwo = Flown.Square.create(3, 4);

            expect(squareOne.equals(squareTwo)).toBe(false);
        });

    });

});
