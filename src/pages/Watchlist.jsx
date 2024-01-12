import React from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import styled from 'styled-components'

const PageWrap = styled.div`
  min-height: calc(100vh - 240px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; 
  font-weight: bold;
  margin: 1em 2em auto 2.5em;

  .bottom{
    font-weight: 100;
    font-size: smaller;
  }

  &:after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export const Watchlist = () => {

  return (
    <div>
        <Navbar/>
        <PageWrap>
          <p>Minha Lista está vazia</p>
          <p className='bottom'>O conteúdo que você colocar na Minha Lista aparecerá aqui.</p>
        </PageWrap>
        <Footer/>
    </div>
  )
}
