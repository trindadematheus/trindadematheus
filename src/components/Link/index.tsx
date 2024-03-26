import * as S from './styles'

type LinkProps = {
  title: string
  description: string
  href: string
}

function Link({ description, href, title }: LinkProps) {
  return (
    <>
      <S.Wrapper>
        <a href={href} target='_blank' >{title}</a>
        <p>{description}</p>
      </S.Wrapper>
    </>
  );
}

export default Link;
