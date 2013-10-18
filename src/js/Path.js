var Flown = this.Flown || {};

Flown.Path = {

    // public methods

    create: function() {
        return Object.create(this).init();
    },

    init: function() {
        this._path = [];

        return this;
    },

    get: function() {
        return this._path;
    },

    add: function( square ) {
        var existingIndex = this._indexOf(square);

        if( existingIndex >= 0 ) {
            this._path.length = existingIndex;
        }

        this._path.push(square);
    },

    // private methods

    _indexOf: function( square ) {
        var pathSquare;

        for( pathSquare in this._path ) {
            if( square.equals( this._path[pathSquare]) ) {
                return pathSquare;
            }
        }

        return -1;
    }

};
