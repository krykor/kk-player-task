import styled from 'styled-components';

export const StyledDescription = styled.div`
  text-align: center;
`;

export const Title = styled.h3`
  color: ${({ theme }) => theme.secondary};
  font-size: ${({ theme }) => theme.fontXL};
  margin: ${({ theme }) => theme.marginS};
  font-weight: bold;
  :first-letter {
    text-transform: uppercase;
  }
`;
export const Artist = styled.p`
  color: ${({ theme }) => theme.primary};
  margin: ${({ theme }) => theme.marginS};
  font-size: ${({ theme }) => theme.fontM};
  text-transform: uppercase;
`;
