
describe('Square', function() {

    it('should be an object', function() {
        expect(Flown.Square).toBeDefined();
    });

    it('should have a create function', function() {
        expect(Flown.Square.create).toBeDefined();
        expect(typeof Flown.Square.create).toBe('function');
    });

    it('should be able to initialise a new square', function() {
        expect(Flown.Square.init).toBeDefined();
        expect(typeof Flown.Square.init).toBe('function');
    });

});
