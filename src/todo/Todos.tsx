import {useEffect, useState} from "react";
import {ITodo} from "./ITodo";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import './Todos.css';
import useTodoState from "./useTodoState";

export default function Todos() {

  const initialTodos = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const {todos, handleCreate, handleRemove, editHandler, completeHandler} = useTodoState(initialTodos);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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