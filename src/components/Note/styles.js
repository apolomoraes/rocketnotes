import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  border: none;
  border-radius: 0.625rem;

  padding: 1.375rem;
  margin-bottom: 1rem;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 1.5rem;
  }
`
