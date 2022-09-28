import { useState } from "react";
import { FaLinkedinIn, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";

import * as S from "../styles/home";
import CoursesSection from "../components/Sections/Courses";
import JobsSection from "../components/Sections/Jobs";
import ProjectsSection from "../components/Sections/Projects";
import PostsSection from "../components/Sections/Posts";

export default function Home() {
  const [activeTab, setActiveTab] = useState<
    "jobs" | "courses" | "projects" | "posts"
  >("jobs");

  return (
    <>
      <S.Wrapper>
        <div className="featured">
          <h1 className="name">Matheus Trindade</h1>
          <p className="description">
            Desenvolvo front-end há três anos, utilizando principalmente React e
            React Native. Além de código, tenho interesse em estudar conceitos
            de UI/UX e desenvolver interfaces utilizando o Figma.
          </p>
        </div>

        <div className="social">
          <a
            href="https://www.linkedin.com/in/trindadematheus/"
            target="_blank"
            className="icon"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="https://twitter.com/trnddev"
            target="_blank"
            className="icon"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:trindadematheus27@gmail.com"
            target="_blank"
            className="icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/trindadematheus"
            target="_blank"
            className="icon"
          >
            <FaGithub />
          </a>
        </div>

        <ul className="tabbar">
          <S.TabItem
            active={activeTab === "jobs"}
            onClick={() => setActiveTab("jobs")}
          >
            Experiências Profissionais
          </S.TabItem>
          {/* <S.TabItem
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')} >
            Cursos
          </S.TabItem> */}
          <S.TabItem
            active={activeTab === "posts"}
            onClick={() => setActiveTab("posts")}
          >
            Posts
          </S.TabItem>
          <S.TabItem
            active={activeTab === "projects"}
            onClick={() => setActiveTab("projects")}
          >
            Projetos
          </S.TabItem>
        </ul>

        {activeTab === "jobs" && <JobsSection />}
        {activeTab === "courses" && <CoursesSection />}
        {activeTab === "projects" && <ProjectsSection />}
        {activeTab === "posts" && <PostsSection />}
      </S.Wrapper>
    </>
  );
}
