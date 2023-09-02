import {useState} from "react";

export default function TodoForm(props: any) {
  const [task, setTask] = useState('');

  const handleChange = (e: any) => {
    setTask(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.create({task});
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Todo</label>
      <input type='text' placeholder="New Todo" id="task" onChange={handleChange} value={task}/>
      <button>Add</button>
    </form>
  );
}