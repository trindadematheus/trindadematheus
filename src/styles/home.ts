import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 10px;
  padding: 0px 20px;

  .name {
    color: white;
    margin-bottom: 10px;
  }

  .description{
    color: #A0A2A4;
    margin-bottom: 20px;
  }

  .social {
    display: flex;
    align-items: center;
    gap: 20px;

    .icon {
      background-color: #12161C;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
      color: #eee;
      transition: all 0.6s;

      :hover {
        color: #24BE87;
      }
    }
  }

  hr {
    border-color: #12161C;
    border-style: solid;
    border-width: 2px;
    margin: 20px 0px;
  }

  .tabbar {
    margin-top: 20px;
    border-bottom: 4px solid #12161C;

    display: flex;
    align-items: center;
    gap: 40px;
  }
`

interface TabItemProps {
  active: boolean;
}

export const TabItem = styled.li<TabItemProps>`
  color: #bbb;
  list-style: none;
  padding: 14px 0px;
  cursor: pointer;
  transition: all 0.4s;

  :hover {
    color: white;
  }

  ${props => props.active && css`
    color: #24BE87;

    :hover {
      color: #24BE87;
    }
  `}
`