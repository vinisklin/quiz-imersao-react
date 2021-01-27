import styled from 'styled-components'
import db from "../db.json";
import Widget from "../src/components/Widget";

const BackgroundImage = styled.div`
  background: url(${db.bg}) center/cover;
  flex: 1;
`;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  return (
    <BackgroundImage>
      <QuizContainer>
        <Widget>
          <Widget.Header>
            <h1>Teste</h1>
          </Widget.Header>
          
          <Widget.Content>
            <p>Teste doio</p>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Teste</h1>

            <p>Teste doio</p>
          </Widget.Content>
        </Widget>
      </QuizContainer>
    </BackgroundImage>
  )
}
