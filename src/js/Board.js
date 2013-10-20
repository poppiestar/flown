var Flown = this.Flown || {};

Flown.Board = {

    create: function( size ) {
        return Object.create(this).init(size);
    },

    init: function( size ) {
        this._paths = {};
        this._size = size;
        this._board = this._initBoard(size);

        return this;
    },

    addPath: function( name, path ) {
        this._paths[name] = path;
        this._addPathToBoard(name, path.get());
    },

    getPath: function( name ) {
        return this._paths[name];
    },

    getPathAt: function( square ) {
        return this._paths[this._board[square.x][square.y].colour];
    },

    getAllPaths: function() {
        return this._paths;
    },

    getSize: function() {
        return this._size;
    },

    // private methods

    _initBoard: function( size ) {
        var board,
            i;

        board = new Array(size);

        for( i=0; i<size; i++ ) {
            board[i] = new Array(size);
        }

        return board;
    },

    _addPathToBoard: function( name, path ) {
        var square;

        for( square in path ) {
            this._board[path[square].x][path[square].y] = {
                colour: name
            };
        }
    }

};
