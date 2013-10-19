var Flown = this.Flown || {};

Flown.Board = {

    create: function() {
        return Object.create(this).init();
    },

    init: function() {
        this._paths = {};

        return this;
    },

    add: function( name, path ) {
        this._paths[name] = path;
    },

    get: function( name ) {
        return this._paths[name];
    },

    getAll: function() {
        return this._paths;
    }

};
