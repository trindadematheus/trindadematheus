import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 40px 20px;
`;

export const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

export const About = styled.div`
  .name {
    font-size: 32px;
    line-height: 100%;
    color: #fafafa;
  }

  a {
    color: cyan; 
    margin-bottom: 24px;
    display: block;
  }

  .resume {
    color: #888;
    margin-top: 10px;
  }

  .separator {
    background-color: #141414;
    height: 1px;
    width: 100%;
    margin: 10px 0px;
  }
`;

export const Body = styled.div`
  p {
    color: #ccc;
    margin-bottom: 12px;
  }
`;
