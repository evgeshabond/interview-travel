import {configureStore} from '@reduxjs/toolkit';
import settingsSliceReducer from './settingsSlice';
import inputSliceReducer from './inputSlice';

export default configureStore({
  reducer: {
    settings: settingsSliceReducer,
    input: inputSliceReducer,
  },
});
