import { ADD_LIST, DELETE_LIST } from "./actions";

const initialState = [];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return [...state, action.payload];
    }
    case DELETE_LIST: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default:
      return state;
  }
};
