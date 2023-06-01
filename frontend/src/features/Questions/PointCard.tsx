import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';

function PointCard({ title }: { title: Title }): JSX.Element {
  return (
    <div>
      {title.Questions.map((el: Question) => (
        <div key={el.id + 1}>
          <h2>{el.points}</h2>
        </div>
      ))}
    </div>
  );
}

export default PointCard;
