
function marker (state = {}, action) {
    switch (action.type) {
        case 'MARKER_UPDATE':
            return {
                x: action.x,
                y: action.y,
                gridX: action.gridX,
                gridY: action.gridY
            };

        default:
            return state;
    }
}

export default marker;

