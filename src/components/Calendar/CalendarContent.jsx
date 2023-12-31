import React from 'react';
import styled from 'styled-components';

const StyledCalendarContent = styled.div`
  display: flex;
  justify-content: space-between;
  width: 375px;
  height: 25px;
  padding: 0px 9px 8px 8px;
  border: 1px solid #fff;
  font-size: 14px;

  i {
    &::after {
      content: '|';
    }
  }
`;

export default function CalendarContent({ emoji, title, time }) {
  return (
    <StyledCalendarContent>
      <p>
        <i>{emoji}</i>
        {title}
      </p>
      <div>{time}</div>
    </StyledCalendarContent>
  );
}
