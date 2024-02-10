import { api } from "./serverApi";

import { URL } from "./serverApi";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export const todoApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getTodos: builder.query<Array<Todo>, void>({
      query: () => ({
        url: URL,
        method: "GET",
      }),
      providesTags: ["mytodo"],
    }),
    addTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (todo) => ({
        url: URL,
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["mytodo"],
    }),
    updateTodo: builder.mutation<Todo, Partial<Todo>>({
      query: (todo) => ({
        url: `${URL}/${todo.id}`,
        method: "PUT",
        body: todo,
      }),
      invalidatesTags: ["mytodo"],
    }),
    deleteTodo: builder.mutation<{ id: number }, number>({
      query: (id) => ({
        url: `${URL}/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["mytodo"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
