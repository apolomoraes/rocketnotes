import styled from 'styled-components'
import { Link } from 'react-router-dom'


export const Container = styled.header`
  grid-area: header;

  height: 6.5625rem;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;

  padding: 0 5rem;
`

export const Profile = styled(Link)`
  align-items: center;
  display: flex;

  > img {
    width: 3.5rem;
    height: 3.5rem;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
    line-height: 1.5rem;

    span {
      font-size: 0.875rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 1.125rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`

export const Logout = styled.button`
  border: none;
  background: none;
  cursor: default;
  
  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-size: 1.875rem;
  }
`