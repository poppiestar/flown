var Flown = this.Flown || {};

Flown.LevelSet = {

    create: function( levelSetData ) {
        return Object.create(this).init(levelSetData);
    },

    init: function( levelSetData ) {
        var level;

        this._name = levelSetData.name;
        this._description = levelSetData.description;
        this._levels = [];

        for( level in levelSetData.levels ) {
            this._levels.push(Flown.Level.create(levelSetData.levels[level]));
        }

        return this;
    }

};
