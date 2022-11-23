import React, { useContext, useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { PATH } from '../../constants/path';
import { mouseOver } from '../../context/MouseOver';
import useMouseOver from '../../hooks/useMouseOver';
import styles from './style.module.css';

export const Error = () => {
  const navigate = useNavigate();
  const home = useRef(null);
  const { setOver } = useContext(mouseOver); //마우스 over state값 저장
  const overValue = useMouseOver([home]); //커스텀 훅으로 값 전달, 반드시 배열로 전달!
  //overValue값이 변경될때 마다 실행
  useEffect(() => {
    setOver(overValue);
  }, [overValue]);
  return (
    <section className={styles.section}>
      <h2>404</h2>
      <p>
        The Page You Were LooKing For Doesn{"'"}t Exist <br /> Back to {''}
        <strong
          ref={home}
          onClick={() => {
            navigate(PATH.MAIN);
          }}
        >
          HOME
        </strong>
      </p>
    </section>
  );
};

export default Error;
