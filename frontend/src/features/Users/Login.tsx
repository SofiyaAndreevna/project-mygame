import React, { useEffect } from 'react';
import style from './user.module.css';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../store';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user, error } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      .then((data) => {
        if (
          data.message === 'Нет таких!'
        ) {
          dispatch({ type: 'login/error', payload: true });
        } else {
          dispatch({ type: 'login/error', payload: false });
          dispatch({ type: 'user/login', payload: data.obj });
          console.log(data.obj);
          navigate('/game');
        }
      });
  };
  useEffect(() => {
    if (user) {
      if ('name' in user) {
        navigate('/game');
      }
    }
  });
  return (
    <div className={`${style.logarega}`}>
      {/* <p>авторизация</p>
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
      </form> */}

      <form onSubmit={LogUser} className={style.form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email
          </label>
          <input
            name="email"
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(event) => setEmail(event.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Пароль
          </label>
          <input
            name="password"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            onChange={(event) => setPassword(event.target.value)}
            value={password}
          />
        </div>
        {error && <h4>Неправильный логин или пароль</h4>}
        <button type="submit" className="btn btn-light">
          Войти
        </button>
      </form>
    </div>
  );
}

export default Login;
