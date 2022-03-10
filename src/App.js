import "./App.css";
import { TodoList } from "./components/Todo/TodoList";

const App = () => (
  <div className="App">
    <div className="App-todo">
      <h1 className="App-todo__header">To Do List</h1>
      <TodoList />
    </div>
  </div>
);

export default App;
