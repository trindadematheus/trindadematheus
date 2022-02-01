import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

import works from '../data/works';
import * as S from '../styles/home'

export default function Home() {
  return (
    <>
      <S.Wrapper>
        <div className="featured">
          <h1 className="name">Matheus Trindade</h1>
          <p className="description">Desenvolvedor Front-End há quase 3 anos, utilizando principalmente React e React Native. Além do código, gosto de estudar sobre UI/UX e desenvolver interfaces no Figma.</p>
        </div>

        <div className="social">
          <a href='https://www.linkedin.com/in/trindadematheus/' target='_blank' className="icon">
            <FaLinkedinIn color='#eee' />
          </a>
          <a href='https://twitter.com/trnddev' target='_blank' className="icon">
            <FaTwitter color='#eee' />
          </a>
          <a href='mailto:trindadematheus27@gmail.com' target='_blank' className="icon">
            <FaEnvelope color='#eee' />
          </a>
          <a href='https://github.com/trindadematheus' target='_blank' className="icon">
            <FaGithub color='#eee' />
          </a>
        </div>

        <hr />

        <VerticalTimeline
          layout="1-column"
          lineColor="#12161C"
        >
          {works.map((work, key) => (
            <VerticalTimelineElement
              key={key}
              className="vertical-timeline-element--work"
              contentStyle={{ background: '#12161C', color: '#fff', boxShadow: 'none' }}
              contentArrowStyle={{ borderRight: '7px solid #12161C' }}
              date={work.time}
              iconStyle={{ boxShadow: 'none', background: '#24BE87', width: '10px', height: '10px', top: '15px', left: '15px' }}
            >
              <h3 className="vertical-timeline-element-title">{work.office}</h3>
              <p>
                {work.description}
              </p>
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </S.Wrapper>
    </>
  )
}
