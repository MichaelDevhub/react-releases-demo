// reducers.ts
import dataReducer from './release-data/releaseDataSlice';

const rootReducer = {
    data: dataReducer,
};

export default rootReducer;
