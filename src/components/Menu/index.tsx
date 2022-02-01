import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import * as S from './styles'

export default function Menu() {
  const { pathname } = useRouter();

  return (
    <>
      <S.Wrapper>
        <nav>
          <ul>
            <S.MenuItem active={pathname === '/'} >
              <Link href="/" >
                sobre
              </Link>
            </S.MenuItem>
            <S.MenuItem active={pathname.includes('projects')} >
              <Link href="/projects" >
                projetos
              </Link>
            </S.MenuItem>
          </ul>
        </nav>
      </S.Wrapper>
    </>
  )
}