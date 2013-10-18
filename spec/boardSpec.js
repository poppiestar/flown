
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
            var path = Flown.Path.create();

            expect(path).toBeDefined();
        });

    });

});
