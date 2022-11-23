import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './reset.css';
import './App.css';
import { Main, About, MyWork, Contact, Error } from './pages/index';
import { PATH } from './constants/path';
import { gsap } from 'gsap';
import { mouseOver } from './context/MouseOver';
import { useEffect } from 'react';

function App() {
  const cursor = useRef(null); //마우스1
  const follower = useRef(null); //마우스2
  const [over, setOver] = useState(false); //마우스 ref에 올라가거가 나가면 변경됨

  useEffect(() => {
    //마우스 좌표
    window.addEventListener('mousemove', function (e) {
      gsap.to(cursor.current, { duration: 0.1, left: e.pageX - 5, top: e.pageY - 5 });
      gsap.to(follower.current, { duration: 0.8, left: e.pageX - 15, top: e.pageY - 15 });
    });
  }, []);

  return (
    <div className="App">
      <mouseOver.Provider value={{ over, setOver }}>
        <Routes>
          <Route path={PATH.MAIN} element={<Main />}></Route>
          <Route path={PATH.ABOUT} element={<About />}></Route>
          <Route path={PATH.WORK} element={<MyWork />}></Route>
          <Route path={PATH.CONTACT} element={<Contact />}></Route>
          <Route path={PATH.ERROR} element={<Error />}></Route>
        </Routes>
      </mouseOver.Provider>
      <div className={`${over && 'show'} cursor`} ref={cursor}></div>
      <div className={`${over && 'active1'} cursor-follower`} ref={follower}></div>
    </div>
  );
}

export default App;
