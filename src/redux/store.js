import {configureStore} from '@reduxjs/toolkit';
import settingsSliceReducer from './settingsSlice';

export default configureStore({
  reducer: {
    settings: settingsSliceReducer,
  },
});
