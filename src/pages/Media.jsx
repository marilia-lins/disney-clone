import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Navbar } from '../components/Navbar'
import plus from './watchlist-icon.svg'
import check from "./blue-v.svg"


const Container = styled.div`
    position: relative;
    min-height: calc(100vh - 250px);
    overflow-x: hidden;
    display: block;
    box-sizing: border-box;
    top: 72px;
    padding: 0 calc(3.5vw - 5px);
    position: absolute;
    inset: 0px;
`

const BgImg = styled.div`
    left: 0px;
    opacity: 0.8;
    position: fixed;
    right: 8px;
    top: 20px;
    z-index: -1;

    img{
        width: 100vw;
        height: 100vh;

        @media (max-width: 500px) {
            width: initial;
        }
    }
`

const TitleImg = styled.div`
    display: flex;
    align-items: flex-end;
    -webkit-box-pack: start;
    justify-content: flex-start;
    margin: 20px auto;
    height: 23vw;
    min-height: 170px;
    padding-bottom: 24px;
    width: 100%;

    @media (max-width: 500px) {
        margin-top: 200px;
    }

    img{
        max-width: 400px;
        min-width: 150px;
        width: 30vw;

        @media (max-width: 500px) {
            width: 70vw;
        }
    }
`

const Infos = styled.div`
    max-width: 874px;
`

const Buttons = styled.div`
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    margin: 7px 0px;
    min-height: 50px;
`
const Player = styled.button`
    cursor: pointer;
    -webkit-font-smoothing: antialiased;
    letter-spacing: 1.2px;
    line-height: 1.6;
    outline: none;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: bold;
    margin: 0.20rem 0.75rem;
    padding: 0 18px;
    align-items: center;
    display: flex;
    height: 43px;
    justify-content: center;
    overflow: hidden;
    background: #f9f9f9;
    border: none;
    color: #0e0b14;
    position: relative;
    transition: all .2s ease-in-out;
    width: auto;
    border-radius: 0.25rem;

    img{
        width: 28px;

        @media (max-width: 768px){
            width: 10px;
        }
    }

    &:hover{
        background: rgb(198, 198, 198);
    }

    @media (max-width: 768px){
        height: 37px;
        padding: 0px 12px;
        font-size: 10px;
        margin: 0px 10px 8px 0px;
    }
`

const Trailer = styled(Player)`
    border: 1px solid #f9f9f9;
    background: #00000099;
    color: #f9f9f9;

    &:hover{
        background: #f9f9f9;
        color: #0e0b14;
    }
`

const List = styled.button`
    cursor: pointer;
    height: 44px;
    width: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #00000099;
    border: 2px solid #f9f9f9;
    border-radius: 50%;
    margin-top: -1px;

    img{
        transition: transform .7s ease-in-out;
        color: #f9f9f9;
        height: 27px;
        width: 27px;

        &:hover{
            transform: rotate(360deg);
        }

        @media (max-width: 768px){
            width: 18px;
        }
    }

    @media (max-width: 768px){
        height: 33px;
        width: 33px;
        border: 1.5px solid #f9f9f9;
        margin-top: -5px;
    }

    &:active{
        background: rgb(126, 124, 124);
    }

`

const Description = styled.div`
    line-height: 1.4;
    font-size: 16px;
    padding: 0 15px;
    font-weight: 100;
    margin-bottom: 10em;

    @media (max-width: 500px) {
        line-height: 1.7;
        font-size: 19px;
    }

    @media (max-width: 768px){
        padding: 0 5px;
        font-size: 18px;
        line-height: 1.5;
    }
`



export const Media = () => {

    const [media, setMedia] = useState([])
    const params = useParams()

    useEffect(() => {
        fetch(`https://my-json-server.typicode.com/marilia-lins/disney-api/media?id=${params.id}`)
        .then(res => res.json())
        .then(data => {
            setMedia(...data)
        })
    }, [])

    const [icon, setIcon] = useState(plus)
    const toggleIcon = () => {
        icon === plus ? setIcon(check) : setIcon(plus)
    }



  return (
    <>
    <Navbar/>
    <Container>
        <BgImg>
            <img src={media.bg} alt="" />
        </BgImg>
        <TitleImg>
            <img src={media.titleImg} alt="" />
        </TitleImg>
        <Infos>
            <Buttons>
                <Player>
                    <img src="/images/play-icon-black.png" alt="" />
                    <span>ASSISTIR</span>
                </Player>
                <Trailer>
                    <span>TRAILER</span>
                </Trailer>
                <List onClick={toggleIcon}>
                    <img src={icon} alt="" />
                </List>
            </Buttons>
            <Description>
                <p>{media.synopsis}</p>
            </Description>
        </Infos>
    </Container>
    </>
  )
}
