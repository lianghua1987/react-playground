import './Todos.css';
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export default function Todos() {
  return (
    <div className="Todo">
      <div className="Todos-container">
        <h1>
          Hua's Todo List <span>A simple react app</span>
        </h1>
        <TodoForm/>
        <TodoList/>
      </div>
    </div>
  );
}