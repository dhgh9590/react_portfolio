import React, { useEffect, useState } from 'react';
import styles from './style.module.css';
import NavBar from '../../components/NavBar';
import useMouseOver from '../../hooks/useMouseOver';
import { useRef } from 'react';
import { useContext } from 'react';
import { mouseOver } from '../../context/MouseOver';

export const Main = () => {
  const [load, setLoad] = useState(false);
  const { setOver } = useContext(mouseOver); //마우스 over state값 저장
  const icon1 = useRef(null);
  const icon2 = useRef(null);
  const icon3 = useRef(null);
  const icon4 = useRef(null);
  const overValue = useMouseOver([icon1, icon2, icon3, icon4]); //커스텀 훅으로 값 전달, 반드시 배열로 전달!

  //overValue값이 변경될때 마다 실행
  useEffect(() => {
    setOver(overValue);
  }, [overValue]);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={`${styles.text_box} ${load && styles.active}`}>
          <em>Hello, Welcome to My</em>
          <h2>AQUARIUM</h2>
          <div className={styles.icon_box}>
            <ul>
              <li ref={icon1}>
                <a href="https://github.com/dhgh9590" target="_blank" rel="noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/icon/github.png`} alt="" />
                </a>
              </li>
              <li ref={icon2}>
                <a href="https://www.facebook.com/dhgh9590" target="_blank" rel="noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/icon/facebook.png`} alt="" />
                </a>
              </li>
              <li ref={icon3}>
                <img src={`${process.env.PUBLIC_URL}/images/icon/instagram.png`} alt="" />
              </li>
              <li ref={icon4}>
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
