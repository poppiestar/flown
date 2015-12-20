
function coords (state = {}, action) {
    switch (action.type) {
        case 'COORDS_UPDATE': {
            return {
                x: action.x,
                y: action.y
            };
        }

        default: 
            return state;

    }
}

export default coords;

