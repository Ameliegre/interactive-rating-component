import styled from 'styled-components'
import Question from './question'

const Wrapper = styled.section `
  display: flex;
  background-color: hsl(213, 19%, 18%);
  border-radius: 7%;
  padding: 8%;
  @media (max-width: 375px) {
    padding: 8% 5%;
  }
`

function Card() {
  return (
      <Wrapper>
        <Question/>
      </Wrapper>
  );
}

export default Card
