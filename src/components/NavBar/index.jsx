import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styles from './style.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { PATH } from '../../constants/path';

const Index = () => {
  const [dropDown, setDropDown] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className={styles.nav}>
      <div className={styles.menu_btn}>
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
          <li>
            <em
              onClick={() => {
                navigate(PATH.MAIN);
              }}
            >
              Home
            </em>
          </li>
          <li>
            <em
              onClick={() => {
                navigate(PATH.ABOUT);
              }}
            >
              About
            </em>
          </li>
          <li>
            <em>My work</em>
          </li>
          <li>
            <em>Contact</em>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Index;
