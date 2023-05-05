import { useState } from 'react'
import styled from 'styled-components'
import Answer from './answer'
import starIcon from './images/icon-star.svg'
import { motion } from 'framer-motion'

const Star = styled.i`
    background-color: hsl(213, 19%, 18%);
    filter: brightness(1.3);
    align-self: flex-start;
    padding: 17px 17px 10px;
    border-radius: 50%;
`

const StarIcon = styled.img `
    margin-top: 22px
`

const NumberList = styled.div`
    display: flex;
    justify-content: space-between;
`

const NumberButton = styled.button`
    padding : 18px 22px;
    border-radius: 50%;
    border: none;
    background-color: hsl(213, 19%, 18%);
    filter: brightness(1.3);
    color: hsl(216, 12%, 54%);
    &:focus{
        color: white;
        background-color: hsl(25, 97%, 53%);
        cursor: pointer;
    }
    @media (max-width: 375px) {
        padding: 14px 18px;
    }
`

const SubmitButton = styled(motion.button)`
    border-radius: 20px;
    border: none;
    color: white;
    background-color: hsl(25, 97%, 53%);
    padding: 10px 0px;
    margin-top: 30px;
    width: 100%;
    &:hover {
        color: hsl(25, 97%, 53%);
        background-color: white;
        cursor: pointer;
    }
    @media (max-width: 375px) {
        margin-top: 20px;
        padding: 14px 0px;  
    }
`

function Question() {

    const numberArray = [1,2,3,4,5];
    const [number, setNumber] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    function handleClick(number, e) {
        e.preventDefault()
        setNumber(number);
    }

    function handleSubmit(e) {
        e.preventDefault()
        setIsSubmitted(true);
        console.log(number)
    }

    const listNumber = numberArray.map((number, index) => <NumberButton key={index} onClick={(e) => handleClick(number, e)}>{number}</NumberButton>)

    return(
        <>
            {isSubmitted ? (
                <Answer number={number}/>
            ) : (
                <form onSubmit={handleSubmit}>
                    <Star>
                        <StarIcon src={starIcon} alt='icon'></StarIcon>
                    </Star>
                    <h1>How did we do?</h1>
                    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
                    <NumberList>{listNumber}</NumberList>
                    <SubmitButton whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} type='submit'>S U B M I T</SubmitButton>
                </form> 
            )}  
        </> 
    );
}

export default Question