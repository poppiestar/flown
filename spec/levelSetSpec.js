
describe('Level Set', function() {

    it('is an object', function() {
        expect(Flown.LevelSet).toBeDefined();
        expect(typeof Flown.LevelSet).toBe('object')
    });

    describe('creating a level set', function() {

        it('has a create function', function() {
            expect(Flown.LevelSet.create).toBeDefined();
            expect(typeof Flown.LevelSet.create).toBe('function');
        });

        it('creates a new level set object', function() {
            var levelSet = Flown.LevelSet.create(exampleLevelSet1);

            expect(levelSet).toBeDefined();
            expect(levelSet._name).toBe(exampleLevelSet1.name);
            expect(levelSet._description).toBe(exampleLevelSet1.description);
            expect(levelSet._levels.length).toBe(3);
        });

    });

    describe('initialising a level set', function() {

        it('has an initialisation function', function() {
            expect(Flown.LevelSet.init).toBeDefined();
            expect(typeof Flown.LevelSet.init).toBe('function');
        });

    });

});
