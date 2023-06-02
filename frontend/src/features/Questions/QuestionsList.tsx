import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './questions.module.css';
import { RootState } from '../../store';
import QuestionWindow from './QuestionWindow';
import PointCard from './PointCard';

function QuestionsList(): JSX.Element {
  const { titles, counter } = useSelector((store: RootState) => store.questionsReducer);

  return (
    <div className={style.totalDivQuestions}>
      <h2>{counter}</h2>
      {titles.map((title) => (
        <div key={title.id} className={style.theme}>
          <h2 className="po">{title.title}</h2>
          <PointCard title={title} />
          {/* <QuestionWindow title={title} /> */}
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
