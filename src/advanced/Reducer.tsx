import {useReducer} from "react";

function reducer(state: any, action: any) {
  if (action.type === "INCREMENT") return {count: state.count + 1};
  if (action.type === "DECREMENT") return {count: state.count - 1};
}

export default function (){
  // @ts-ignore
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <div>
      <h1>{state?.count}</h1>
      <button onClick={()=> dispatch({type: "INCREMENT"})}>Add 1</button>
      <button onClick={()=> dispatch({type: "DECREMENT"})}>Subtract 1</button>
    </div>
  )
}