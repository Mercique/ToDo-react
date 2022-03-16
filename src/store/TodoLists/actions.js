export const ADD_LIST = "LIST::ADD_LIST";
export const DELETE_LIST = "LIST::DELETE_LIST";

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: id,
});
