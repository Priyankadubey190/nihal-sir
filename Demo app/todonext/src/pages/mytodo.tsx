import TodoForm from "@/components/TodoForm";
import TodoList from "@/components/TodoList";
import Todo from "@/components/TodoList";
import React from "react";

const mytodo = () => {
  return (
    <div>
      <h1>Todo App</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
};

export default mytodo;
