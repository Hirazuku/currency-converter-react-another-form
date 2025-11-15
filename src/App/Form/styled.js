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

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    margin: 5px;
}
`

export const FormTitle = styled.p`
    margin: 10px;
`

export const FormField = styled.input`
    color: ${({ theme }) => theme.colors.black};
    padding: 5px;
    border: 2px solid ${({ theme }) => theme.colors.antiqueBronze};
    border-radius: 5px;
    width: 70%;
    max-width: 70%;
    margin: 10px;
`

export const FormSelect = styled.select`
    color: ${({ theme }) => theme.colors.black};
    padding: 0px;
    border: 2px solid ${({ theme }) => theme.colors.antiqueBronze};
    border-radius: 5px;
    width: 80px;
    max-width: 80%;
    margin: 5px;
`

export const FormButton = styled.button`
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.teal};
    border: none;
    padding: 10px;
    width: auto;
    margin: 10px;
    border-radius: 5px;

    &:hover{
        color: ${({ theme }) => theme.colors.white};
        background-color: ${({ theme }) => theme.colors.brightTeal};
        transition: 0.3s;
        transform: scale(1.1);
    }
`