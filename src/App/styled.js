import styled, { css } from "styled-components";
import {theme} from "../theme";

export const StyledApp = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.black};
    border-radius: 5px;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    width: 100%;
    margin: 5px;}
`