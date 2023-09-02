import {useState} from "react";
import {ITodo} from "./ITodo";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function Todos() {
  const [todos, setTodos] = useState([{task: "Walk the fish"}, {task: "Groom chickens"}]);

  const handleCreate = (todo: ITodo) => {
    console.log(todo);
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm create={handleCreate}/>
      <ul>
        {
          todos.map((t, index) => <Todo {...t} key={index}/>)
        }
      </ul>
    </div>
  );
}