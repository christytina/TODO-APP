import React, { useState, useEffect, useMemo } from "react";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm";
import "./Todo.css";
import { useTheme } from "./ThemeContext";
const Todo = () => {
  const { theme, toggleTheme } = useTheme();
  const [todos, setTodos] = useState(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      return JSON.parse(storedTodos);
    }
    return [];
  });
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  useMemo(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const filteredTodos = todos.filter((todo) => {
    const searchWords = searchQuery.toLowerCase().trim();
    return (
      todo.text.toLowerCase().includes(searchWords) &&
      (filter == "all" ||
        (filter == "completed" && todo.completed) ||
        (filter == "incomplete" && !todo.completed))
    );
  });

  return (
    <div className={`container ${theme}`}>
      <h1>Todo App</h1>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
      <TodoForm onAdd={addTodo} />
      <div className="filters">
        <input
          style={{
            backgroundColor: theme === "dark" ? "#333" : "#fff",
            color: theme === "dark" ? "#fff" : "#333",
          }}
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search Todos..."
          className="search-input"
        />
        <div className="filter-buttons">
          <button
            className={filter === "all" ? "active" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={filter === "completed" ? "active" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
          <button
            className={filter === "incomplete" ? "active" : ""}
            onClick={() => setFilter("incomplete")}
          >
            Incomplete
          </button>
        </div>
      </div>
      <TodoList
        todos={filteredTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  );
};

export default Todo;
