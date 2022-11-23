import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PATH } from '../../constants/path';
import { useRef } from 'react';
import { mouseOver } from '../../context/MouseOver';
import useMouseOver from '../../hooks/useMouseOver';

const Index = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();
  const btn = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  const menu3 = useRef(null);
  const menu4 = useRef(null);

  const { setOver } = useContext(mouseOver); //마우스 over state값 저장
  const overValue = useMouseOver([btn, menu1, menu2, menu3, menu4]); //커스텀 훅으로 값 전달, 반드시 배열로 전달!
  //overValue값이 변경될때 마다 실행
  useEffect(() => {
    setOver(overValue);
  }, [overValue]);

  return (
    <nav className={styles.nav}>
      <div ref={btn} className={styles.menu_btn}>
        <em>MENU</em>
        {dropDown == false ? (
          <div
            className={styles.btn}
            onClick={() => {
              setDropDown(true);
            }}
          >
            <div className={styles.icon}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        ) : (
          <div
            className={styles.btn}
            onClick={() => {
              setDropDown(false);
            }}
          >
            <div className={styles.icon}>
              <FontAwesomeIcon icon={faTimes} className={styles.close_icon} />
            </div>
          </div>
        )}
      </div>
      <div className={`${styles.menu} ${dropDown == true && styles.open}`}>
        <ul>
          <li ref={menu1}>
            <em
              onClick={() => {
                navigate(PATH.MAIN);
              }}
            >
              Home
            </em>
          </li>
          <li ref={menu2}>
            <em
              onClick={() => {
                navigate(PATH.ABOUT);
              }}
            >
              About
            </em>
          </li>
          <li
            ref={menu3}
            onClick={() => {
              navigate(PATH.WORK);
            }}
          >
            <em>My work</em>
          </li>
          <li
            ref={menu4}
            onClick={() => {
              navigate(PATH.CONTACT);
            }}
          >
            <em>Contact</em>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
