import styled, { css } from "styled-components";

export const StyledResult = styled.p`
    background-color:${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;
    margin: 10px;
`