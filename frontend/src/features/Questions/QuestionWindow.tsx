import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';
import style from './questions.module.css';

function QuestionWindow({ title }: { title: Title }): JSX.Element {
  const [answer, setAnswer] = useState('');
  // const sendAnswer()
  return (
    <div>
      {/* <button type="button" onClick={setShow}>X</button> */}
      {title.title}
      {title.Questions.map((quest: Question) => (
        <div key={quest.id}>
          <h2>{quest.text}</h2>
          <input
            type="text"
            name="answer"
            placeholder="отвечай!"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
          <button type="button">Ответить</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionWindow;
