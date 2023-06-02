import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import style from './navbar.module.css';
import { RootState } from '../../store';
import { log } from 'console';

function Navbar(): JSX.Element {
  const { counter } = useSelector((store: RootState) => store.questionsReducer);
  const dispatch = useDispatch();
  const Logout = (): void => {
    dispatch({ type: 'user/logout', payload: {} });
    fetch('api/registration/logout')
      .then((res) => res.json())
      .then((data) => console.log(data.message));
  };
  const { user } = useSelector((store: RootState) => store.userReducer);
  // const { counter } = useSelector((store: RootState) => store.questionsReducer);

  // const { user } = useSelector((store:RootState) => store.userReducer)
  return (
    // <nav
    //   className="navbar bg-dark border-bottom border-bottom-dark"
    //   data-bs-theme="dark"
    // >
    //   <div className="container-fluid">
    //   {/* <div><h1>{'name' in user && user.name}</h1></div> */}
    //   <div className="nav-item">
    //     <Link to="/">Главная</Link>
    //   </div>
    //   <div>
    //     <Link to="/registration">Зарегистрироваться</Link>
    //   </div>
    //   <div>
    //     <Link to="/login">Войти</Link>
    //   </div>
    //   {'name' in user && (
    //     <>
    //       <div>
    //         <Link to="/game">Играть</Link>
    //       </div>
    //       <div>
    //         <button type="button" onClick={Logout}>
    //           выйти
    //         </button>
    //         <div>
    //           <h2>здарова {user.name}</h2>
    //         </div>
    //       </div>
    //       <div>у тебя {counter} очков</div>
    //     </>
    //   )}
    //   </div>
    // </nav>

    <nav
      className="navbar navbar-expand-lg bg-dark border-bottom border-bottom-dark"
      data-bs-theme="dark"
    >
      <div className="container-fluid">
        <div className="navbar-brand">
          <Link to="/" className="navbar-brand">
            Тасманские дьяволы 👹
          </Link>
        </div>
        {/* <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button> */}
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <div className="nav-link active" aria-current="page">
                <Link to="/" className="nav-link">
                  Главная
                </Link>
              </div>
            </li>
            {'name' in user ? (
              <>
                <li className={`nav-item ${style.authed}`}>
                  <Link to="/game" className="nav-link">
                    Играть
                  </Link>
                </li>
                <li className={`nav-item ${style.authed}`}>
                  <button type="button" onClick={Logout} className="nav-link">
                    <Link to="/" className="nav-link">
                      Выйти
                    </Link>
                  </button>
                </li>
                <li className={`nav-item ${style.authed} ${style.hiUser}`}>
                  <h6 className="hiUser">Здарова, {user.name}!</h6>
                </li>
                <li className={`nav-item ${style.authed} ${style.hiUser}`}>
                  <h6>У тебя {counter} очков</h6>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/registration" className="nav-link">
                      Зарегистрироваться
                    </Link>
                  </div>
                </li>
                <li className="nav-item">
                  <div className="nav-link">
                    <Link to="/login" className="nav-link">
                      Войти
                    </Link>
                  </div>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
