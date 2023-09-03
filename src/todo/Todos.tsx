import {useState} from "react";
import {ITodo} from "./ITodo";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {v4 as uuidv4} from 'uuid';
import './Todos.css';

export default function Todos() {
  const [todos, setTodos] = useState<ITodo[]>([
    {task: "Walk the fish", id: uuidv4(), isCompleted: false},
    {task: "Groom chickens", id: uuidv4(), isCompleted: false}
  ]);

  const handleCreate = (todo: ITodo) => {
    setTodos([...todos, todo]);
  };

  const handleRemove = (id: string) => {
    setTodos(todos.filter(t => t.id !== id));
  };

  const editHandler = (todo: ITodo) => {
    const todosCopy = [...todos];
    for (let t of todosCopy) {
      if (t.id === todo.id) {
        t.task = todo.task;
        setTodos(todosCopy);
        break;
      }
    }
  }

  const completeHandler = (todo: ITodo) => {
    const todosCopy = [...todos];
    for (let t of todos) {
      if (t.id === todo.id) {
        t.isCompleted = !t.isCompleted;
        setTodos(todosCopy);
        break;
      }
    }

  }


  return (
    <div className="Todo">
      <div className="Todos-container">
        <h1>
          Hua's Todo List <span>A simple react app</span>
        </h1>
        <TodoForm create={handleCreate}/>
        <ul>
          {
            todos.map((t: ITodo) => <Todo todo={t} key={t.id} onRemove={handleRemove} onEdit={editHandler}
                                          onComplete={completeHandler}/>)
          }
        </ul>
      </div>
    </div>
  );
}