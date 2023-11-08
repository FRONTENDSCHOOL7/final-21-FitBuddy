import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import NavBottom from '../../components/Common/Nav/NavBottom';
import NavTopBasic from '../../components/Common/Nav/NavTopBasic';
import { StyledCalendar } from './StyledCalendar';

const localizer = momentLocalizer(moment);

export default function Calender() {
  const events = [
    {
      title: 'Meeting',
      start: new Date(2023, 10, 5, 10, 0),
      end: new Date(2023, 10, 5, 12, 0),
    },
    // 다른 이벤트들...
  ];

  return (
    <StyledCalendar>
      <NavTopBasic title='캘린더' />
      <div>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor='start'
          endAccessor='end'
          style={{ height: 429, width: '100%' }}
          defaultView='month'
          views={['month']}
          // toolbar={false}
        />
        {/* 이벤트 추가 버튼 */}
      </div>

      <ul>
        <div className='today'>10월 8일(목)</div>
        <li>
          <p>😉 | 헬스 배우고 싶은 분</p>
          <div>오후 6:00 ~ 오후 7:00</div>
        </li>
        <li>
          <p>😉 | 헬스 배우고 싶은 분</p>
          <div>오후 6:00 ~ 오후 7:00</div>
        </li>
        <li>
          <p>😉 | 헬스 배우고 싶은 분</p>
          <div>오후 6:00 ~ 오후 7:00</div>
        </li>
        <li>
          <p>😉 | 헬스 배우고 싶은 분</p>
          <div>오후 6:00 ~ 오후 7:00</div>
        </li>
      </ul>
      <NavBottom />
    </StyledCalendar>
  );
}
