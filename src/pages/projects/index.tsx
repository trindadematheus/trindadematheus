import styled from 'styled-components'
import Menu from '../../components/Menu'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default function Projects() {
  return (
    <>
      <Menu />
      <Title>My projects</Title>
    </>
  )
}
