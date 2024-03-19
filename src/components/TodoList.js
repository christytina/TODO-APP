import React from "react";
import TodoItem from "./TodoItem";
import { useTheme } from "./ThemeContext";

const TodoList = ({ todos, onDelete, onToggle, filter }) => {
  const { theme } = useTheme();
  const filteredTodos = todos.filter((todo) => {
    if (filter === "completed") {
      return todo.completed;
    } else if (filter === "incomplete") {
      return !todo.completed;
    }
    return true;
  });

  return (
    <div className={`todo-list ${theme}`}>
      {filteredTodos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TodoList;
