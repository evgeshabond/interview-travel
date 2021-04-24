import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCountriesByLang} from '../service/countries';

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

export const fetchCountries = createAsyncThunk('countries/fetchCountries',
    async (language) => {
      const response = await getCountriesByLang(language);
      return response;
    });

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountries(state, action) {
      const {countriesData} = action.payload;
      state['countries'] = countriesData;
    },
  },
  extraReducers: {
    [fetchCountries.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCountries.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.countries = action.payload;
    },
    [fetchCountries.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {setCountries} = countriesSlice.actions;
export default countriesSlice.reducer;
