import { Container, Title, Description } from './styles';

export const Main = ({
  title = 'Boilerplate',
  description = 'Typescript, ReactJs, NextJs e Styled components, Storybook, React Testing Library',
}) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};
