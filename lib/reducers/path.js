
function path (state = {}, action) {
    switch (action.type) {
        case 'PATH_START':
            return {
                colour: action.colour,
                points: [[action.x, action.y]]
            }

        case 'PATH_END':
            return {};

        default:
            return state;
    }
}

export default path;

