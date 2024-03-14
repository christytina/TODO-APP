import React from "react";

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className="todo-item">
      <span>{todo.text}</span>
      <div className="button-container">
        <button
          onClick={() => onToggle(todo.id)}
          style={{
            backgroundColor: todo.completed ? "#2ecc71" : "#3498db",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          {todo.completed ? "Completed" : "Mark Complete"}
        </button>
        <button
          onClick={() => {
            if (window.confirm("Are you sure you want to delete this task?")) {
              onDelete(todo.id);
            }
          }}
          style={{
            backgroundColor: "#ff6b6b",
            color: "#fff",
            border: "none",
            padding: "8px 12px",
            borderRadius: "4px",
            cursor: "pointer",
            transition: "background-color 0.3s",
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
