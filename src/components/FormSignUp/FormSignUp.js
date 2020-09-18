import React from 'react'
import useForm from "../../hooks/useForm"
import validate from "../validateInfo"
import { Form, TextTitle, FormInput, Label, Input } from "./SignUpStyles"
import { FormContentLeft, Button } from '../../globalStyles'


const FormSignUp = ({submitForm}) => {

    const { values, handleChange, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <>
            <FormContentLeft>
                <Form onSubmit={handleSubmit}>
                    <TextTitle> Create your account by filling out the
          information below.</TextTitle>
                    <FormInput>
                        <Label htmlFor="username">Name</Label>
                        <Input 
                            id="username" 
                            type="text" 
                            name="username" 
                            placeholder="Enter your username"
                            value={values.username}
                            onChange={handleChange}/>
                            {errors.username && <p>{errors.username}</p>}
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
                            {errors.email && <p>{errors.email}</p>}
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
                            {errors.password && <p>{errors.password}</p>}
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
                            {errors.password2 && <p>{errors.password2}</p>}
                    </FormInput>
                    <Button>Enviar</Button>
                </Form>                
            </FormContentLeft>
        </>
    )
}

export default FormSignUp
