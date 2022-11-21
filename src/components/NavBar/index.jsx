import React from 'react';
import styles from './style.module.css';

const Index = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt="" />
        </div>
        <div className={styles.menu}>
          <ul>
            <li>
              <em>Home</em>
            </li>
            <li>
              <em>About</em>
            </li>
            <li>
              <em>Skills</em>
            </li>
            <li>
              <em>My Work</em>
            </li>
            <li>
              <em>Contact</em>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Index;
