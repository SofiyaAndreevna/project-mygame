import React, { useState } from 'react';
import { Question } from './redux/type/type';
import FormAnswer from './FormAnswer';
import style from './questions.module.css';

function OneCard({ el }: { el: Question }): JSX.Element {
  const [show, setShow] = useState(false);
  const [able, setAble] = useState(true);
  const closeWindow = (value: boolean): void => {
    setShow(value);
    setAble(false);
  };
  return (
    <>
      {able ? (
        <div key={el.id} >
          <button type="button" onClick={() => setShow(!show)} className={style.pointBtn}>
            <h2>{el.points}</h2>
          </button>
          {show && (
            <div>
              <FormAnswer el={el} closeWindow={closeWindow} />
            </div>
          )}
        </div>
      ) : (
        <div className={style.pointDiv} key={el.id}>
          <button
            className={style.btnPoint}
            type="button"
            disabled={true}
            onClick={() => setShow(!show)}
          >
            <h2>{el.points}</h2>
          </button>
          {show && (
            <div>
              <FormAnswer el={el} closeWindow={closeWindow} />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default OneCard;
