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
        var square;

        delete this._paths[name];
        this._updatePaths(path.get());
        this._paths[name] = path;
        this._updateBoard();
    },

    getPath: function( name ) {
        return this._paths[name];
    },

    getPathAt: function( square ) {
        if( this._board[square.x - 1][square.y - 1] ) {
            return this.getPath(this._board[square.x - 1][square.y - 1].colour);
        }
    },

    getAllPaths: function() {
        return this._paths;
    },

    getSize: function() {
        return this._size;
    },

    getSquares: function() {
        return this._size * this._size;
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

    _updateBoard: function() {
        var path;

        this._board = this._initBoard(this._size);

        for( path in this._paths ) {
            this._addPathToBoard( path, this._paths[path].get() );
        }
    },

    _addPathToBoard: function( name, path ) {
        var square;

        for( square in path ) {
            this._board[path[square].x - 1][path[square].y - 1] = {
                colour: name
            };
        }
    },

    _updatePaths: function( newPath ) {
        var allPaths = this.getAllPaths(),
            currentPath,
            currentSquare,
            path,
            square;

        // loop through each square in the new path and see if it exists in any other path
        for( square in newPath ) {
            currentSquare = newPath[square];

            // loop through existing paths
            for( path in allPaths ) {
                currentPath = allPaths[path];

                if( currentPath.indexOf(currentSquare) ) {
                    // found a path with a crossing square
                    currentPath.truncateAt(currentSquare);
                }
            }

        }

    }

};
