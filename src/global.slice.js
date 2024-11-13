import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  darkMode: false,
};

// This will enable/disable the dark mode
const darkModeHandler = (isDark) => {
  if (isDark) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
};
darkModeHandler(initialState.darkMode);

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
      darkModeHandler(state.darkMode);
    },
  },
});

export const { toggleDarkMode } = globalSlice.actions;

export default globalSlice.reducer;
