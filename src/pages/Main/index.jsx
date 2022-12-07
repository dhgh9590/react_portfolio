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

  const frame = useRef(null);
  const [mouseValue, setMouseValue] = useState(); //section 마우스 값 저장

  //section 마우스 움직임
  const mouseMove = e => {
    if (resize > 1023) {
      const { x, y, width, height } = frame.current.getBoundingClientRect();
      const left = e.clientX - x;
      const top = e.clientY - y;
      const centerX = left - width / 2;
      const centerY = top - height / 2;
      const t = Math.sqrt(centerX ** 2 + centerY ** 2);
      const value = {
        centerY: centerY,
        centerX: centerX,
        t: t,
      };
      setMouseValue(value);
    }
  };

  //브라우저 사이즈 값
  const [resize, setResize] = useState();

  const handleResize = () => {
    setResize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  //overValue값이 변경될때 마다 실행
  useEffect(() => {
    setOver(overValue);
  }, [overValue]);

  useEffect(() => {
    setLoad(true);
    handleResize();
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <section
        ref={frame}
        onMouseMove={e => {
          resize > 1023 && mouseMove(e);
        }}
        className={styles.section}
      >
        <div
          className={`${styles.text_box} ${load && styles.active}`}
          style={{
            transform: `rotate3d(${mouseValue && resize > 1023 && -mouseValue.centerY / 1000},${
              mouseValue && resize > 1023 && mouseValue.centerX / 1000
            },0,${mouseValue && resize > 1023 && mouseValue.t / 50}deg)`,
            textShadow: `${mouseValue && resize > 1023 && -mouseValue.centerX / 30}px ${
              mouseValue && resize > 1023 && -mouseValue.centerY / 30
            }px 5px rgba(0,0,0,0.5)`,
          }}
        >
          <em>Hello, Welcome to My</em>
          <h2>AQUARIUM</h2>
          <div className={styles.icon_box}>
            <ul>
              <li ref={icon1}>
                <a href="https://github.com/dhgh9590" target="_blank" rel="noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/icon/github.png`} alt="아이콘" />
                </a>
              </li>
              <li ref={icon2}>
                <a href="https://www.facebook.com/dhgh9590" target="_blank" rel="noreferrer">
                  <img src={`${process.env.PUBLIC_URL}/images/icon/facebook.png`} alt="아이콘" />
                </a>
              </li>
              <li ref={icon3}>
                <img src={`${process.env.PUBLIC_URL}/images/icon/instagram.png`} alt="아이콘" />
              </li>
              <li ref={icon4}>
                <img src={`${process.env.PUBLIC_URL}/images/icon/twitter.png`} alt="아이콘" />
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
            <li>
              <em>HTML5</em>
            </li>
            <li>
              <em>CSS3</em>
            </li>
            <li>
              <em>JavaScript</em>
            </li>
            <li>
              <em>React</em>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Main;
