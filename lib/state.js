
import { combineReducers } from 'redux';

import marker from './reducers/marker';
import grid from './reducers/grid';
import path from './reducers/path';

const state = combineReducers({
    marker,
    grid,
    path
});

export default state;

