import React from 'react';
import NavBar from '../../components/NavBar';
import Slider from './Slider';
import styles from './style.module.css';
import './common.css';

export const MyWork = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={styles.container}>
          <Slider></Slider>
        </div>
      </section>
    </>
  );
};

export default MyWork;
