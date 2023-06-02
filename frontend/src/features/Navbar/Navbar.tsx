import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './navbar.module.css';
import { RootState } from '../../store';
import { log } from 'console';

function Navbar(): JSX.Element {
  const dispatch = useDispatch();
  const Logout = (): void => {
    dispatch({ type: 'user/logout', payload: {} });
    fetch('api/registration/logout')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  };
  const { user } = useSelector((store: RootState) => store.userReducer);
  const { count } = useSelector((store: RootState) => store.questionsReducer);

  // const { user } = useSelector((store:RootState) => store.userReducer)
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
      {'name' in user && (
        <>
          <div>
            <Link to="/game">Играть</Link>
          </div>
          <div>
            <div onClick={Logout}><Link to="/">Выйти</Link></div>
            <div>
              <h2>здарова {user.name}</h2>
            </div>
          </div>
          <div>у тебя {count} очков</div>
        </>
      )}
    </div>
  );
}

export default Navbar;
