import styled from 'styled-components';

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 10;
  height: 100px;
  width: 100vw;
  top: 0px;
  position: relative;
  text-align: center;
  div {
    flex-grow: 2;
    max-width: 50vw;
  }
  img {
    flex-grow: 1;
    max-width: 30px;
    max-height: 30px;
  }
`;

export const HeaderText = styled.p`
  color: ${({ theme }) => theme.primary};
  margin: ${({ theme }) => theme.marginS};
  text-transform: uppercase;
  font-weight: normal;
`;

export const SongTitle = styled.p`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontL};
  margin: ${({ theme }) => theme.marginS};
  :first-letter {
    text-transform: uppercase;
  }
`;
