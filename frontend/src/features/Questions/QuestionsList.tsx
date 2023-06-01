import React from 'react';
import { useSelector } from 'react-redux';
import style from './questions.module.css';
import { RootState } from '../../store';
import QuestionWindow from './QuestionWindow';
import PointCard from './PointCard';

function QuestionsList(): JSX.Element {
  const { titles } = useSelector((store: RootState) => store.questionsReducer);
  console.log(titles);
  
  return (
    <div>
      {titles.map((title) => (
        <div key={title.id}>
          <PointCard title={title} />
          <QuestionWindow title={title} />
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
