import "./App.css";
import { TodoList } from "./components/Todo/TodoList";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <div className="App-todo">
        <h1 className="App-todo__header">To Do List</h1>
        <TodoList />
      </div>
    </div>
  </Provider>
);

export default App;
