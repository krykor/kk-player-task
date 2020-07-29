import styled from 'styled-components';

export const StyledPlaylist = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  height: 90px;
  width: 100vw;
  bottom: 0px;
  position: fixed;
  background-color: ${({ theme }) => theme.secondary};
  img {
    max-width: 30px;
    max-height: 30px;
  }
`;

export const SongDescription = styled.div`
  width: 70vw;
`;

export const HeaderText = styled.p`
  color: ${({ theme }) => theme.dark};
  margin: ${({ theme }) => theme.marginS};
  font-size: ${({ theme }) => theme.fontS};
  text-transform: uppercase;
`;

export const SongTitle = styled.p`
  color: ${({ theme }) => theme.dark};
  font-size: ${({ theme }) => theme.fontM};
  margin: ${({ theme }) => theme.marginS};
  :first-letter {
    text-transform: uppercase;
  }
`;
