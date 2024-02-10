import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "../redux/store";
import { addTodo, removeTodo, fetchTodos, Todo } from "../redux/actions";
import AddTodo from "./AddTodo";

const TodoList: React.FC = () => {
  const todos = useSelector((state: any) => state.todos.todos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleAddTodo = (text: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      text,
      completed: false,
    };
    dispatch(addTodo(newTodo));
  };

  const handleRemoveTodo = (id: number) => {
    dispatch(removeTodo(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <AddTodo onAddTodo={handleAddTodo} />
    </div>
  );
};

export default TodoList;
