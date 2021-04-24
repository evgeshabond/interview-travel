import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  language: 'en',
  theme: 'light',
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setLanguage(state, action) {
      const {language} = action.payload;
      state['language'] = language;
    },
    setTheme(state, action) {
      const {theme} = action.payload;
      state['theme'] = theme;
    },
  },
});

export default settingsSlice;
