import React, { useState } from 'react'
import { Container } from '../../globalStyles'
import FormSignUp from '../FormSignUp/FormSignUp'
import FormSuccess from '../FormSuccess/FormSuccess'
import styled from "styled-components"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }
    
    return (
        <>
            <Container>
                <CloseBtn>×</CloseBtn>
                {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
                <FormContentRigth>
                    {!isSubmitted ? <Img src="img/img-6.svg" alt="success sign-up"/> : <div></div>}
                </FormContentRigth>
            </Container>
        </>
    )
}

const FormContentRigth = styled.div`
    background: linear-gradient(90deg, #e66465 0%, #9198e5 100%);
    position: relative;
`;

const Img = styled.img`
    width: 80%;
    height: 80%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const CloseBtn = styled.span`
    position: absolute;
    top: 2%;
    right: 3%;
    font-size: 1.5rem;
    z-index: 1;
    color: #fff;
    cursor: pointer;
`;

export default Form


