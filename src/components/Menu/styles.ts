import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  background-color: rgb(10, 12, 15, 0.6);
  backdrop-filter: blur(10px);
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  position: sticky;
  top: 0;

  nav {
    ul {
      display: flex;
      align-items: center;
      gap: 20px;
    }
  }
`

interface MenuItemProps {
  active: boolean;
}

export const MenuItem = styled.li<MenuItemProps>`
  list-style: none;

  a {
    color: #ccc;
    text-decoration: none;
    transition: all 0.6s;

    :hover {
      color: white;
    }
  }

  ${props => props.active && css`
    a {
      color: #24BE87;

      :hover {
        color: #24BE87;
      }
    }
  `}
`