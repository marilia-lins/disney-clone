import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'
import ContainersHome from './ContainersHome'
import ContainersContent from './ContainersContent'
import PosterWrap from './PosterWrap'


export const ClassicsContainer = () => {

    const [classics, setClassics] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marilia-lins/disney-api/media?q=classics')
        .then(res => res.json())
        .then(data => {
        setClassics(data)
        })
    }, [])

  return (
    <ContainersHome>
            <h5>Relembre os Clássicos</h5>
            <ContainersContent>
                    {classics.map((classic) => (
                        <PosterWrap key={classic.id}>
                            <Cards {...classic} key={classic.id}/>
                        </PosterWrap>
                    ))}
            </ContainersContent>
    </ContainersHome>
  )
}