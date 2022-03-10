import "./TodoList.scss";
import { useState } from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
  const [lists, setLists] = useState([]);

  const handlerAddList = () => {
    const newTask = {
      id: `${Date.now()}`,
      text: "hello",
    };

    setLists((prevLists) => [...prevLists, newTask]);
  };

  return (
    <div className="todo">
      <button onClick={handlerAddList}>add</button>
      <ul className="todo-list">
        {lists.map((list) => (
          <TodoItem key={list.id} text={list.text} />
        ))}
      </ul>
    </div>
  );
};
