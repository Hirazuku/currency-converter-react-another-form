import styled, { css } from "styled-components";
import {theme} from "../theme";

export const StyledApp = styled.div`
    background-color: ${({ theme }) => theme.colors.white};
    border-color: ${({ theme }) => theme.colors.black};
    border-radius: 5px
`