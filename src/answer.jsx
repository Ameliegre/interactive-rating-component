import styled from 'styled-components'
import illustration from './images/illustration-thank-you.svg' 
import { motion } from 'framer-motion'

const WrapperAnswer = styled(motion.div)`
   display: flex;
   flex-direction: column;
   align-items: center;
`

const SelectAnswer = styled.p`
    color: hsl(25, 97%, 53%);
    background-color: hsl(213, 19%, 18%);
    filter: brightness(1.3);
    border-radius: 20px;
    padding: 4px 10px;
    margin: 0;
    margin-top: 26px;
`

const TitleAnswer = styled.h1`
    margin-top: 30px;
    margin-bottom: 12px;
`

const TextAnswer = styled.p `
    margin-top: 0;
    text-align: center;
    padding: 0 6px;
    @media (max-width: 375px) {
        padding: 0;
        margin-bottom: 0;
    }
`


function Answer({number}) {
    console.log(number)
    return(
        <WrapperAnswer 
            initial={{ opacity: 0, scale: 0.5 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01]
            }} >
            <img src={illustration} alt='logo'></img>
            <SelectAnswer>You selected {number} out of 5</SelectAnswer>
            <TitleAnswer>Thank you!</TitleAnswer>
            <TextAnswer>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</TextAnswer>
        </WrapperAnswer>
    );
}

export default Answer