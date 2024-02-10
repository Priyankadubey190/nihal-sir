import axios from "axios";
import { ThunkAction } from "redux-thunk";
// import { RootState } from "../store";

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const FETCH_TODOS_SUCCESS = "FETCH_TODOS_SUCCESS";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface AddTodoAction {
  type: typeof ADD_TODO;
  payload: Todo;
}

interface RemoveTodoAction {
  type: typeof REMOVE_TODO;
  payload: number;
}

interface FetchTodosSuccessAction {
  type: typeof FETCH_TODOS_SUCCESS;
  payload: Todo[];
}

export type TodoActionTypes =
  | AddTodoAction
  | RemoveTodoAction
  | FetchTodosSuccessAction;

export const addTodo = (todo: Todo): AddTodoAction => ({
  type: ADD_TODO,
  payload: todo,
});

export const removeTodo = (id: number): RemoveTodoAction => ({
  type: REMOVE_TODO,
  payload: id,
});

export const fetchTodosSuccess = (todos: Todo[]): FetchTodosSuccessAction => ({
  type: FETCH_TODOS_SUCCESS,
  payload: todos,
});

export const fetchTodos = (): any => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get("http://localhost:5000/todos");
      dispatch(fetchTodosSuccess(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
