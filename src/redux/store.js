import {configureStore} from '@reduxjs/toolkit';
import settingsSlice from './settingsSlice';

export default configureStore({
  reducer: {
    settings: settingsSlice.reducer,
  },
});
