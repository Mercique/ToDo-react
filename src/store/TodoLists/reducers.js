import { ADD_LIST, CHANGE_LIST, DELETE_LIST } from "./actions";

const initialState = [];

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return [...state, action.payload];
    }
    case CHANGE_LIST: {
      return state.map((el) => {
        if (el.id === action.payload.id) {
          return { ...el, text: action.payload.value };
        }
        return el;
      });
    }
    case DELETE_LIST: {
      return state.filter(({ id }) => id !== action.payload);
    }
    default:
      return state;
  }
};
