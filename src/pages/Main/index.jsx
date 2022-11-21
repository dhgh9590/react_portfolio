import React from 'react';
import styles from './style.module.css';
import NavBar from '../../components/NavBar';

export const Main = () => {
  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={styles.text_box}>
          <p>HELLO, MY NAME IS</p>
          <h2>HO SEOL</h2>
          <em>I’m a Front End Developer</em>
          <div className={styles.btn_box}>
            <button>My work</button>
            <button>Contact me</button>
          </div>
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
          src={`${process.env.PUBLIC_URL}/video/video.mp4`}
        ></video>
      </section>
    </>
  );
};

export default Main;
