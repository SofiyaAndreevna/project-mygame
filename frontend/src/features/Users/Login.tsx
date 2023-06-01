import React from 'react';
import style from './user.module.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const LogUser = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    fetch('api/registration/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    })
    .then((res) => res.json())
    .then((data) => dispatch({ type: 'user/login', payload: data }));
  };
  return (
    <div>
      <p>авторизация</p>
      <form onSubmit={LogUser}>
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
        <button type="submit">войти</button>
      </form>
    </div>
  );
}

export default Login;
