var Flown = this.Flown || {};

Flown.Level = {

    create: function( levelData ) {
        return Object.create(this).init(levelData);
    },
    
    init: function( levelData ) {
        var pointPair;

        this._size = levelData.size;
        this._points = {};

        for( pointPair in levelData.points ) {
            this._points[pointPair] = [
                Flown.Square.create(levelData.points[pointPair][0][0], levelData.points[pointPair][0][1]),
                Flown.Square.create(levelData.points[pointPair][1][0], levelData.points[pointPair][1][1])
            ];
        }

        return this;
    },

    getAllPoints: function() {
        return this._points;
    },

    getEndSquare: function( path, start ) {
        var points = this._points[path];

        // return the opposite square to the one entered
        if( points[0].equals(start) ) {
            return points[1];
        } else {
            return points[0];
        }
    }

};
