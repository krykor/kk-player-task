import React from 'react';
import { StyledHeader, HeaderText, SongTitle } from './Header.styled';

import back from '../../assets/images/back_ico.svg';
import more from '../../assets/images/more_ico.svg';

const Header = () => {
  return (
    <StyledHeader>
      <img src={back} alt="back" />
      <div>
        <HeaderText>test</HeaderText>
        <SongTitle>test</SongTitle>
      </div>
      <img src={more} alt="more" />
    </StyledHeader>
  );
};

export default Header;
