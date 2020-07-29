import React, { useContext } from 'react';
import { StyledDescription, Title, Artist } from './Description.styled';
import Context from '../../store/PlaylistContext';

const Description = () => {
  const {
    filteredList: { title, author },
  } = useContext(Context);

  return (
    <StyledDescription>
      <Title>{title}</Title>
      <Artist>{author}</Artist>
    </StyledDescription>
  );
};

export default Description;
