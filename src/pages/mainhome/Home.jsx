import React from 'react';
import styled, { css } from 'styled-components';
import titleIcon from '../../assets/icons/icon-logo.svg';
import Chip from '../../components/Common/Chip/Chip';
import Card from '../../components/Card/Card';
import ButtonFloating from '../../components/Common/Buttons/ButtonFloating';

const StyleHome = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: #000;
  width: inherit;
  height: 900px;
  border: 1px solid red;
  padding-left: 22px;
  padding-right: 22px;

  .titleIcon {
    max-width: 40%;
    max-height: 40%;
    margin-top: 34px;
  }
`;
const StyleChips = styled.div`
  display: flex;
  gap: 12px;
  margin: 25px 11px 15px 11px;
`;
const StyleCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;
const StyleAddButton = styled.div`
  position: absolute;
  bottom: 120px;
  right: 16px;
`;

export default function Home() {
  return (
    <StyleHome>
      <img src={titleIcon} alt='title' className='titleIcon' />
      <StyleChips>
        <Chip />
        <Chip />
        <Chip />
        <Chip />
      </StyleChips>
      <StyleCards>
        <Card />
        <Card />
        <Card />
        <Card />
      </StyleCards>
      <StyleAddButton>
        <ButtonFloating />
      </StyleAddButton>
    </StyleHome>
  );
}
