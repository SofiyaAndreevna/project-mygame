import React, { useState } from 'react';
import { Question } from './redux/type/type';
import FormAnswer from './FormAnswer';

function OneCard({ el }: { el: Question }): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <div key={el.id}>
      <button type="button" onClick={() => setShow(!show)}>
        <h2>{el.points}</h2>
      </button>
      {show && (
        <div>
          <FormAnswer el={el} />
        </div>
      )}
    </div>
  );
}

export default OneCard;
