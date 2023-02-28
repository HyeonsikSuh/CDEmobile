import React, { useEffect, useState } from 'react';
import api from '../../../api';

interface Content {
  name: string;
  studentNumber: string;
  startTime: string | null;
  endTime: string | null;
}

interface PrinterResponse {
  data: Content[];
}

const RecentContents = () => {
  const [contents, setContents] = useState<Content[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.get<PrinterResponse>('/api/printer1s?_sort=id:desc&_limit=5&_start=0');
        setContents(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Recent Contents</h2>
      {contents.length > 0 ? (
        contents.map((content, index) => (
          <div className="contents" key={index}>
            <div>이름: {content.name}</div>
            <div>학번: {content.studentNumber}</div>
            <div>시작시간: {content.startTime ?? 'N/A'}</div>
            <div>종료시간: {content.endTime ?? 'N/A'}</div>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default RecentContents;







