import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import style from './user.module.css';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const AddUser = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetch('api/registration', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    })
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'user/registration', payload: data }));
  };

  return (
    <div>
      <form onSubmit={AddUser}>
        <input
          name="name"
          placeholder="name"
          type="text"
          onChange={(event) => setName(event.target.value)}
          value={name}
        />
        <input
          name="email"
          placeholder="email"
          type="text"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />
        <input
          name="password"
          placeholder="password"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
          value={password}
        />
        <button type="submit">зарегистрироваться</button>
      </form>
    </div>
  );
}

export default Registration;
