import ToDoItem from "./ToDoItem";

function ToDoList({ todos, onDelete, onToggle, onEdit }) {
  if (todos.length === 0)
    return <p className="empty">No tasks yet! Add one above ☝️</p>;

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <ToDoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
          onEdit={onEdit}
        />
      ))}
    </ul>
  );
}

export default ToDoList;