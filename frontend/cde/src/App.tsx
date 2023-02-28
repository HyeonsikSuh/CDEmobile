import React, { useRef, useEffect, useState} from "react";
import './App.css';
import Header from "./layout/header/Header";
import styled from "styled-components";
import Slider from "./layout/carousel/Carousel";
import KakaoMap from "./map/MapContainer";
import {useNavigate} from "react-router-dom";
import Footer from "./layout/footer/footer";

declare global {
  interface Window {
    kakao: any;
  }
}

const MenuBtn = styled.div`
  width: 100%;
`;

const MenuImg = styled.img`
  width: 100%;
  height: 100%;
`;


function App() {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  return (
    
    <div className="App">
     
      <div className="container">
        <Header />
      </div>
      <Slider/>
      <div className='container'>
        <section>
      <div className="title">학술동아리 CDE</div>
      <div className="introtitle">기계시스템디자인공학과 CAD/CAM/CAE 동아리</div>
      </section>

      <section>
        <div className='subtitle'>동아리 알아보기</div>
        <div className="buttons">
          <MenuBtn onClick={() => navigate("/announce")}><MenuImg src={process.env.PUBLIC_URL + 'https://i.ibb.co/17PgLYg/image.png'} /></MenuBtn>
          <MenuBtn onClick={() => navigate("/introduce")}><MenuImg src={process.env.PUBLIC_URL + 'https://i.ibb.co/vkV4K5P/image.png'} alt="..."/></MenuBtn>
          <MenuBtn onClick={() => navigate("/executives")}><MenuImg src={process.env.PUBLIC_URL + 'https://i.ibb.co/Xk4VY4F/image.png'} /></MenuBtn>
          <MenuBtn onClick={() => navigate("/calendar")}><MenuImg src={process.env.PUBLIC_URL + 'https://i.ibb.co/VNkXhFj/image.png'} /></MenuBtn>
          {userId && username && <MenuBtn><a href="https://drive.google.com/drive/folders/1DDCIv4jW2FsFBC2sLeSyuxgYVXmeE2jX?usp=sharing"><MenuImg src={process.env.PUBLIC_URL + 'https://i.ibb.co/jh6wqxq/image.png'} /></a></MenuBtn>}</div>
       
       {userId && username &&
        <div className='record' onClick={() => navigate("/printerlist")}>
        <img className='dailyrecord' src={process.env.PUBLIC_URL + 'https://i.ibb.co/1sPY9TB/image.png'} alt="..."></img>
        </div>}
      </section>

      <section>
        <div className='subtitle'>CDE 뉴스</div>

        <div className="newscard1">
                <img className="newsimg" src={process.env.PUBLIC_URL + 'https://i.ibb.co/zrqqX5g/news1.jpg'} alt="..."></img>
                <div className="cardtext">
                <div className="newstitle">대외활동(2022.05~12)</div>
                <div className="newstext">2022년 제 14회 대학생 공작기계 창의 아이디어 공모전</div>
                </div>
            </div>
            <div className="newscard1">
                <img className="newsimg" src={process.env.PUBLIC_URL + 'https://i.ibb.co/bJnJz3d/news2.jpg'} alt="..."></img>
                <div className="cardtext">
                <div className="newstitle">대외활동(2022.07~12)</div>
                <div className="newstext">2022년 서울과학기술대학교 슈퍼로컬 프로젝트 최우수상</div>
                </div>
            </div>
            <div className="newscard1">
                <img className="newsimg" src={process.env.PUBLIC_URL + 'https://i.ibb.co/Z1393z9/news3.jpg'} alt="..."></img>
                <div className="cardtext">
                <div className="newstitle">CDE활동(2022.05)</div>
                <div className="newstext">5월에 만나는 SIMTOS 참가</div>
                </div>
            </div>
            
      </section>
      <section>
      <div className='subtitle'>찾아오시는 길</div>
      <div className="mapsection"></div>
      <KakaoMap/>
      </section>
      <section></section>
    </div>
      <Footer/>
    </div>

  );
}

export default App;