import "./_index.css"
import BackHeader from "../../layout/header/BackHeader";
import {useNavigate} from "react-router-dom";

const PrinterList=()=>{
    const navigate = useNavigate();


  return (
    <div className="container1">
    <div className="container">
    <BackHeader title="일지작성하기" />

    <div className="printer">
    <div className="printerimg"></div>
     <div className="tag">
         <div className="printername">3D 프린터1</div>
           <div className="btn">
              <button className="printer__btn" onClick={() => navigate("/printerlist/printer1")}>일지 작성하기</button>
            </div>
     </div>
    </div>

    <div className="printer">
    <div className="printerimg"></div>
     <div className="tag">
         <div className="printername">3D 프린터2</div>
           <div className="btn">
              <button className="printer__btn">일지 작성하기</button>
            </div>
     </div>
    </div>

    <div className="printer">
    <div className="printerimg"></div>
     <div className="tag">
         <div className="printername">3D 프린터3</div>
           <div className="btn">
              <button className="printer__btn">일지 작성하기</button>
            </div>
     </div>
    </div>

<section></section>
<section></section>
<section></section>

    </div>
    </div>
  );
};

export default PrinterList;