import "./Todo.scss";
import { useState } from "react";
import { TodoItem } from "./TodoItem";
import { Form } from "../Form/Form";

export const TodoList = () => {
  const [lists, setLists] = useState([]);

  const [nestedLists, setNestedLists] = useState(
    lists.reduce((acc, cur) => {
      acc[`${cur.id}`] = [];
      return acc;
    }, {})
  );

  const getMaxId = (list) => {
    return list.length > 0 ? list.reduce((a, b) => a > b ? a : b) + 1 : 1;
  };

  const handleAddList = (value) => {
    const getId = getMaxId(lists.map((el) => +el.id.slice(5)));

    const newList = {
      id: `list-${getId}`,
      text: value,
    };

    setLists((prevLists) => [...prevLists, newList]);
    setNestedLists((prevNestedLists) => ({
      ...prevNestedLists,
      [`list-${getId}`]: [],
    }));
  };

  const handleAddNestedList = (id, value) => {
    const newNestedList = {
      id: nestedLists[id].length + 1,
      text: value,
      checked: false,
    };

    setNestedLists((prevNestedLists) => ({
      ...prevNestedLists,
      [id]: [...prevNestedLists[id], newNestedList],
    }));
  };

  const getCheckedInNested = (nestedId, id, getChecked) => {
    let updateNestedList = nestedLists[nestedId].map((item) => {
      if (item.id === +id) {
        return { ...item, checked: getChecked };
      }
      return item;
    });

    setNestedLists((prevNestedLists) => ({
      ...prevNestedLists,
      [nestedId]: updateNestedList,
    }));
  };

  const handleDeleteList = (nestedId, id) => {
    let updateNestedList = nestedLists[nestedId].filter(
      (item) => item.id !== id
    );

    setNestedLists((prevNestedLists) => ({
      ...prevNestedLists,
      [nestedId]: updateNestedList,
    }));
  };

  const handleDeleteCategory = (nestedId, id) => {
    let updateLists = lists.filter((item) => item.id !== nestedId);

    delete nestedLists[nestedId];

    setLists(updateLists);
    setNestedLists((prevNestedLists) => {
      const newNestedList = { ...prevNestedLists };

      delete newNestedList[nestedId];
      return newNestedList;
    });
  };

  return (
    <div className="todo">
      {!lists.length ? (
        <span className="no-categories">No Categories!</span>
      ) : (
        <ol className="todo-list">
          {lists.map((list) => (
            <TodoItem
              id={list.id}
              text={list.text}
              nested={nestedLists[list.id]}
              addNested={handleAddNestedList}
              getCheckedInNested={getCheckedInNested}
              handleDeleteList={handleDeleteList}
              handleDeleteCategory={handleDeleteCategory}
              key={list.id}
            />
          ))}
        </ol>
      )}
      <Form onSubmit={handleAddList} placeholder={"Write a category..."} />
    </div>
  );
};
