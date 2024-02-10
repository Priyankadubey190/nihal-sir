import { useGetTodosQuery, useDeleteTodoMutation } from "@/store/todo.slice";
import React from "react";
import style from "./todolist.module.scss";

const TodoList: React.FC = () => {
  const { data: todos, isSuccess, isLoading } = useGetTodosQuery();

  const [deleteTodo, { isSuccess: deleteSuccess }] = useDeleteTodoMutation();

  isSuccess && console.log("todos", todos);
  return (
    <div>
      <h2>Todo List</h2>
      {isSuccess ? (
        <ul>
          {todos?.map((todo, ind) => {
            return (
              <div key={ind + todo.id} className={style.container}>
                <li key={todo.id}>{todo.title}</li>
                <button
                  onClick={() => {
                    deleteTodo(todo.id);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default TodoList;
