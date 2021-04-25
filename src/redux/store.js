import {configureStore} from '@reduxjs/toolkit';
import settingsSliceReducer from './settingsSlice';
import inputSliceReducer from './inputSlice';
import countriesSliceReducer from './countriesSlice';
import thunk from 'redux-thunk';
import countrySlice from './countrySlice';

export default configureStore({
  reducer: {
    settings: settingsSliceReducer,
    input: inputSliceReducer,
    countries: countriesSliceReducer,
    country: countrySlice,
  },
  middleware: [thunk],
});
