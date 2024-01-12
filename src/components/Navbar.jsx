import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled.nav`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 51px;
    background-color: #090b13;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 34px;
    letter-spacing: 12px;
    z-index: 3;
`

const Logo = styled(Link)`
   padding : 0;
   width: 50px;
   margin-top: 4px;
   max-height: 70px;
   font-size: 0;
   display: inline-block;

   img{
    display: block;
    width: 100%;
   }
`
const Menu = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    height: 100%;
    justify-content: flex-end;
    margin: 0px;
    padding: 0px;
    position: relative;
    margin-right: auto;
    margin-left: 25px;

    a{
        display: flex;
        align-items: center;
        padding: 0 12px;

        img{
            height: 22px;
            min-width: 15px;
            width: 10px;
            z-index: auto;
            margin-right: 2.5px;

            .list{
                transition: transform .7s ease-in-out;

                &:hover{
                    transform: rotate(360deg);
                }
            }
        }

        span{
            color: rgb(249, 249, 249);
            font-size: 10px;
            letter-spacing: 1.42px;
            line-height: 1.08;
            padding: 2px 0px;
            white-space: nowrap;
            position: relative;
            font-weight: bold;

            @media only screen and (min-width: 480px) and (max-width: 768px){
                font-size: 8px;
                letter-spacing: 1px;
                margin-right: -1.6em;
            }

            @media (max-width: 480px){
                display: none;
            }

            &:before{
                display: block;
                background-color: rgb(249, 249, 249);
                border-radius: 0px 0px 4px 4px;
                bottom: -6px;
                content: '';
                height: 2px;
                left: 0px;
                opacity: 0;
                position: absolute;
                right: 0px;
                transform-origin: left center;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
                visibility: hidden;
                width: auto;
            }
        }

        &:hover{
            span:before{
                    transform: scaleX(1);
                    visibility: visible;
                    opacity: 1 !important;
                }
            }
    }
`

export const Navbar = () => {
  return (
    <Nav>
        <Logo to='/home'>
            <img src="/images/logo.svg" alt="Disney Logo" />
        </Logo>
        <Menu>
            <a href='/home'>
                <img src="/images/home-icon.svg" alt="Início" />
                <span>INÍCIO</span>
            </a>
            <a>
                <img className='list' src="/images/watchlist-icon.svg" alt="Início" />
                <span>MINHA LISTA</span>
            </a>
            <a>
                <img src="/images/series-icon.svg" alt="Início" />
                <span>SERIES</span>
            </a>
            <a>
                <img src="/images/movie-icon.svg" alt="Início" />
                <span>FILMES</span>
            </a>
            <a>
                <img src="/images/original-icon.svg" alt="Início" />
                <span>CLASSICOS</span>
            </a>
        </Menu>
    </Nav>
  )
}
