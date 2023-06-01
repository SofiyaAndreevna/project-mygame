import React, { useState } from 'react';
import { Question, Title } from './redux/type/type';

function PointCard({ title }: { title: Title }): JSX.Element {
  return (
    <div>
      {title.quest.map((el: Question) => (
        <div><h2>{el.points}</h2></div>
      ))}
    </div>
  );
}

export default PointCard;
