import { useAddTodoMutation, useGetTodosQuery } from "@/store/todo.slice";
import React, { useState } from "react";

const TodoForm: React.FC = () => {
  const [title, setTitle] = useState("");
  const [addTodo, { isError }] = useAddTodoMutation();

  const { data: todos, isSuccess, isLoading } = useGetTodosQuery();

  const handleSubmit = () => {
    if (title.trim()) {
      addTodo({ id: Math.random(), title, completed: false });
      setTitle("");
    }
  };

  isError && "post error";

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Enter a new todo"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default TodoForm;
