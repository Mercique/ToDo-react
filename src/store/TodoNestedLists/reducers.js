import { ADD_LIST, DELETE_LIST } from "../TodoLists/actions";
import {
  ADD_NESTED_LIST,
  CHECKED_NESTED_LIST,
  DELETE_NESTED_LIST,
  EDIT_NESTED_LIST,
} from "./actions";

const initialState = {};

export const nestedListsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      return {
        ...state,
        [action.payload.id]: [],
      };
    }
    case ADD_NESTED_LIST: {
      return {
        ...state,
        [action.payload.id]: [
          ...state[action.payload.id],
          action.payload.nestedList,
        ],
      };
    }
    case CHECKED_NESTED_LIST: {
      const updateChecked = state[action.payload.id].map((item) => {
        if (item.id === action.payload.nestedId) {
          return { ...item, checked: !item.checked };
        }
        return item;
      });

      return {
        ...state,
        [action.payload.id]: updateChecked,
      };
    }
    case EDIT_NESTED_LIST: {
      const updateNestedList = state[action.payload.id].map((el) => {
        if (el.id === action.payload.nestedId) {
          return { ...el, text: action.payload.value };
        }
        return el;
      });
      return {
        ...state,
        [action.payload.id]: updateNestedList,
      };
    }
    case DELETE_NESTED_LIST: {
      const updateNestedList = state[action.payload.id].filter(
        ({ id }) => id !== action.payload.nestedId
      );
      return {
        ...state,
        [action.payload.id]: updateNestedList,
      };
    }
    case DELETE_LIST: {
      const updateNestedList = { ...state };
      delete updateNestedList[action.payload];
      return updateNestedList;
    }
    default:
      return state;
  }
};
