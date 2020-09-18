import styled from "styled-components"

export const Form = styled.form`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
`;

export const TextTitle = styled.h1`
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-align: start;
    width: 80%;
    margin-bottom: 1rem;
    color: #fff;
`;

export const FormInput = styled.div`
    margin-bottom: 1rem;
    width: 80%;
    p {
        font-size: 0.8rem;
        margin-top: 0.5rem;
        color: #f00e0e;
    }
`;

export const Label = styled.label`
    display: inline-block;
    font-size: 0.8rem;
    margin-bottom: 6px;
    color: #fff;
`;

export const Input = styled.input`
    display: block;
    padding-left: 10px;
    outline: none;
    border-radius: 2px;
    height: 40px;
    width: 100%;
    border: none;
    ::placeholder {
        color: #595959;
        font-size: 12px;
    }
`;
