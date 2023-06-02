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
      answer.toLowerCase().trim().replace(/[\.\-/\\\s]/, '')
    ) {
      setRight(true);
      dispatch({ type: 'counter/change', payload: el.points });
    } else {
      setRight(false);
    }
    const number = counter + el.points;
    api.counterFetch(number);
  };
  return (
    <div className={style.answerContainer}>
      <button type="button" onClick={() => closeWindow(false)}>
        X
      </button>
      <h2>{el.text}</h2>
      <input
        placeholder="Отвечай"
        type="answer"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="button" onClick={() => checkAnswer()}>
        Ответить
      </button>
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
