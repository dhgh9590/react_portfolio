import React from 'react';
import styles from './style.module.css';
import NavBar from '../../components/NavBar';

export const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={styles.text_box}>
          <em>Hello, Welcome to My</em>
          <h2>AQUARIUM</h2>
          <div className={styles.icon_box}>
            <ul>
              <li>
                <img src={`${process.env.PUBLIC_URL}/images/icon/github.png`} alt="" />
              </li>
              <li>
                <img src={`${process.env.PUBLIC_URL}/images/icon/facebook.png`} alt="" />
              </li>
              <li>
                <img src={`${process.env.PUBLIC_URL}/images/icon/instagram.png`} alt="" />
              </li>
              <li>
                <img src={`${process.env.PUBLIC_URL}/images/icon/twitter.png`} alt="" />
              </li>
            </ul>
          </div>
        </div>
        <video
          className={styles.video}
          autoPlay={true}
          muted={true}
          loop={true}
          src={`${process.env.PUBLIC_URL}/video/video2.mp4`}
        ></video>
        <div className={styles.sash}>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
