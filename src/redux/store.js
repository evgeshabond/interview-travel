import {configureStore} from '@reduxjs/toolkit';
import settingsSliceReducer from './settingsSlice';
import inputSliceReducer from './inputSlice';
import countriesSliceReducer from './countriesSlice';
import thunk from 'redux-thunk';

export default configureStore({
  reducer: {
    settings: settingsSliceReducer,
    input: inputSliceReducer,
    countries: countriesSliceReducer,
  },
  middleware: [thunk],
});
