import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 6.5625rem auto;
  grid-template-areas: 'header' 'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  >main::-webkit-scrollbar {
    width: 0.5rem;
  }

  >main::-webkit-scrollbar-track {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
  
  >main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    border-radius: 0.5rem;
  }  
 

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Form = styled.form`
  max-width: 34.375rem;
  margin: 2.375rem auto;

  > header {
    display: flex;
    align-items: center; 
    justify-content: space-between;

    margin-bottom: 2.25rem;

    a {
      font-size: 1.25rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;