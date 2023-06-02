import React from 'react';
import style from './main.module.css';

function Main() {
  return (
    <div>
      <br />
      <br />
      <br />
      <h2> Своя ИГРА</h2>
      <div className={style.main}>
        <div className={style.image}>
          <h5 className={style.title}>и чё я в Эльбрус не пошёл 😢 ???</h5>
          <br />
          <br />
          <br />
          {/* <div className={style.image}>
            <div className={style.img} src="https://fs.znanio.ru/d5af0e/58/b8/d4d6c6fa84238d0010f5b1d60e91609104.jpg"></img>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Main;
