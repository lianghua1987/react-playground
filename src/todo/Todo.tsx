import {useContext, useState} from "react";
import './Todo.css'
import {TodosContext} from "./context/todos.context";

export default function Todo(props: any) {

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [task, setTask] = useState<string>(props.todo.task);
  // @ts-ignore
  const {handleRemove, editHandler, completeHandler} = useContext(TodosContext);

  const submitHandler = (e: any) => {
    e.preventDefault();
    editHandler({...props.todo, task});
    setIsEditing(false);
  };

  return isEditing ?
    <div className="Todo-container">
      <form onSubmit={submitHandler} className="Todo-edit-form">
        <input type="text" value={task} onChange={(e) => setTask(e.target.value)}/>
        <button>Save</button>
      </form>
    </div>
    :
    <div className="Todo-container">
      <li className={props.todo.isCompleted ? "Todo-completed Todo-task" : "Todo-task"}
          onClick={() => completeHandler(props.todo)}>{props.todo.task}</li>
      <div className="Todo-buttons">
        <button onClick={() => setIsEditing(!isEditing)}>
          <i className="fas fa-pen"/>
        </button>
        <button onClick={() => handleRemove(props.todo.id)}>
          <i className="fas fa-trash"/>
        </button>
      </div>
    </div>;
}
