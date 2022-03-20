export const ADD_LIST = "LIST::ADD_LIST";
export const CHANGE_LIST = "LIST::CHANGE_LIST";
export const DELETE_LIST = "LIST::DELETE_LIST";

export const addList = (list) => ({
  type: ADD_LIST,
  payload: list,
});

export const changeList = (id, value) => ({
  type: CHANGE_LIST,
  payload: {
    id,
    value,
  },
});

export const deleteList = (id) => ({
  type: DELETE_LIST,
  payload: id,
});
