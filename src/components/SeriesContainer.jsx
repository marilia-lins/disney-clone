import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'
import ContainersHome from './ContainersHome'
import ContainersContent from './ContainersContent'
import PosterWrap from './PosterWrap'


export const SeriesContainer = () => {

    const [series, setSeries] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marilia-lins/disney-api/media?q=series')
        .then(res => res.json())
        .then(data => {
        setSeries(data)
        })
    }, [])

  return (
        <ContainersHome>
            <h5>Series Recomendadas</h5>
            <ContainersContent>
                    {series.map((serie) => (
                        <PosterWrap key={serie.id}>
                                <Cards {...serie} key={serie.id}/> 
                        </PosterWrap>
                    ))}
            </ContainersContent>
        </ContainersHome>
  )
}
