import React from 'react'
import Form from '../Form/Form'
import useForm from "../../hooks/useForm"
import {FormContainer, FormInput, Label, Input, Button} from "./SignUpStyles"


const FormSignUp = () => {

    const { values, handleChange, handleSubmit } = useForm();

    return (
        <>
            <FormContainer>
                <Form onSubmit={handleSubmit}>
                    <h1> Get started with us today! Create your account by filling out the
          information below.</h1>
                    <FormInput>
                        <Label htmlFor="username">Name</Label>
                        <Input 
                            id="username" 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleChange}/>
                    </FormInput>
                    <FormInput>
                        <Label htmlFor="email">Email</Label>
                        <Input 
                            id="email" 
                            type="text" 
                            name="email" 
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}/>
                    </FormInput>
                    <FormInput>
                        <Label htmlFor="password">Password</Label>
                        <Input 
                            id="password" 
                            type="password" 
                            name="password" 
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}/> 
                    </FormInput>
                    <FormInput>
                        <Label htmlFor="password2">Confirm Password</Label>
                        <Input 
                            id="password2" 
                            type="password" 
                            name="password2" 
                            placeholder="Enter your password"
                            value={values.password2}
                            onChange={handleChange}/>
                    </FormInput>
                    <Button>Enviar</Button>
                </Form>
                
            </FormContainer>
        </>
    )
}

export default FormSignUp
