import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
html {
    box-sizing: border-box;
}

*,
::after,
::before {
    box-sizing: inherit;
}

#root {
    display: flex;
    align-items: center;
    justify-content: center;
    background-position: center;
    background-color:${({ theme }) => theme.colors.white};
    border-radius: 15px;
}

.body {
    margin: auto;
    max-width: 900px;
    color: ${({ theme }) => theme.colors.black};
    background-image: url("https://i.postimg.cc/R049bhH9/pexels-expect-best-323705-blacknwhite.jpg");
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    flex-direction: column;
    font: 25px/2 'Oswald', sans-serif;
    padding: 10px;
}

.currency__name {
    margin: 10px;
}
`