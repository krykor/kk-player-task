import React, { useContext } from 'react';
import { StyledHeader, HeaderText, SongTitle } from './Header.styled';
import Context from '../../store/PlaylistContext';

import back from '../../assets/images/back_ico.svg';
import more from '../../assets/images/more_ico.svg';

const Header = () => {
  const {
    filteredList: { title },
  } = useContext(Context);
  return (
    <StyledHeader>
      <img src={back} alt="back" />
      <div>
        <HeaderText>Album</HeaderText>
        <SongTitle>{title}</SongTitle>
      </div>
      <img src={more} alt="more" />
    </StyledHeader>
  );
};

export default Header;
