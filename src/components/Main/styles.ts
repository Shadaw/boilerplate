import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 2rem;
  background-color: #202020;
  color: #ffffff;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 5rem;
  margin-bottom: 2rem;
`;

export const Description = styled.h2`
  filter: brightness(0.7);
`;
