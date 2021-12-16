import React, { useState } from "react";
import { nanoid } from "nanoid";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Heading from "./components/Heading";

function App(props) {
  const [todos, setTodos] = useState(data);
  const [activeCount, setActiveCount] = useState(todos.filter(todo => todo.completed===false).length);
  
  function getActiveCount() {
    // Return the number of uncompleted todos
    const activeTodos = todos.filter(todo => todo.completed===false).length;
    setActiveCount(activeTodos);
  }
  
  const todoList = todos.map((todo) => (
    <Todo
      id={todo.id}
      name={todo.name}
      completed={todo.completed}
      key={todo.id}
      active={activeCount}
      updateCount={getActiveCount}
    />
  ));

  function addTodo(name) {
    const newTodo = { id: `todoID-${nanoid()}`, name: name, completed: false };
    setTodos([...todos, newTodo]);
    setActiveCount(activeCount + 1);
  }

  return (
    <div className="todos">
      <Heading count={activeCount} />
      <Form addTodo={addTodo} todoList={todoList} />
      <small>Left-click to toggle complete/incomplete.</small>
    </div>
  );
}

export default App;