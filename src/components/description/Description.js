import React, { useContext } from 'react';
import { StyledDescription, Title, Artist } from './Description.styled';
import Context from '../../store/PlaylistContext';

const Description = () => {
  const {
    filteredList: { title, album },
  } = useContext(Context);

  return (
    <StyledDescription>
      <Title>{title}</Title>
      <Artist>{album}</Artist>
    </StyledDescription>
  );
};

export default Description;
