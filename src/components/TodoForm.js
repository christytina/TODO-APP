import React, { useState } from "react";
import { useTheme } from "./ThemeContext";

const TodoForm = ({ onAdd }) => {
  const { theme } = useTheme();
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ color: theme === "dark" ? "#fff" : "#333" }}
      className="todo-input"
    >
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo..."
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#333",
        }}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
