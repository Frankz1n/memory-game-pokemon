import UserComponent from "../../components/UserComponent";
import { Container, StyledLink } from "./styles";

export default function Home() {
  return (
    <Container>
      <UserComponent />
      <StyledLink to="/game">iniciar</StyledLink>
    </Container>
  );
}
