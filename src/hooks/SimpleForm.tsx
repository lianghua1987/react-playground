import {FormEvent, useState} from "react";
import useFormState from './useFormState';

export default function SimpleForm() {
  const [email, setEmail] = useState('');
  const [username, handleUsernameChange, resetUsername] = useFormState('');

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  }

  return (
    <div>
      <div>
        <h4>The email is....{email}</h4>
        <input type='text' value={email} onChange={handleChange}/>
      </div>
      <div>
        <h4>The username is....{username}</h4>
        <input type='text' value={username} onChange={handleUsernameChange}/>
        <button onClick={resetUsername}>Reset</button>
      </div>
    </div>

  );
};