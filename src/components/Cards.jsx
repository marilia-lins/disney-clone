import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CardLink = styled(Link)`
    padding-top: 56.25%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 2px solid rgba(249, 249, 249, 0.1);

    img{
        inset: 0px;
        display: block;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        position: absolute;
        transition: opacity 500ms ease-in-out 0s;
        z-index: 1;
        top: 0;
    }

`


export const Cards = ({poster, id}) => {
  
  return (
    <CardLink to={`/${id}`}>
        <img src={poster} alt=""/>
    </CardLink>
  )
}
