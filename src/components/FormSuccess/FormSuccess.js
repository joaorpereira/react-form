import React from 'react'
import {Img, TextTitle} from "./SuccessStyles"
import { FormContentLeft } from '../../globalStyles'

const FormSuccess = () => {
    return (
        <>
            <FormContentLeft>
                    <TextTitle>We have received your request</TextTitle>
                    <Img src="img/img-2.svg"alt="success sign-up"/>
            </FormContentLeft>
        </>
    )
}

export default FormSuccess
