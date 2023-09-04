import {createContext, useReducer} from "react";
import {ITodo} from "../ITodo";
import useTodoState from "../hooks/useTodoState";
const defaultTodos: ITodo[] = [
  {id: "1", task: "Run 5k in the afternoon", isCompleted: false},
  {id: "2", task: "Go to grocery store and get a fried chicken sandwich", isCompleted: false}
];

// @ts-ignore
export const TodosContext = createContext();
// @ts-ignore
export const DispatchContext = createContext();

export default function TodosProvider(props: any) {
  // const {todos, ...dispatch} = useTodoState(defaultTodos);

  const [todos, dispatch] = useReducer((state: any, action: any) => {
    switch (action.type) {
      case "CREATE":
        return [...state, action.todo];
      case "REMOVE":
        return state.filter((t: ITodo) => t.id !== action.id);
      case "TOGGLE":
        return state.map((t: ITodo) => t.id == action.id ? {...t, isCompleted: !t.isCompleted} : t);
      case "EDIT":
        return state.map((t: ITodo) => t.id == action.id ? {...t, task: action.task} : t);
      default:
        return state;
    }
  }, defaultTodos);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}