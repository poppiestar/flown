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
    },

    getLevelSet: function( levelSet ) {
        return this._sets[levelSet-1];
    },

    getSetsLength: function() {
        return this._sets.length;
    },

    getLevelsLength: function() {
        var levels = 0,
            i,
            j;

        for( i=0, j=this.getSetsLength(); i<j; i++ ) {
            levels += this._sets[i].getSize();
        }

        return levels;
    }

};
