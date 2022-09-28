import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0px 20px;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const About = styled.div`
  .name {
    font-size: 32px;
    line-height: 100%;
    color: #fafafa;
  }

  .description {
    color: #eee;
    margin-bottom: 20px;

    b {
      color: #fafafa;
    }
  }

  .resume {
    color: #888;
  }

  .separator {
    background-color: #141414;
    height: 1px;
    width: 100%;
    margin: 10px 0px;
  }
`;

export const Social = styled.div`
  .email {
    color: #eee;
    text-decoration: none;

    display: flex;
    align-items: center;
    gap: 6px;

    cursor: pointer;
    transition: all 400ms;

    :hover {
      color: #24be87;
    }
  }

  .items {
    margin-top: 10px;
    list-style: none;

    display: flex;
    align-items: center;
    gap: 14px;

    .icon {
      background-color: #222;
      display: block;
      height: 24px;
      width: 24px;
      padding: 4px;
      color: white;

      display: flex;
      justify-content: center;
      align-items: center;

      cursor: pointer;
      transition: all 400ms;

      :hover {
        color: #24be87;
      }
    }
  }
`;
