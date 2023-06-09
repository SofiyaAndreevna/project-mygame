import React, { useState } from 'react';
import { Question } from './redux/type/type';
import style from './questions.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import * as api from './api/api';

function FormAnswer({
  el,
  closeWindow,
}: {
  el: Question;
  closeWindow: (value: boolean) => void;
}): JSX.Element {
  const { counter } = useSelector((store: RootState) => store.questionsReducer);
  const [right, setRight] = useState(false);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const checkAnswer = (): void => {
    setShow(true);
    if (
      el.answer
        .toLowerCase()
        .trim()
        .replace(/[\.\-/\\\s]/, '') ===
      answer
        .toLowerCase()
        .trim()
        .replace(/[\.\-/\\\s]/, '')
    ) {
      setRight(true);
      dispatch({ type: 'counter/change', payload: el.points });
      const number = counter + el.points;
      api.counterFetch(number);
    } else {
      setRight(false);
      dispatch({ type: 'counter/minus', payload: el.points });
      const number = counter - el.points;
      api.counterFetch(number);
    }
  };
  return (
    <div className={style.answerContainer}>
      <button
        type="button"
        onClick={() => closeWindow(false)}
        className="btn-close"
      ></button>
      <h2>{el.text}</h2>
      <div className={`input-group mb-3 ${style.answerInput}`}>
        <input
          type="text"
          className="form-control"
          placeholder="Введите ответ"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={(e) => setAnswer(e.target.value)}
        />
        <button
          className="btn btn-outline-warning"
          type="button"
          id="button-addon2"
          onClick={() => checkAnswer()}
        >
          Ответить
        </button>
      </div>
      {show ? (
        right ? (
          <div>Правильный ответ!</div>
        ) : (
          <div>Неправильно! Правильный ответ: {el.answer}</div>
        )
      ) : (
        <></>
      )}
    </div>
  );
}

export default FormAnswer;
