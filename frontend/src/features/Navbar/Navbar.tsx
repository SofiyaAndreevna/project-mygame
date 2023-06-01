import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './navbar.module.css';
import { RootState } from '../../store';

function Navbar(): JSX.Element {
  // const { user } = useSelector((store:RootState) => store.userReducer);
  return (
    <div>
      {/* <div><h1>{'name' in user && user.name}</h1></div> */}
      <div>
        <Link to="/">Главная</Link>
      </div>
      <div>
        <Link to="/registration">Зарегистрироваться</Link>
      </div>
      <div>
        <Link to="/login">Войти</Link>
      </div>
      <div>
        <Link to="/game">Играть</Link>
      </div>
      <div>Выйти</div>
    </div>
  );
}

export default Navbar;
