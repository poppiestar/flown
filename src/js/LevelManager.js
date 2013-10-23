var Flown = this.Flown || {};

Flown.LevelManager = {

    create: function( levelPacks ) {
        return Object.create(this).init(levelPacks);
    },

    init: function( levelPacks ) {
        var pack;

        this._packs = [];

        for( pack in levelPacks ) {
            this.addLevelPack(levelPacks[pack]);
        }

        return this;
    },

    getLevelPack: function( levelPack ) {
        return this._packs[levelPack-1];
    },

    addLevelPack: function( levelPack ) {
        this._packs.push(Flown.LevelPack.create(levelPack));
    }

};
