var Flown = this.Flown || {};

Flown.LevelSet = {

    create: function( levelSetData ) {
        return Object.create(this).init(levelSetData);
    },

    init: function( levelSetData ) {
        this._name = levelSetData.name;
        this._description = levelSetData.description;

        return this;
    }

};
