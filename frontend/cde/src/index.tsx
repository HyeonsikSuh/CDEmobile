import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Executives from './pages/executives/executives';
import Introduce from './pages/introduce/introduce';
import Calendar from './pages/calendar/calendar';
import Login from './pages/login/login';
import Announce from './pages/announce/announce';
import PrinterList from './pages/record/printerlist';
import Printer1 from './pages/record/printerrecord/printer1';
import RecentContents from './pages/record/printerrecord/recent';
//lazy=한번에 모든걸 로딩하는걸 방지
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<BrowserRouter>

    <Routes>
      <Route path='/' element={<App />}/>
      <Route path='/executives' element={<Executives/>}/>
      <Route path='/introduce' element={<Introduce/>}/>
      <Route path='/calendar' element={<Calendar/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/announce' element={<Announce/>}/>
      <Route path='/printerlist' element={<PrinterList/>}/>
      <Route path='/printerlist/printer1' element={<Printer1/>}/>
      <Route path='/recent' element={<RecentContents/>}/>
    </Routes>

    </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
