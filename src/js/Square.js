var Flown = this.Flown || {};

Flown.Square = {
    create: function(x, y) {
        return Object.create(this).init(x,y);
    },
    init: function(x, y) {
        this.x = x;
        this.y = y;

        return this;
    }
};
