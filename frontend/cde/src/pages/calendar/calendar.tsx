import "./_index.css"
import BackHeader from "../../layout/header/BackHeader";
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


const Calendar=()=>{
    return(
        <div className="container1">
            <div className="container">
  
        <BackHeader title="동아리일정" />
        <FullCalendar 
          initialView="dayGridMonth" 
          plugins={[ dayGridPlugin ]}
          events={[
            {title: '수강신청', date:'2023-02-08', Color: '#378006'},
            {title: '개강', date:'2023-02-20'},
            {title: '면접', date:'2023-02-22'},
            {title: '개강총회', date:'2023-02-24'},
            {title:'선후배 이벤트', start:'2023-02-27', end:'2023-03-10'},
            {title: '교육활동', date:'2023-03-07'},
            {title: '교육활동', date:'2023-03-10'},
            {title: '교육활동', date:'2023-03-14'},
            {title: '교육활동', date:'2023-03-17'},
        ]}
        />
       
        </div>

        </div>

    )
}
export default Calendar;