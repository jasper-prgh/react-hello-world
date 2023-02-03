import { useState } from "react";
import TodoInputs from "./TodoInputs/TodoInputs";
import TodoList from "./TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoInputs addTodo={todo => setTodos([...todos, todo])} />
      <TodoList todos={todos} />
    </>);
}

export default App;
