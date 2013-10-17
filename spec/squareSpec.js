
describe('Square', function() {

    it('should be an object', function() {
        expect(Flown.Square).toBeDefined();
        expect(typeof Flown.Square).toBe('object')
    });

    describe('creating a square', function() {

        it('should have a create function', function() {
            expect(Flown.Square.create).toBeDefined();
            expect(typeof Flown.Square.create).toBe('function');
        });        

        it('should create a new Square object', function() {
            var square = Flown.Square.create(5, 10);

            expect(square).toBeDefined();
        });

        it('should initialise a square object upon creation', function() {
            var square = Flown.Square.create(5, 10);

            expect(square.x).toBe(5);
            expect(square.y).toBe(10);
        });

    });

    describe('initialising a square', function() {

        it('should have an initialise function', function() {
            expect(Flown.Square.init).toBeDefined();
            expect(typeof Flown.Square.init).toBe('function');
        });

        it('should set the initial values of a new square', function() {
            var square = Flown.Square.create(10, 20);

            square.init(5, 10);

            expect(square.x).toBe(5);
            expect(square.y).toBe(10);
        });

    });

});
