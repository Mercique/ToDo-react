import { TodoList } from "../TodoList/TodoList";
import "./Todo.scss";

export const Todo = () => {
  return (
    <div className="todo">
      <h1 className="todo-header">To Do List</h1>
      <TodoList />
    </div>
  );
};
