import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';
import { useDispatch } from 'react-redux';
import OneCard from './OneCard';

function PointCard({ title }: { title: Title }): JSX.Element {
  const dispatch = useDispatch();

  // const getQuestion =():void => {

  // }
  return (
    <div>
      {title.Questions.map((el: Question) => (
        <OneCard el={el} />
      ))}
    </div>
  );
}

export default PointCard;
