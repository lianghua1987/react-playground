export default function Todo(props: any) {

  return (
    <div>
      <button>Edit</button>
      <button>X</button>
      <li>{props.task}</li>
    </div>
  );
}