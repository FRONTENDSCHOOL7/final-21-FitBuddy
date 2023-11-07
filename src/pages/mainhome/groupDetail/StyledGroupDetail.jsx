import styled from 'styled-components';

export const StyleGroupDetail = styled.div`
  color: #fff;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #000;
  width: 414px;
  height: 900px;
  padding-right: 22px;
  font-size: 14px;

  & > div.contents {
    padding-left: 22px;
  }

  .top-title {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .title {
    min-width: 350px;
    font-size: 24px;
    margin: 32px auto 15px auto;
  }
  .description {
    font-size: 20px;
    padding: 11px 0px 11px 0px;
  }
  .imgBox {
    display: flex;
    gap: 10px;
  }
`;

export const StyleContent = styled.li`
  display: flex;

  div {
    color: gray;
  }
  p {
    padding-left: 21px;
    padding-bottom: 11px;
  }

  .sport {
    margin-bottom: 20px;
    display: 'flex';
    > * + * {
      margin-left: 5px;
    }
  }
`;
export const ComFirmButton = styled.div`
  position: absolute;
  z-index: 0.8;
  left: 12%;
  bottom: 4%;
`;

export const StyleJoinMember = styled.div`
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > * {
    margin-bottom: 10px;
  }
  p {
    margin: 10px 0;
  }
  .placeholder-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leader {
    position: absolute;
    top: -5px;
    left: 35px;
    width: 30px;
    z-index: 10;
  }
`;
