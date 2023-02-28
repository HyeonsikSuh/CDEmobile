import "./_index.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("userId");
    localStorage.removeItem("username");
    navigate("/");
  };

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__title">CDE</div>
        {username ? (
          <div className="header__user">
            <div className="username">{username}님 반갑습니다!</div>
            <button className="logout__button" onClick={handleLogout}>
              로그아웃
            </button>
          </div>
        ) : (
          <div className="login__button" onClick={() => navigate("/login")}>
            로그인
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

