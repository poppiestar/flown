var Flown = this.Flown || {};

Flown.Path = {

    _path: [],

    create: function() {
        return Object.create(this);
    },

    get: function() {
        return this._path;
    },

    add: function( square ) {
        this._path.push(square);
    }

};
