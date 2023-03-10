import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

import * as S from "./styles";

function Home() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.About>
            <h1 className="name">Matheus Trindade</h1>
            <p className="description">
              Frontend developer at <b>Compass UOL</b>
            </p>

            <p className="resume">
              React.js | React Native | Next.js
            </p>

            <div className="separator" />
          </S.About>

          <S.Social>
            <ul className="items">
              <li>
                <a
                  className="icon"
                  href="https://www.linkedin.com/in/trindadematheus/"
                  target="_blank"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li>
                <a
                  className="icon"
                  href="https://twitter.com/trindadematheux"
                  target="_blank"
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className="icon"
                  href="https://github.com/trindadematheus"
                  target="_blank"
                >
                  <FaGithub />
                </a>
              </li>
              <li>
                <a className="email" href="mailto:trindadematheus27@gmail.com">
                  <FaEnvelope size={16} color="#eee" />{" "}
                  trindadematheus27@gmail.com
                </a>
              </li>
            </ul>
          </S.Social>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Home;
