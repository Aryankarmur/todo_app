import { useState } from "react";
import { TodoContext } from "./TodoContext";

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem("todo")) || []
  );

  return (
    <TodoContext.Provider value={{ list, setList }}>
      {children}
    </TodoContext.Provider>
  );
};
