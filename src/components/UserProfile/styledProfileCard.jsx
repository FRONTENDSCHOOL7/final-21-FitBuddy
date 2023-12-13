import styled from 'styled-components';

export const ProfileCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    padding-top: 9px;
  }
  padding-bottom: 50px;
`;

export const FollowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Follow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 49px;
  p {
    padding-top: 15px;
    font-size: var(--font-size-xs);
  }
  p:first-child {
    font-size: var(--font-size-md);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 9px;
  padding-bottom: 12px;

  p {
    font-size: var(--font-size-xs);
  }
  p:first-child {
    font-size: var(--font-size-lg);
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: center;
  & > * {
    margin-right: 10px;
  }
  & > *:last-child {
    margin-right: 0;
  }
`;
