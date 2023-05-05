import styled from 'styled-components'
import Question from './question'
import { motion } from 'framer-motion'

const Wrapper = styled(motion.section) `
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
      <Wrapper  
        initial={{
          x: -100,
          y: 0,
          scale: 1,
          rotate: 0,
        }}
        animate={{
          x: 0,
          y: 0,
          scale: 1,
          rotate: 0,
        }}  
        transition={{ ease: "easeInOut" }}  >
        <Question/>
      </Wrapper>
  );
}

export default Card
