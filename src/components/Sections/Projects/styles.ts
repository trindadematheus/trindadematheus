import styled from "styled-components";

export const Container = styled.div`
  margin-top: 30px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`