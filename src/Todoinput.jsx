import { useContext } from "react";
import "./assets/css/Todoinput.css";
import { TodoContext } from "./context/TodoContext";

const Todoinput = () => {
  const { setList } = useContext(TodoContext);
  const handeltodos = (e) => {
    e.preventDefault();
    const todo = e.target.todo.value.trim();
      if (todo) {
        // Check if the input is not empty and trim any whitespace
        const todolist = JSON.parse(localStorage.getItem("todo")) || [];
        
      if (todolist.some((item) => item === todo)) {
        alert("This task already exists!"); // Alert if the todo already exists
        e.target.todo.value = ""; // Clear the input field after submission
        return;
      } else {

        setList((prev) => [...prev, { id: todo, text: todo, istrue:true}]);
        e.target.todo.value = ""; // Clear the input field after submission
      }
    }
  };

  return (
    <form onSubmit={handeltodos}>
      <input
        type="text"
        name="todo"
        placeholder="Add a new task"
        autoFocus
        required
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Todoinput;
