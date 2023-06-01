import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import style from './questions.module.css';
import { RootState } from '../../store';
import QuestionWindow from './QuestionWindow';
import PointCard from './PointCard';

function QuestionsList(): JSX.Element {
  const { titles } = useSelector((store: RootState) => store.questionsReducer);

  return (
    <div className={style.totalDivQuestions}>
      {titles.map((title) => (
        <div key={title.id}>
          <h2>{title.title}</h2>
          <PointCard title={title} />
          {/* <QuestionWindow title={title} /> */}
        </div>
      ))}
    </div>
  );
}

export default QuestionsList;
