// reducers.ts
import dataReducer from './release-data/releaseDataSlice';
import themeReducer from './theme/themeSlice';

const rootReducer = {
    data: dataReducer,
    theme: themeReducer,
};

export default rootReducer;
