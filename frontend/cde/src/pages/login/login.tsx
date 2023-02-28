import "./_index.css"
import BackHeader from "../../layout/header/BackHeader";
import { useState } from "react";
import api from "../../api"
import jwt_decode from 'jwt-decode';
import { Navigate, useNavigate } from "react-router-dom";



const Login=()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [username, setUsername] = useState('');
  const navigate = useNavigate();
  const onClickPush = () => {
    navigate('/');
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await api.post('/api/auth/local', {
        identifier: email,
        password,
      });

      localStorage.setItem('jwt', response.data.jwt);
      const decodedToken: any = jwt_decode(response.data.jwt);
      localStorage.setItem('userId', decodedToken.id);
      localStorage.setItem('username', response.data.user.username); // set username in local storage
      onClickPush();
      setUsername(response.data.user.username); // set username in component state
    } catch (error) {
      console.error(error); 
      setError("이메일 또는 비밀번호가 잘못되었습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="container1">
      <div className="container">
        <BackHeader title="로그인" />
      </div>
      <div className="container">
        <div className="logo">
          <div className="logoimg">
            <img className="logoimage" src="/images/mainimg/CDE.png" alt="..."></img>
          </div>
        </div>
        <div className="welcometext">
          CDE에 오신 것을 환영합니다!
        </div>
        <section></section>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              <div className="email_label">이메일</div>
              <input type="email" className="email_input" value={email} onChange={event => setEmail(event.target.value)} />
            </label>
            <br />
            <label>
              <div className="password_label">비밀번호</div>
              <input type="password" className="password_input" value={password} onChange={event => setPassword(event.target.value)} />
            </label>
            <br />
            <button type="submit"><div className="buttontext">로그인</div></button>
          </form>
          {error && <div className="errormsg">{error}</div>}
        </div>
      </div>
    </div>
  );
}

export default Login;