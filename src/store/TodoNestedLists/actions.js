export const ADD_NESTED_LIST = "NESTED_LIST::ADD_NESTED_LIST";
export const CHECKED_NESTED_LIST = "NESTED_LIST::CHECKED_NESTED_LIST";
export const EDIT_NESTED_LIST = "NESTED_LIST::EDIT_NESTED_LIST";
export const DELETE_NESTED_LIST = "NESTED_LIST::DELETE_NESTED_LIST";

export const addNestedList = (id, nestedList) => ({
  type: ADD_NESTED_LIST,
  payload: {
    id,
    nestedList,
  },
});

export const checkedNestedList = (id, nestedId) => ({
  type: CHECKED_NESTED_LIST,
  payload: {
    id,
    nestedId,
  },
});

export const editNestedList = (id, nestedId, value) => ({
  type: EDIT_NESTED_LIST,
  payload: {
    id,
    nestedId,
    value,
  },
});

export const deleteNestedList = (id, nestedId) => ({
  type: DELETE_NESTED_LIST,
  payload: {
    id,
    nestedId,
  },
});
