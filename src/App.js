import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { Todo } from "./components/Todo/Todo";

const App = () => (
  <Provider store={store}>
    <div className="App">
      <Todo />
    </div>
  </Provider>
);

export default App;
