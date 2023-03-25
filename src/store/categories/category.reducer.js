import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES_INITIAL_STATE = {
  categories: [],
};

export const categorySlice = createSlice({
  name: "categories",
  initialState: CATEGORIES_INITIAL_STATE,
  reducers: {
    setCategories(state,action){
      state.categories = action.payload;
    }
  }
});

export const {setCategories} = categorySlice.actions;

export const categoriesReducer = categorySlice.reducer;

// export const categoriesReducer = (
//   state = CATEGORIES_INITIAL_STATE,
//   action = {}
// ) => {
//   const { type, payload } = action;

//   switch (type) {
//     case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
//       return { ...state, categories: payload };
//     default:
//       return state;
//   }
// };


/*
const INITIAL_STATE = {
  currentUser: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state,action){
      state.currentUser = action.payload;
    }
  }
});

export const { setCurrentUser} = userSlice.actions;

export const userReducer = userSlice.reducer;
*/