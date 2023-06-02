import React, { useState } from 'react';
import { Question } from './redux/type/type';
import style from './questions.module.css';
import { useDispatch } from 'react-redux';
function FormAnswer({
  el,
  closeWindow,
}: {
  el: Question;
  closeWindow: (value: boolean) => void;
}): JSX.Element {
  const [right, setRight] = useState(false);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const dispatch = useDispatch();
  const checkAnswer = (): void => {
    setShow(true);
    if (el.answer === answer) {
      setRight(true);
      dispatch({ type: 'counter/change', payload: el.points });
    } else {
      setRight(false);
    }
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
        <>Ответ</>
      )}
    </div>
  );
}

export default FormAnswer;
