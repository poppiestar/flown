var Flown = this.Flown || {};

Flown.Level = {

    create: function( size, points ) {
        return Object.create(this).init(size, points);
    },
    
    init: function( size, points ) {
        var pointPair;

        this._size = size;
        this._points = {};

        for( pointPair in points ) {
            this._points[pointPair] = [
                Flown.Square.create(points[pointPair][0][0], points[pointPair][0][1]),
                Flown.Square.create(points[pointPair][1][0], points[pointPair][1][1])
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
