import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

import * as S from "./styles";
import Link from "../../components/Link";
import podcasts from "../../data/podcasts";
import videos from "../../data/videos";

function Home() {
  return (
    <>
      <S.Wrapper>
        <S.Container>
          <S.About>
            <h1 className="name">Hi, I'm Matheus Trindade 👋</h1>

            <p className="resume">Frontend developer with amost 5 years of experience. Working with React.js, React Native and Next.js. I'm currently working on Compass UOL.</p>

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

          <S.Section>
            <h2 className="title">Feedback de uma cliente</h2>
            <audio controls>
              <source src="/feedback.ogg" type="audio/ogg" />
              Your browser does not support the audio element.
            </audio>
          </S.Section>

          <S.Section>
            <h2 className="title">Videos</h2>
            {videos.map((pod) => <Link title={pod.title} description={pod.description} href={pod.link} />)}
          </S.Section>

          <S.Section>
            <h2 className="title">Podcast</h2>
            {podcasts.map((pod) => <Link title={pod.title} description={pod.description} href={pod.link} />)}
          </S.Section>
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default Home;
