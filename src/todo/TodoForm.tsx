import {useState} from "react";
import {v4 as uuidv4} from 'uuid';


export default function TodoForm(props: any) {
  const [task, setTask] = useState('');

  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const todo = {task, id: uuidv4(), isCompleted: false};
    props.create(todo);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="Todo-edit-form">
      <label htmlFor="task">New Todo</label>
      <input type='text' placeholder="New Todo" id="task" onChange={handleChange} value={task}/>
      <button>Add</button>
    </form>
  );
}