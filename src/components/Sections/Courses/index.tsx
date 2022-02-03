import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";

import courses from "../../../data/courses";

export default function CoursesSection() {
  return (
    <>
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
    </>
  )
}