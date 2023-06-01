import React from 'react';

function QuestionWindow() {
  const [answer, setAnswer] = useState('');
  const
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
          <button onClick={}>Ответить</button>
        </div>
      ))}
    </div>
  );
}

export default QuestionWindow;
