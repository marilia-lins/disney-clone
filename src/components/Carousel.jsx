import React from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import styled from 'styled-components'

const Wrapper = styled(Slider)`
  margin-top: 20px;

  & > button{
    opacity: 0;
    height: 100%;
    width: 5vw;
    z-index: 1;

    &:hover{
      opacity: 1;
      transition: opacity 0.6s;
    }
  }

  ul li button{
    &:before{
      color: #f9f9f9;
    }
  }

  li.slick-active button:before{
    color: #f9f9f9;
  }

  .slick-list{
    overflow: initial;
  }

  .slick-prev{
    left: -75px;
  }

  .slick-next{
    right: -75px;
  }


`

const Wrap = styled.div`
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  a{
    border-radius: 4px;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px --10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    cursor: pointer;
    display: block;
    position: relative;
    padding: 2px;

    img{
      width: 100%;
      height: 100%;
    }

    &:hover{
      padding: 0;
      border: 1px solid #d6d6d6;
      transition-duration: 300ms;
    }
  }
`

export const Carousel = () => {

  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: 1
  }

  return (
      <Wrapper {...settings}>
        <Wrap>
          <a>
            <img src="/images/slider-one.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-scale.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-two.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-three.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-four.jpg" alt="" />
          </a>
        </Wrap>
        <Wrap>
          <a>
            <img src="/images/slider-five.jpg" alt="" />
          </a>
        </Wrap>
      </Wrapper>
  )
}
