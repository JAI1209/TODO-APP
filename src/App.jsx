import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false, priority: "medium" },
  ]);

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false, priority: "low" };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const editTodo = (id, newText) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  const setPriority = (id, priority) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, priority } : todo
      )
    );
  };

  const completedCount = todos.filter(todo => todo.completed).length

  return (
    <div className="app-container">
      <p>Completed: {completedCount} / {todos.length}</p>
      <Header onAdd={addTodo} />
      <ToDoList
        todos={todos}
        onDelete={deleteTodo}
        onToggle={toggleComplete}
        onEdit={editTodo}
        onPriority={setPriority}
      />
    </div>
  );
}

export default App;
