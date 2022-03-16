import { createStore, combineReducers } from "redux";
import { listsReducer } from "./TodoLists/reducers";
import { nestedListsReducer } from "./TodoNestedLists/reducers";

const rootReducer = combineReducers({
  lists: listsReducer,
  nestedLists: nestedListsReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
