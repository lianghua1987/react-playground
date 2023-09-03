import {useState} from "react";
import './Todo.css'

export default function Todo(props: any) {

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [task, setTask] = useState<string>(props.todo.task);

  const removeHandler = () => {
    props.onRemove(props.todo.id);
  };

  const editHandler = () => {
    setIsEditing(!isEditing);
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    props.onEdit({...props.todo, task});
    setIsEditing(false);
  };

  const changeHandler = (e: any) => {
    setTask(e.target.value);
  };

  const completeHandler = () => {
    props.onComplete(props.todo);
  }

  return isEditing ?
    <div className="Todo-container">
      <form onSubmit={submitHandler}  className="Todo-edit-form">
        <input type="text" value={task} onChange={changeHandler}/>
        <button>Save</button>
      </form>
    </div>
    :
    <div className="Todo-container">
      <li className={props.todo.isCompleted ? "Todo-completed Todo-task" : "Todo-task"}
          onClick={completeHandler}>{props.todo.task}</li>
      <div className = "Todo-buttons">
        <button onClick={editHandler}>
          <i className="fas fa-pen"/>
        </button>
        <button onClick={removeHandler}>
          <i className="fas fa-trash"/>
        </button>
      </div>
    </div>;
}
