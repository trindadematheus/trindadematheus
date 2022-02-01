import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  margin-top: 40px;
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
    }
  }

  hr {
    border-color: #12161C;
    border-style: solid;
    border-width: 2px;
    margin: 20px 0px;
  }
`