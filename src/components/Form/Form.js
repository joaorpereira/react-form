import React, { useState } from 'react'
import FormSignUp from '../FormSignUp/FormSignUp'
import FormSuccess from '../FormSuccess/FormSuccess'
import {Container, FormContent, Img} from "./FormStyles"

const Form = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm(){
        setIsSubmitted(true)
    }
    
    return (
        <>
            <Container>
                <FormContent>
                    <Img src="" alt="success sign-up"/>
                </FormContent>
                {!isSubmitted ? (<FormSignUp submitForm={submitForm} />) : (<FormSuccess />)}
            </Container>
        </>
    )
}

export default Form
