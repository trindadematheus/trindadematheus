import styled from "styled-components";

export const Container = styled.div`
  background-color: #12161c;
  padding: 20px;
  border-radius: 6px;
  cursor: pointer;

  transition: all 400ms;

  :hover {
    transform: translateY(-4px);
  }

  .title {
    color: white;
    font-size: 16px;
  }

  .desc {
    color: #ccc;
    font-size: 14px;
    margin-top: 6px;
  }

  .tags {
    margin-top: 18px;

    .tag {
      background-color: #24be871f;
      color: #24BE87;
      border-radius: 8px;
      padding: 1px 6px;
    }
  }
`