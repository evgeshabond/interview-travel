import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  inputText: '',
};

const inputSlice = createSlice({
  name: 'input',
  initialState,
  reducers: {
    setText(state, action) {
      const {text} = action.payload;
      state['inputText'] = text;
    },
  },
});

export const {setText} = inputSlice.actions;
export default inputSlice.reducer;
