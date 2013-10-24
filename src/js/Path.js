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
        this.truncateAt(square);
        this._path.push(square);
    },

    indexOf: function( square ) {
        var pathSquare;

        for( pathSquare in this._path ) {
            if( square.equals( this._path[pathSquare]) ) {
                return parseInt(pathSquare, 10);
            }
        }

        return -1;
    },

    truncateAt: function( square ) {
        var existingIndex = this.indexOf(square);

        if( existingIndex >= 0 ) {
            this._path.length = existingIndex;
        }
    }

};
