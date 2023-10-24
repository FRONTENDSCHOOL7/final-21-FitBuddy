import React from 'react';
import styled from 'styled-components';
import person from '../../assets/icons/icon-person.svg';
import editIcon from '../../assets/icons/icon_edit.svg';
const StyledPost = styled.div`
  display: flex;
  width: 372px;
  padding: 0px 10px;
  gap: 12px;

  p {
    color: gray;
  }
`;

const StyledPostEdit = styled.div`
  display: flex;

  margin-left: auto;
`;

export default function PostCommunity() {
  return (
    <StyledPost>
      <img src={person} alt='profileImg' />
      <div>
        <h1>핏버디핏버디</h1>
        <p>@FitBuddy0012</p>
      </div>

      <StyledPostEdit>
        <img src={editIcon} alt='editIcon' />
      </StyledPostEdit>
    </StyledPost>
  );
}
