import React from 'react';
import { useSelector } from 'react-redux';
import style from './questions.module.css';
import { RootState } from '../../store';
import QuestionWindow from './QuestionWindow';
import PointCard from './PointCard';

function QuestionsList(): JSX.Element {
  const { titles } = useSelector((store: RootState) => store.questionsReducer);
  return (
    <div>
      {titles.map((title) => (
        <>
          <PointCard title={title} key={title.id} />
          <QuestionWindow title={title} key={title.id} />
        </>
      ))}
    </div>
  );
}

export default QuestionsList;
