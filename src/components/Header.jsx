import { useState } from "react";

function Header({ onAdd }) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onAdd(input.trim());
    setInput("");
  };

  return (
    <header className="header">
      <h1>📝 My To-Do List</h1>
      <div className="input-row">
        <input
          type="text"
          placeholder="Add a new task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSubmit()}
        />
        <button onClick={handleSubmit}>Add</button>
      </div>
    </header>
  );
}

export default Header;