import {ITodo} from "./ITodo";
import {useState} from "react";

export default (initialTodos: ITodo[]) => {
  const [todos, setTodos] = useState<ITodo[]>(initialTodos);
  return {
    todos,
    handleCreate: (todo: ITodo) => {
      setTodos([...todos, todo]);
    },
    handleRemove: (id: string) => {
      setTodos(todos.filter(t => t.id !== id));
    },
    editHandler: (todo: ITodo) => {
      const todosCopy = [...todos];
      for (let t of todosCopy) {
        if (t.id === todo.id) {
          t.task = todo.task;
          setTodos(todosCopy);
          break;
        }
      }
    },
    completeHandler: (todo: ITodo) => {
      const todosCopy = [...todos];
      for (let t of todos) {
        if (t.id === todo.id) {
          t.isCompleted = !t.isCompleted;
          setTodos(todosCopy);
          break;
        }
      }
    }
  }
}