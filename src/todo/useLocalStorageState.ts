import {useEffect, useState} from "react";

export default function (key: string, defaultValue: any) {
  const [state, setState] = useState(() => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaultValue));
    } catch (err) {
      val = defaultValue;
    }

    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [state]);

  return [state, setState];
};