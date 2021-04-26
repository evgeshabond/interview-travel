import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getCountryDataByLang} from '../service/countries';


const initialState = {
  country: [],
  status: 'idle',
  error: null,
};


export const fetchCountry = createAsyncThunk('country/fetchCountry',
    async ({countryId, language}) => {
      const response = await getCountryDataByLang(countryId, language);
      return response;
    });

const countrySlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {
    setCountry(state, action) {
      const {countriesData} = action.payload;
      state['country'] = countriesData;
    },
  },
  extraReducers: {
    [fetchCountry.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchCountry.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.country = action.payload;
    },
    [fetchCountry.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});

export const {setCountry} = countrySlice.actions;
export default countrySlice.reducer;
