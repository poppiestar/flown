var Flown = this.Flown || {};

Flown.LevelPack = {

    create: function( levelPackData ) {
        return Object.create(this).init(levelPackData);
    },

    init: function( levelPackData ) {
        var levelSet;

        this._name = levelPackData.name;
        this._description = levelPackData.description;
        this._sets = [];

        for( levelSet in levelPackData.sets ) {
            this._sets.push(Flown.LevelSet.create(levelPackData.sets[levelSet]));
        }

        return this;
    }

};
