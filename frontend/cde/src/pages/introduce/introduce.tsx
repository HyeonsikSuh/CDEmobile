import "./_index.css"
import BackHeader from "../../layout/header/BackHeader";

const Introduce=()=>{
    return(
        <div className="container1">
            <div className="container">
        <BackHeader title="동아리소개" />
        </div>
        <div className="container">
        <div className="mainimg">
            <img className="mainlogo" src='/images/introduce/CDE.png' alt="..."/>
        </div>
        <div className="title">
            CDE
        </div>
        <div className="para">
        기계시스템디자인공학 기계설계자동화 / 기계정보 <br></br>공학 프로그램
학술 동아리 입니다. <br></br>CAD/CAM/CAE를 연구하며 Industry 4.0의
기계공학을 공부합니다. 
        </div>
        <div className="badges">
            <div className="badge">
                <img className="badgeimg" src='/images/introduce/solidworks.png' alt="..." />
                <div className="badgetitle">CAD</div>
            </div>
            <div className="badge">
                <img className="badgeimg" src='/images/introduce/CAM.png' alt="..." />
                <div className="badgetitle">CAM</div>
            </div>
            <div className="badge">
                <img className="badgeimg" src='/images/introduce/CAE.png' alt="..." />
                <div className="badgetitle">CAE</div>
            </div>
        </div>

        <div className="secondtitle">
            CDE의 장점은
        </div>
        <div className="secondpara">
        과선후배, 동기들과의 교류를 통해 여러가지 정보를 얻을 수 있을
뿐더러 친목도 쌓아가고 즐거운 학교 <br></br>생활의 시작점이 되어
드립니다.<br></br>
또한 공모전과 경진대회 참가를 통한 포트폴리오 및 스펙업의 기회도 얻을 수 있습니다.
        </div>

        <div className="secondbadges">
        <div className="badge">
                <img className="badgeimg" src='/images/introduce/mt.png' alt="..." />
                <div className="badgetitle">친목활동</div>
            </div>
            <div className="badge">
                <img className="badgeimg" src='/images/introduce/award.png' alt="..." />
                <div className="badgetitle">대외활동</div>
            </div>
            </div>

<section> </section>
<section> </section>
<section> </section>
        </div>
        </div>

    )
}
export default Introduce;
