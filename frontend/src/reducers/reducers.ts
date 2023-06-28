// reducers.ts
import { combineReducers } from 'redux';
import dataReducer from './release-data/releaseDataSlice';

const rootReducer = combineReducers({
    data: dataReducer,
});

export default rootReducer;
