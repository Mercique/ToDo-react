import "./Todo.scss";
import { useEffect, useState } from "react";
import { TodoItem } from "./TodoItem";
import { Form } from "../Form/Form";

export const TodoList = () => {
  const [lists, setLists] = useState([
    { id: "list-1", text: "Productivity" },
    { id: "list-2", text: "Assignments" },
    { id: "list-3", text: "Work" },
  ]);

  const [nestedLists, setNestedLists] = useState(
    lists.reduce((acc, cur) => {
      acc[`${cur.id}`] = [];
      return acc;
    }, {})
  );

  const handleAddList = (id, value) => {
    const newList = {
      id: `list-${id}`,
      text: value,
    };

    setLists((prevLists) => [...prevLists, newList]);
    setNestedLists((prevNestedLists) => ({
      ...prevNestedLists,
      [`list-${id}`]: [],
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

  useEffect(() => {
    console.log(lists);
    console.log(nestedLists);
  }, [lists, nestedLists]);

  return (
    <div className="todo">
      {!lists.length ? (
        <span>No Categories!</span>
      ) : (
        <ol className="todo-list">
          {lists.map((list) => (
            <TodoItem
              id={list.id}
              text={list.text}
              nested={nestedLists[list.id]}
              addNested={handleAddNestedList}
              getCheckedInNested={getCheckedInNested}
              key={list.id}
            />
          ))}
        </ol>
      )}
      <Form
        id={lists.length + 1}
        onSubmit={handleAddList}
        placeholder={"Write a category..."}
      />
    </div>
  );
};
