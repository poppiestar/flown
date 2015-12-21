
import { combineReducers } from 'redux';

import marker from './reducers/marker';
import grid from './reducers/grid';
import board from './reducers/board';

const state = combineReducers({
    marker,
    grid,
    board 
});

export default state;

