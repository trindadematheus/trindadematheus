import projects from "../../../data/projects";
import ProjectItem from "../../ProjectItem";
import * as S from './styles'

export default function ProjectsSection() {
  return (
    <>
      <S.Container>
        {projects.map((project, key) => (
          <ProjectItem key={key} project={project} />
        ))}
      </S.Container>
    </>
  )
}