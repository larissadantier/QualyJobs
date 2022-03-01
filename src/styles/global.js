import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    font-size: 16px;
    color: ${({ theme }) => theme.colors.primary.main};
  }

  button {
    cursor: pointer;
  }
`;
