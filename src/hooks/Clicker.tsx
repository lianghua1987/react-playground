import {useEffect, useState} from "react";

function Clicker() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`Something changed, you've clicked ${count} times`);
  });

  return (
    <div>
      <button onClick={e => {
        setCount(count + 1)
      }}>Clicked {count} times
      </button>
    </div>
  );
}

export default Clicker;