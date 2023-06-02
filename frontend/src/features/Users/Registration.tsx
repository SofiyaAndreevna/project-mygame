import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import style from './user.module.css';
// import store from '../../store';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';

function Registration(): JSX.Element {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { user } = useSelector((store: RootState) => store.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  useEffect(() => {
    if ('name' in user) {
      navigate('/game');
    }
  });
  return (
    <div className={`${style.logarega}`}>
      {/* <form onSubmit={AddUser}>
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
      </form> */}

      <form onSubmit={AddUser} className={style.form}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Имя
          </label>
          <input
            name="name"
            type="text"
            className="form-control"
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </div>
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
        <button type="submit" className="btn btn-light">
          Войти
        </button>
      </form>
    </div>
    // </div>
  );
}

export default Registration;
