import "./_index.css"
import {useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';



interface BackHeaderProps {
    title: string;
  }

const BackHeader = (props: BackHeaderProps) => {
    const navigate = useNavigate();
    return (
      <header className="header">
      <div className="header__inner">
        <FontAwesomeIcon
          icon={faChevronLeft}
          onClick={() => {
            navigate(-1);
          }}
        />
        <div className="header__title header__title-center">{props.title}</div>
      </div>
    </header>
    );
  };
  
  export default BackHeader;