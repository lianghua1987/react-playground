import {createContext} from "react";
import {ITodo} from "../ITodo";
import useTodoState from "../hooks/useTodoState";

const defaultTodos: ITodo[] = [
  {id: "1", task: "Run 5k in the afternoon", isCompleted: false},
  {id: "2", task: "Go to grocery store and get a fried chicken sandwich", isCompleted: false}
];

// @ts-ignore
export const TodosContext = createContext();

export default function TodosProvider(props: any) {
  const todoState = useTodoState(defaultTodos);

  return (
    <TodosContext.Provider value={todoState}>
      {props.children}
    </TodosContext.Provider>
  );
}