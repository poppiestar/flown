
function board (state = {}, action) {
    switch (action.type) {
        case 'PATH_START':
            const marker = state.marker;
            
            return Object.assign({}, state, {
                active: true
            });

        case 'PATH_END':
            return Object.assign({}, state, {
                active: false
            });

        default:
            return state;
    }
}

export default board;

