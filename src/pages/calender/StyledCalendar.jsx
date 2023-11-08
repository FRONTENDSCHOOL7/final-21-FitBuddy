import styled from 'styled-components';

export const StyledCalendar = styled.div`
  display: flex;
  flex-direction: column;

  /* 캘린더 컴포넌트에 대한 스타일 */
  .rbc-calendar {
    background-color: #141414; /* 캘린더의 배경색 변경 */
    border: none;
    margin-bottom: 26px;
  }
  .rbc-header {
    font-size: 20px;
  }
  .rbc-row-bg {
    display: flex;
    justify-content: center;
  }
  .rbc-date-cell {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
  .rbc-toolbar {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 30px;
  }
  .rbc-off-range {
    visibility: hidden;
  }
  .rbc-off-range-bg {
    background: none;
  }

  .rbc-toolbar label {
    order: 2; /* 원래 날짜를 표시하는 라벨의 위치를 바꾸고 싶다면 */
  }
  .rbc-calendar {
    width: 100%;
  }
  .rbc-btn-group {
    order: 1; /* 버튼 그룹의 위치를 바꾸고 싶다면 */
  }

  .rbc-header + .rbc-header,
  .rbc-day-bg + .rbc-day-bg,
  .rbc-month-row + .rbc-month-row,
  .rbc-month-view {
    border: none;
  }
  .rbc-btn-group {
    button {
      padding: 5px 10px; // 버튼 내 패딩을 조정하여 버튼 크기를 변경합니다.
      font-size: 0.85em; // 버튼 텍스트 크기를 줄입니다.
    }
  }
  .rbc-toolbar-label {
    font-size: 24px;
    font-weight: 700;
    font-family: 'Pretendar';
  }
  .rbc-today {
    border-radius: 50%;
    margin-right: 35px;

    height: 50px;
    margin-left: 52px;
    margin-top: 4px;
    background-color: #a6ff4d;
    color: #141414;
  }
  .rbc-today .rbc-button-link {
    color: #141414; /* 원하는 색상 코드로 변경하세요 */
  }
  .rbc-event {
    display: none; /* 모든 이벤트를 숨김 */
  }
  .rbc-button-link {
    font-size: 20px;
  }
  .rbc-header {
    padding: 10px 0; /* 각 요일 헤더의 상하 패딩 조정 */
    background-color: #141414; /* 헤더 배경색 변경 */
  }

  .rbc-event {
    margin-bottom: 4px; /* 이벤트 간 간격 조정 */
    background-color: #d2e0fc; /* 이벤트 배경색 변경 */
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 17px;
  }

  li {
    display: flex;
    justify-content: space-between;
    padding-bottom: 8px;
    border-bottom: 1px solid gray;
    p {
      margin-bottom: 6px;
    }
  }
  .today {
    margin-bottom: 22px;
  }
`;
