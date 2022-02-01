import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import works from '../data/works';
import * as S from '../styles/home'

export default function Home() {
  return (
    <>
      <S.Wrapper>
        <div className="featured">
          <h1 className="name">Matheus Trindade</h1>
          <p className="description">Desenvolvedor Front-End</p>
        </div>

        {/* <hr /> */}

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
