import {ITodo} from "./ITodo";
import Todo from "./Todo";
import './Todos.css';
import useTodoState from "./hooks/useTodoState";
import TodoForm from "./TodoForm";
import {useContext} from "react";
import {TodosContext} from "./context/todos.context";

export default function Todos() {

  // @ts-ignore
  const {todos} = useContext(TodosContext);

  return (
    <div className="Todo">
      <div className="Todos-container">
        <h1>
          Hua's Todo List <span>A simple react app</span>
        </h1>
        <TodoForm/>
        <ul>
          {
            todos.map((t: ITodo) => <Todo todo={t} key={t.id}/>)
          }
        </ul>
      </div>
    </div>
  );
}