import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';

function PointCard({ title }: { title: Title }): JSX.Element {
  return (
    <div>
      {title.Questions.map((el: Question) => (
        <div key={el.id}>
          <button type="button">
            <h2>{el.points}</h2>
          </button>
        </div>
      ))}
    </div>
  );
}

export default PointCard;
