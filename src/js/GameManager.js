var Flown = this.Flown || {};

Flown.GameManager = {

    create: function() {
        return Object.create(this).init();
    },

    init: function() {
        var levelPack;

        this._levelManager = Flown.LevelManager.create();
        this._gameBoard = Flown.Board.create();

        // load default level packs
        if( Flown.DefaultLevels ) {
            this._loadLevelPacks(Flown.DefaultLevels);
        }

        // load any installed level packs
        if( window.localStorage ) {
            var installedPacks = JSON.parse(window.localStorage.getItem('flown.extrapacks'));
            if( installedPacks ) {
                this._loadLevelPacks(installedPacks);
            }
        }

        return this;
    },

    // private methods

    _loadLevelPacks: function( levelPacks ) {
        var levelPack;

        for( levelPack in levelPacks ) {
            this._levelManager.addLevelPack(levelPacks[levelPack]);
        }
    }

};
