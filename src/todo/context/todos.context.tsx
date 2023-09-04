import {createContext, useReducer} from "react";
import {ITodo} from "../ITodo";
import useTodoState from "../hooks/useTodoState";
import useLocalStorageState from "../hooks/useLocalStorageState";

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

  const [todoList, setTodoList] = useLocalStorageState("todos", defaultTodos);

  const [todos, dispatch] = useReducer((state: any, action: any) => {
    let updated;
    switch (action.type) {
      case "CREATE":
        updated = [...state, action.todo];
        break;
      case "REMOVE":
        updated = state.filter((t: ITodo) => t.id !== action.id);
        break;
      case "TOGGLE":
        updated = state.map((t: ITodo) => t.id == action.id ? {...t, isCompleted: !t.isCompleted} : t);
        break;
      case "EDIT":
        updated = state.map((t: ITodo) => t.id == action.id ? {...t, task: action.task} : t);
        break;
      default:
        return state;
    }
    setTodoList(updated);
    return updated;
  }, todoList);

  return (
    <TodosContext.Provider value={todos}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TodosContext.Provider>
  );
}