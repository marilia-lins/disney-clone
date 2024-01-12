import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const FootWrap = styled.div`
  background-color: #0e0b14;
  padding: 0 34px;
  margin-top: 5.2em;
  bottom: 0;
  position: relative;
  margin-bottom: 0; 
  display: block;
  box-sizing: border-box;
  line-height: 1.15;
`

const Top = styled.div`
  padding-top: 19px;
  width: 80px;
  margin: 0px auto;

  img{
    width: 50%;
  }
`

const Middle = styled.div`
  display: flex;
  margin: 0px auto;
  -webkit-box-pack: center;
  justify-content: center;
  flex-flow: wrap;
  max-width: 500px;
  font-size: 11px;
  line-height: 2;
  text-align: center;
`

const Bottom = styled.div`
  font-size: 9px;
  letter-spacing: -.1px;
  line-height: 1.5;
  color: #cacaca;
  text-align: center;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
`

export const Footer = () => {
  return (
    <FootWrap>
      <Top>
        <img src="/images/logo.svg" alt="" />
      </Top>
      <Middle>
        <p>Projeto construído com React e Styled-Components. <br /> Dados dos filmes e séries pelo <Link style={{textDecoration: 'underline'}} to='https://my-json-server.typicode.com/marilia-lins/disney-api'>my-json-server</Link></p>
      </Middle>
      <Bottom>
      &copy; Disney Clone. Feito por <Link to='https://github.com/marilia-lins' style={{textDecoration: 'underline'}}>Marília Lins</Link>. Inspirado pelo site oficial <Link style={{textDecoration: 'underline'}} to='https://www.disneyplus.com/'>Disney+</Link>
      </Bottom>
    </FootWrap>
  )
}
