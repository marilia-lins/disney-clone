import React from 'react'
import { Navbar } from '../components/Navbar'
import styled from 'styled-components'
import { Carousel } from '../components/Carousel'
import { Viewers } from '../components/Viewers'
import { SeriesContainer } from '../components/SeriesContainer'
import { MoviesContainer } from '../components/MoviesContainer'
import { ClassicsContainer } from '../components/ClassicsContainer'
import { Footer } from '../components/Footer'

const HomeWrapper = styled.main`
  position: relative;
  min-height: calc(100vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 48px;
  padding: 0 calc(0vw + 1px);

  &:after{
    background: url('/images/home-background.png') center center / cover no-repeat fixed;
    content: '';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`

export const Home = () => {
  return (
    <div>
        <Navbar/>
        <HomeWrapper>
          <Carousel/>
          <Viewers/>
          <SeriesContainer/>
          <MoviesContainer/>
          <ClassicsContainer/>
          <Footer/>
        </HomeWrapper>
    </div>
  )
}
