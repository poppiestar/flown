
function marker (state = {}, action) {
    switch (action.type) {
        case 'MARKER_CLEAR':
            return {};

        case 'MARKER_UPDATE':
            return {
                x: action.x,
                y: action.y
            };

        default:
            return state;
    }
}

export default marker;

