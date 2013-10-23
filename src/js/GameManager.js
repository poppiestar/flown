var Flown = this.Flown || {};

Flown.GameManager = {

    create: function() {
        return Object.create(this).init();
    },

    init: function( levelPacks ) {
        var levelPack;

        this._levelManager = Flown.LevelManager.create();
        this._gameBoard = Flown.Board.create();

        // load default level packs
        if( Flown.DefaultLevels ) {
            for( levelPack in Flown.DefaultLevels ) {
                this._levelManager.addLevelPack(Flown.DefaultLevels[levelPack]);
            }
        }

        if( window.localStorage ) {
            console.log('going to check localStorage for extra level packs!');
        }

        return this;
    }

};
