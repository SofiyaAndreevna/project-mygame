import React, { useState } from 'react';
import { Question } from './redux/type/type';

function FormAnswer({ el }: { el: Question }): JSX.Element {
  const [right, setRight] = useState(false);
  const [show, setShow] = useState(false);
  const [answer, setAnswer] = useState('');
  const checkAnswer = ():void => {
    setShow(true);
    if (el.answer === answer) {
      setRight(true);
    } else {
      setRight(false);
    }
  };
  return (
    <div>
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
          <div>Правильный ответ! {el.answer}</div>
        ) : (
          <div>Неправильно! {el.answer}</div>
        )
      ) : (
        <>Ответ</>
      )}
    </div>
  );
}

export default FormAnswer;
