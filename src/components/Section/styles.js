import styled from "styled-components";

export const Container = styled.section`
  margin: 1.75rem 0;

  > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    padding-bottom: 1rem;
    margin-bottom: 1.5rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.25rem;
    font-weight: 400;
  }
`