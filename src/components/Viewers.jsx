import React from 'react'
import styled from 'styled-components'


const ViewWrap = styled.div`
    margin-top: 8px;
    padding: 30px 17px 26px;
    display: grid;
    grid-gap: 25px;
    gap: 25px;
    grid-template-columns: repeat(5, minmax(0, 1fr));
`

const Box = styled.div`
    padding-top: 56.25%;
    border-radius: 6px;
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, 
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    background-image: linear-gradient(rgb(58, 60, 74), rgb(36, 38, 50));

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        width: 100%;
        z-index: 1;
        top: 0;
    }

    video{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        opacity: 0;
        z-index: 0;
    }

    &:hover{
        transform: scale(1.05);
        border: 1px solid rgba(249, 249, 249, 0.8);
        
        video{
            opacity: 1;
        }
    }

`

export const Viewers = () => {
  return (
    <ViewWrap>
        <Box>
            <img src="/images/viewers-disney.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} src="/videos/1564674844-disney.mp4" type='video/mp4'/>
        </Box>
        <Box>
            <img src="/images/viewers-pixar.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} src="/videos/1564676714-pixar.mp4" type='video/mp4'/>
        </Box>
        <Box>
            <img src="/images/viewers-marvel.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} src="/videos/1564676115-marvel.mp4" type='video/mp4'/>
        </Box>
        <Box>
            <img src="/images/viewers-starwars.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} src="/videos/1608229455-star-wars.mp4" type='video/mp4'/>
        </Box>
        <Box>
            <img src="/images/viewers-national.png" alt="" />
            <video autoPlay={true} loop={true} playsInline={true} src="/videos/1564676296-national-geographic.mp4" type='video/mp4'/>
        </Box>
    </ViewWrap>
  )
}
