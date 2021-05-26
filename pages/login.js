import Header from "../components/Header";
import styled from "styled-components";

export default function login() {
  return (
    <Container>
      <Header />
    </Container>
  );
}

const Container = styled.div`
  position: reletive;
  height: calc(100vh - 70px);

  &:before {
    background: url("home-background.png") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;
