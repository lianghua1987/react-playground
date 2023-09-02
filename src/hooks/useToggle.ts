import {useState} from 'react';


export function useToggle(initialValue: any) {
  const [state, setState] = useState(initialValue);

  const toggle = () => {
    setState(!state);
  }
  return [state, toggle];
}