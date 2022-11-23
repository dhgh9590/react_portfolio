import React, { useContext, useEffect, useRef } from 'react';
import NavBar from '../../components/NavBar';
import styles from './style.module.css';
import emailjs from '@emailjs/browser';
import { mouseOver } from '../../context/MouseOver';
import useMouseOver from '../../hooks/useMouseOver';

export const Contact = () => {
  const form = useRef();
  const btn = useRef(null);

  const { setOver } = useContext(mouseOver); //마우스 over state값 저장
  const overValue = useMouseOver([btn]); //커스텀 훅으로 값 전달, 반드시 배열로 전달!
  //overValue값이 변경될때 마다 실행
  useEffect(() => {
    setOver(overValue);
  }, [overValue]);

  //이메일 전송 기능
  const sendEmail = e => {
    e.preventDefault();
    emailjs.sendForm('service_0guqksb', 'template_z6xbrle', form.current, 'TPQ26YkIs_mECD3wG').then(
      result => {
        alert('메일 전송을 완료 했습니다.');
        console.log(result.text);
      },
      error => {
        console.log(error.text);
      },
    );
  };
  return (
    <>
      <NavBar></NavBar>
      <section className={styles.section}>
        <div className={styles.container}>
          <h4>
            IF YOU GOT ANY QUESTIONS <br />
            PLEASE DO NOT HESITATE TO SEND US A MESSAGE.
          </h4>
          <form ref={form} onSubmit={sendEmail} className={styles.form}>
            <div>
              <input type="text" name="from_name" placeholder="Your Name" />
            </div>
            <div>
              <input type="email" name="email" placeholder="Your Email" />
            </div>
            <div>
              <input type="tel" name="phone" placeholder="Your Phone" />
            </div>
            <div className={styles.text}>
              <textarea name="text" placeholder="Message" />
            </div>
            <div className={styles.btn_wrap}>
              <input ref={btn} type="submit" value="SEND MESSAGE" className={styles.btn} />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
