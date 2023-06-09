import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Navbar from '../features/Navbar/Navbar';
import Main from '../features/Main/Main';
import Registration from '../features/Users/Registration';
import Login from '../features/Users/Login';
import QuestionsList from '../features/Questions/QuestionsList';
import QuestionWindow from '../features/Questions/QuestionWindow';
import * as api from '../features/Questions/api/api';

function App(): JSX.Element {
  const dispatch = useDispatch();

  useEffect(() => {
    api.getTitle().then((data) => {
      dispatch({ type: 'get/titles', payload: data });
    });
  }, [dispatch]);

  useEffect(() => {
    api.getUser().then((data) => {
      if (data.name) {
        dispatch({ type: 'user/login', payload: data });
      }
    });
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/game" element={<QuestionsList />} />
        {/* <Route
          path="/game/:idTitle/question/:idQuest"
          element={<QuestionWindow />}
        /> */}
      </Routes>
    </div>
  );
}

export default App;
