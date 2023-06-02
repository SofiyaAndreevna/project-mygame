import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';
import { useDispatch } from 'react-redux';
import OneCard from './OneCard';
import style from './questions.module.css'

function PointCard({ title }: { title: Title }): JSX.Element {
  const dispatch = useDispatch();

  // const getQuestion =():void => {

  // }
  return (
    <div className={style.po}>
      {title.Questions.map((el: Question) => (
        <OneCard el={el} />
      ))}
    </div>
  );
}

export default PointCard;
