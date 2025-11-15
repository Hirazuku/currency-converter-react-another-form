import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
    text-align: center;
    width: 800;
    padding: 0px 15px;
    color: ${({ theme }) => theme.colors.twine};
    text-shadow: 2px 3px 3px ${({ theme }) => theme.colors.brightGrey};
    background-color: ${({ theme }) => theme.colors.grey};
    border-radius: 10px;
`