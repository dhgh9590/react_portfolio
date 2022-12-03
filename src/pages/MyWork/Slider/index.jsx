import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import styles from './style.module.css';
import { Navigation } from 'swiper';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState();
  return (
    <div className={`${styles.container} slide1`}>
      <span className={styles.count}>{count && count}/7</span>
      <div className={styles.slider_wrap}>
        <Swiper
          modules={[Navigation]}
          navigation={true}
          slidesPerView={1}
          speed={1500}
          loop={true}
          loopAdditionalSlides={1}
          onSlideChange={swiper => {
            setCount(swiper.realIndex + 1);
            console.log(swiper);
          }}
          className="mySwiper"
        >
          <div className={styles.slider}>
            <ul>
              <li>
                <SwiperSlide key={0}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/calendar.png`} alt="슬라이드1" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>Google Calender</h2>
                      <div className={`${`${styles.text} text`} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>클론 코딩 구글 캘린더 팀프로젝트</em>
                      </div>
                      <div className={`${`${styles.text} text`} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 2명</em>
                        <em>백엔드 2명</em>
                      </div>
                      <div className={`${`${styles.text} text`} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 50%, 제작기간 4개월</em>
                      </div>
                      <div className={`${`${styles.text} text`} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, PostCSS, React</em>
                        <em>백엔드 : Node.js, AWS</em>
                      </div>
                      <div className={`${`${styles.btn_wrap} btn_wrap`} btn_wrap`}>
                        <button>
                          <a href="http://www.groupcalendars.shop/calendar/login" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/project-calender" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={1}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/mollee.png`} alt="슬라이드2" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>MOLLEE</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>Firebase와 Realtime Database를 이용한 쇼핑몰 프로젝트</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 5일</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript, React</em>
                        <em>백엔드 : Firebase, Realtime Database</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="https://dhgh9590-mollee.netlify.app/" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/mollee" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={2}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/movie.png`} alt="슬라이드3" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>MOVIE</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>
                          Node.js와 MongoDB, Next.js를 사용한 영화 평점 사이트 입니다.소셜 로그인을 한 사용자는 평점을
                          등록 할 수 있습니다.
                        </em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 4일</em>
                        <em>백엔드 100%</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript, Next.js</em>
                        <em>백엔드 : Node.js, MongoDB, Firebase</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="https://movie-370306.du.r.appspot.com/" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/movie" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={3}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/youtube_music.png`} alt="슬라이드4" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>YoutubeMusic</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>firebase와 Node.js, mongoDB를 이용한 유튜브 음악 사이트</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 7일</em>
                        <em>백엔드 100%</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript, React</em>
                        <em>백엔드 : Node.js, Firebase, MongoDB</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="https://music-367115.dt.r.appspot.com/" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/music" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={4}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/youtube.png`} alt="슬라이드5" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>Youtube</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>Youtube API를 사용한 React,Typescript 프로젝트</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 4일</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript, Typescript , React</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="https://dhgh9590-youtube.netlify.app/" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/YouTube-clone" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={5}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/frock.png`} alt="슬라이드6" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>frock</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>Firebase를 이용한 간단한 React 쇼핑몰 프로젝트</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 5일</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript, React</em>
                        <em>백엔드 : Firebase</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="http://dhgh9590.dothome.co.kr/frock/" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/frock" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
              <li>
                <SwiperSlide key={6}>
                  <div className={`${styles.slide} slide`}>
                    <div className={`${styles.slide_img} slide_img`}>
                      <img src={`${process.env.PUBLIC_URL}/images/mockup/news.png`} alt="슬라이드7" />
                    </div>
                    <div className={`${styles.slide_text} slide_text`}>
                      <p>RESPONSIVE WEB</p>
                      <h2>New York Times</h2>
                      <div className={`${styles.text} text`}>
                        <strong>프로젝트 소개</strong>
                        <em>News API를 이용한 Vanilla JS 프로젝트</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>팀 구성</strong>
                        <em>프론트엔드 1명</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>기여도 및 제작기간</strong>
                        <em>프론트엔드 100%, 제작기간 7일</em>
                      </div>
                      <div className={`${styles.text} text`}>
                        <strong>제작 방식</strong>
                        <em>프론트엔드 : HTML5, CSS3, Javascript</em>
                      </div>
                      <div className={`${styles.btn_wrap} btn_wrap`}>
                        <button>
                          <a href="http://dhgh9590.dothome.co.kr/news/index.html" target="_blank" rel="noreferrer">
                            VIEW SITE
                          </a>
                        </button>
                        <button>
                          <a href="https://github.com/dhgh9590/News" target="_blank" rel="noreferrer">
                            GIT HUB
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </li>
            </ul>
          </div>
        </Swiper>
      </div>
    </div>
  );
}
