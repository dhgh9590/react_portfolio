import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../../components/NavBar';
import styles from './style.module.css';

export const About = () => {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);
  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={`${styles.img_box} ${load && styles.active}`}>
            <div className={styles.img_border}></div>
            <div className={styles.img}>
              <img src={`${process.env.PUBLIC_URL}/images/about.jpg`} alt="이미지" />
            </div>
          </div>
          <div className={`${styles.content} ${load && styles.active}`}>
            <h2>ABOUT ME</h2>
            <strong>
              좋아하는 일을 위해 정체되어있지 않고 <br /> 더 발전하기 위해 스스로를 업데이트하는 프론트엔드 개발자
              오호설 입니다.
            </strong>
            <ul>
              <li>
                <em>Name</em>
                <p>: 오호설</p>
              </li>
              <li>
                <em>Age</em>
                <p>: 29</p>
              </li>
              <li>
                <em>Address</em>
                <p>: 대구 북구 구암동</p>
              </li>
              <li>
                <em>Certificate</em>
                <p>: PC정비사 2급 / 네트워크 관리사 2급</p>
              </li>
              <li>
                <em>Email</em>
                <p>: dhgh9590@naver.com</p>
              </li>
              <li>
                <em>Skills</em>
                <p>: HTML5 / CSS3 / JavaScript / TypeScript / Jquery / React / Next / Node / MongoDB </p>
              </li>
              <li>
                <em>Education</em>
                <p>: 스마트기기 UX/UI 웹디자이너양성과정 수료(SBS 아카데미 대구)</p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
