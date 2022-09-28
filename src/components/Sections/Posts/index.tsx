import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import posts from "../../../data/posts";

export default function PostsSection() {
  return (
    <>
      <VerticalTimeline layout="1-column" lineColor="#12161C">
        {/* {posts.map((post, key) => (
          <VerticalTimelineElement
            key={key}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: "#12161C",
              color: "#fff",
              boxShadow: "none",
            }}
            contentArrowStyle={{ borderRight: "7px solid #12161C" }}
            date={post.time}
            iconStyle={{
              boxShadow: "none",
              background: "#24BE87",
              width: "10px",
              height: "10px",
              top: "15px",
              left: "15px",
            }}
          >
            <h3 className="vertical-timeline-element-title">{post.office}</h3>
            <p>{post.description}</p>
          </VerticalTimelineElement>
        ))} */}
      </VerticalTimeline>
    </>
  );
}
