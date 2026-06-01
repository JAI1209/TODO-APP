import { useState } from "react";

function ToDoItem({ todo, onDelete, onToggle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (!editText.trim()) return;
    onEdit(todo.id, editText.trim());
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      {isEditing ? (
        <>
          <input
            className="edit-input"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
          <button className="save-btn" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span className="todo-text">{todo.text}</span>
          <button className="edit-btn" onClick={() => setIsEditing(true)}>✏️</button>
        </>
      )}

      <button className="delete-btn" onClick={() => onDelete(todo.id)}>🗑️</button>
    </li>
  );
}

export default ToDoItem;