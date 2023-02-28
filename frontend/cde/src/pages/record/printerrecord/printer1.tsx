import React from 'react';
import "./_index.css"
import BackHeader from "../../../layout/header/BackHeader";
import api from '../../../api';
import RecentContents from './recent';

interface DiaryEntry {
  date: string;
  start: string;
  end: string;
  name: string;
  studentNumber: string;
}

const Printer1 = () => {
  const [date, setDate] = React.useState("");
  const [startTime, setStartTime] = React.useState("");
  const [endTime, setEndTime] = React.useState("");
  const [name, setName] = React.useState("");
  const [studentNumber, setStudentNumber] = React.useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const eventData: DiaryEntry = {
      date: date,
      start: startTime,
      end: endTime,
      name: name,
      studentNumber: studentNumber
    };
    const requestData = { data: eventData }; // add the "data" payload to the request body
    try {
      const { data } = await api.post('/api/printer1s', requestData);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  

  return (
    <div className="container1">
      <div className="container">
        <BackHeader title="3D 프린터 1" />

        <form onSubmit={handleSubmit}>
          <div className='date'>
            <label htmlFor="date">날짜:</label>
            <input type="date" id="date" value={date} onChange={(event) => setDate(event.target.value)} required />
          </div>
          <div className='starttime'>
            <label htmlFor="start-time">시작시간:</label>
            <input type="time" id="start-time" value={startTime} onChange={(event) => setStartTime(event.target.value)} required />
          </div>
          <div className='endtime'>
            <label htmlFor="end-time">종료시간:</label>
            <input type="time" id="end-time" value={endTime} onChange={(event) => setEndTime(event.target.value)} required />
          </div>
          <div className='name'>
            <label htmlFor="name">이름:</label>
            <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} placeholder="Enter name" required />
          </div>
          <div className='studentnumber'>
            <label htmlFor="student-number">학번:</label>
            <input type="text" id="student-number" value={studentNumber} onChange={(event) => setStudentNumber(event.target.value)} placeholder="Enter student number" required />
          </div>
          <button type="submit">일지작성</button>
        </form>
        <RecentContents/>
      </div>
    </div>
  );
};

export default Printer1;


