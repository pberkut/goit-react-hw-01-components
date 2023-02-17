import { Container } from './Wrapper.styled';

export const Wrapper = ({ children }) => (
  <Container className="wrapper">{children}</Container>
);
