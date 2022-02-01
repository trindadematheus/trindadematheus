import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from 'react-icons/fa';
import 'react-vertical-timeline-component/style.min.css';

import works from '../data/works';
import * as S from '../styles/home'
import Menu from '../components/Menu';
import courses from '../data/courses';

export default function Home() {
  const [activeTab, setActiveTab] = useState<'jobs' | 'courses'>('jobs');

  return (
    <>
      <Menu />
      <S.Wrapper>
        <div className="featured">
          <h1 className="name">Matheus Trindade</h1>
          <p className="description">Desenvolvedor Front-End há quase 3 anos, utilizando principalmente React e React Native. Além do código, gosto de estudar sobre UI/UX e desenvolver interfaces no Figma.</p>
        </div>

        <div className="social">
          <a href='https://www.linkedin.com/in/trindadematheus/' target='_blank' className="icon">
            <FaLinkedinIn />
          </a>
          <a href='https://twitter.com/trnddev' target='_blank' className="icon">
            <FaTwitter />
          </a>
          <a href='mailto:trindadematheus27@gmail.com' target='_blank' className="icon">
            <FaEnvelope />
          </a>
          <a href='https://github.com/trindadematheus' target='_blank' className="icon">
            <FaGithub />
          </a>
        </div>

        {/* <hr /> */}

        <ul className="tabbar">
          <S.TabItem active={activeTab === 'jobs'} onClick={() => setActiveTab('jobs')} >Experiências Profissionais</S.TabItem>
          <S.TabItem active={activeTab === 'courses'} onClick={() => setActiveTab('courses')}>Cursos</S.TabItem>
        </ul>

        {activeTab === 'jobs' && (
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
        )}

        {activeTab === 'courses' && (
          <VerticalTimeline
            layout="1-column"
            lineColor="#12161C"
          >
            {courses.map((course, key) => (
              <VerticalTimelineElement
                key={key}
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#12161C', color: '#fff', boxShadow: 'none' }}
                contentArrowStyle={{ borderRight: '7px solid #12161C' }}
                date={`${course.company} - ${course.date}`}
                iconStyle={{ boxShadow: 'none', background: '#24BE87', width: '10px', height: '10px', top: '15px', left: '15px' }}
              >
                <h3 className="vertical-timeline-element-title">{course.title}</h3>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        )}
      </S.Wrapper>
    </>
  )
}
