import { useEffect, useState } from "react";
import Header from "./Header/Header";
import TodoInputs from "./TodoInputs/TodoInputs";
import TodoList from "./TodoList/TodoList";

function App() {
  const [todos, setTodos] = useState(() => {
    const todos = JSON.parse(localStorage.getItem('todos'));
    if (!todos) {
      return [];
    }
    if (todos.length) {
      return todos;
    }
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Header>
      </Header>
      <TodoInputs addTodo={todo => setTodos([...todos, todo])} />
      <TodoList todos={todos} hss={[1,2,3,4,5]} />
    </>);
}

export default App;
