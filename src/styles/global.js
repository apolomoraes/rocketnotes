import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};

    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
  }

  body::-webkit-scrollbar {
    width: 0.5rem;
  }

    body::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }

  body::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 0.5rem;
  }  

  

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1rem;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  button, a{
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, 
  a:hover {
    filter: brightness(0.9);
  }
`;