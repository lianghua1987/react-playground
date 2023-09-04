import {ITodo} from "./ITodo";
import Todo from "./Todo";
import {useContext} from "react";
import {DispatchContext, TodosContext} from "./context/todos.context";

export default function () {
  const todos: any = useContext(TodosContext);
  return (
    <ul>
      {todos.map((t: ITodo) => <Todo todo={t} key={t.id}/>)}
    </ul>
  );
}