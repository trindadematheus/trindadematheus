import React from 'react'

import * as S from './styles'

interface ProjectItemProps {
  project: {
    title: string;
    desc: string;
    link: string;
    tags: string[];
  }
}

export default function ProjectItem({ project }: ProjectItemProps) {
  return (
    <>
      <S.Container href={project.link} target="_blank" >
        <h3 className="title">{project.title}</h3>
        <p className="desc">{project.desc}</p>

        <div className="tags">
          {project.tags.map((tag, key) => <span key={key} className="tag">{tag}</span>)}
        </div>
      </S.Container>
    </>
  )
}