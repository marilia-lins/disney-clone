import styled from 'styled-components'

const PosterWrap = styled.div`
    padding-top: 56.25%;
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border: 1px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, 
    rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;

    &:hover{
        box-shadow: rgba(0, 0, 0, 0.69) 0px 26px 30px -10px, 
        rgba(0, 0, 0, 0.73) 0px 16px 10px -10px;
        transform: scale(1.05);
        border: 2px solid #f9f9f9;
    }
    
`

export default PosterWrap