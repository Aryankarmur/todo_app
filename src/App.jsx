import Todoinput from "./Todoinput";
import Todolist from "./Todolist";
import "./App.css";
import { TodoProvider } from "./context/TodoProvider";

const App = () => {
  return (
    <TodoProvider>
      <div className="todo-container">
        <h1>Todo List</h1>
        <p>Manage your tasks efficiently</p>
        <Todoinput />
        <Todolist />
      </div>
    </TodoProvider>
  );
};

export default App;
