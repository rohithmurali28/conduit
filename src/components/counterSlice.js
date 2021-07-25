import { createSlice } from "@reduxjs/toolkit";


export const slice = createSlice({
  name: 'article',
  initialState: {
    value: 0,
    articleDetails: [],
  },
  reducers: {
    increment: (state, action) => {
      state.value += action.payload;
    },
    addArticleDetails: (state, action) => {
      state.value += 1;
      state.articleDetails = action.payload;
    },
  }

});

export const { increment, addArticleDetails } = slice.actions;

export const selectCount = state => state.counter.value;

export default slice.reducer;