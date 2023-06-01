import React, {useState} from 'react';
import { Question, Title } from './redux/type/type';

function QuestionWindow({ title }: { title: Title }): JSX.Element {
  const [answer, setAnswer] = useState('');
  // const sendAnswer()
  return (
    <div>
      {title.title}
      {title.quest.map((quest: Question) => (
        <div>
          <h2>{quest.text}</h2>
          <input
            type="text"
            name="answer"
            placeholder="отвечай!"
            onChange={(e) => setAnswer(e.target.value)}
            value={answer}
          />
          <button>Ответить</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionWindow;
