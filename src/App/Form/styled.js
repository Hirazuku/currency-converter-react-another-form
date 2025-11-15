import styled, { css } from "styled-components";

export const StyledForm = styled.div`
    display: grid;
    grid-template-columns: 2fr repeat(2, 150px);
    align-content: right;
    grid-gap: 20px;
    padding: 10px;
    padding: 0;
    margin: 10px;
    font-weight: bold;
    font-size: 25px;

    @media(max-width: 767px) {
    width: 100%;
    margin: 5px;
}
`

export const FormTitle = styled.p`
    margin: 10px;
`

export const FormField = styled.input`
    color: rgb(0, 0, 0);
    padding: 5px;
    border: 2px solid rgba(109, 77, 8, 0.555);
    border-radius: 5px;
    width: 70%;
    max-width: 70%;
    margin: 10px;
`

export const FormSelect = styled.select`
    color: rgb(0, 0, 0);
    padding: 0px;
    border: 2px solid rgba(109, 77, 8, 0.555);
    border-radius: 5px;
    width: 80px;
    max-width: 80%;
    margin: 5px;
`

export const FormButton = styled.button`
    color: rgb(255, 255, 255);
    background-color:hsl(180, 100%, 25%);
    border: none;
    padding: 10px;
    width: auto;
    margin: 10px;
    border-radius: 5px;

    &:hover{
        color: rgb(241, 232, 211);
        background-color: hsl(180, 100%, 40%);
        transition: 0.3s;
        transform: scale(1.1);
    }
`