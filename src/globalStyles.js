import styled, { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding:0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const Container = styled.div`
    margin: 30px auto;
    width: 1000px;
    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 7px 20px 0 rgba(0, 0, 0, 0.2);
    position: relative;
    border-radius: 10px;
    height: 600px;
    display: grid;
    grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
    width: 80%;
    height: 50px;
    margin-top: 10px;
    border-radius: 2px;
    background: linear-gradient(90deg, #e66465 0%, #9198e5 100%);
    outline: none;
    border: none;
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    margin-top: 30px;

    &:hover {
        cursor: pointer;
        background: linear-gradient(90deg, #9198e5 0%, #9198e5 100%);
        transition: all 0.5s ease-in-out;
    }
`;

export const FormContentLeft = styled.div`
    position: relative;
    background: linear-gradient(90deg, rgb(40, 40, 40) 0%, rgb(17, 17, 17) 100%);
`;

export default GlobalStyle