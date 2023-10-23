import React, { useEffect, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import axios from 'axios';

import styled from 'styled-components';

const StyledCalendar = styled.div`
  width: 359px;
  height: 429px;
`;

const CalendarComponent = () => {
  const [calendarEvents, setCalendarEvents] = useState([]);

  useEffect(() => {
    // 함수 내에서 Google Calendar API로 데이터를 요청
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.googleapis.com/calendar/v3/calendars/338006315485-adadc6te1fg7u2kdnj1ap8sbbgdj7a6h.apps.googleusercontent.com/events?key=AIzaSyDjA0T0VrCTh5yeO_9GS7csL76_DCTZNtY`,
          {
            params: {
              timeMin: new Date().toISOString(),
              showDeleted: false,
              singleEvents: true,
              maxResults: 10,
              orderBy: 'startTime',
            },
          },
        );
        const events = response.data.items;
        const formattedEvents = events.map((event) => ({
          title: event.summary,
          start: event.start.dateTime || event.start.date,
          end: event.end.dateTime || event.end.date,
        }));
        setCalendarEvents(formattedEvents);
      } catch (error) {
        console.error('API 요청 오류:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <StyledCalendar id='calendar'>
      <FullCalendar plugins={[dayGridPlugin]} initialView='dayGridMonth' events={calendarEvents} />
    </StyledCalendar>
  );
};

export default CalendarComponent;
