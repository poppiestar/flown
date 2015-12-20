
function grid (state = {}, action) {
    switch (action.type) {
        case 'GRID_SET_SIZE':
            return {
                size: action.size
            };

        default:
            return state;
    }
}

export default grid;

