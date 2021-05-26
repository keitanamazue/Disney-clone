import Header from "../components/Header";
import Main from "../components/Main";
import "../styles/Home.module.css";
import styled from "styled-components";

export default function Home() {
  return (
    <Container>
      <Header />
      <Main />
    </Container>
  );
}

const Container = styled.div`
  background-color: #040714;
`;
