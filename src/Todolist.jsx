import { useContext } from "react";
import "./assets/css/Todolist.css";
import { TodoContext } from "./context/TodoContext";
const Todolist = () => {
  const { list, setList } = useContext(TodoContext);

  localStorage.setItem("todo", JSON.stringify(list));

  const handelTodoElem = (e) => {
    // delete functionality
    if (e.target.innerText === "🗑") {
      const item =
        e.target.parentElement.querySelector("input[name='todo']").value;

      const updatedList = list.filter(
        (todo) => todo.text !== item.toLowerCase()
      );

      setList(updatedList);
      localStorage.setItem("todo", JSON.stringify(updatedList));
    }

    //edit functionality
    else if (e.target.innerText === "📝") {
      const item =
        e.target.parentElement.querySelector("input[name='todo']").value;

      const updatedList = list.map((todo) => {
        if (todo.text === item.toLowerCase()) {
          return { ...todo, istrue: !todo.istrue };
        }
        return todo;
      });

      setList(updatedList);
      localStorage.setItem("todo", JSON.stringify(updatedList));
    }
  };

  return (
    <>
      <ul className="todo-list" onClick={handelTodoElem}>
        {list
          .sort((a, b) => a.text.localeCompare(b.text))
          .map((item, index) => (
            <li key={index}>
              <input
                type="text"
                value={item.text}
                disabled={item.istrue}
                name="todo"
                style={item.istrue ? { border: "none" } : null}
                onChange={(e) => {
                  const updatedList = list.map((todo) => {
                    if (todo.text === item.text.toLowerCase()) {
                      return { ...todo, text: e.target.value };
                    }
                    return todo;
                  });
                  setList(updatedList);
                  localStorage.setItem("todo", JSON.stringify(updatedList));
                }}
              />
              <button title="Edite Task">📝</button>
              <button className="delete" title="Delete Task">
                🗑
              </button>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Todolist;
