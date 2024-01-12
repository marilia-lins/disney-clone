import React, { useEffect, useState } from 'react'
import { Cards } from './Cards'
import ContainersHome from './ContainersHome'
import ContainersContent from './ContainersContent'
import PosterWrap from './PosterWrap'


export const MoviesContainer = () => {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/marilia-lins/disney-api/media?q=movies')
        .then(res => res.json())
        .then(data => {
        setMovies(data)
        })
    }, [])

  return (
    <ContainersHome>
            <h5>Filmes Aclamados</h5>
            <ContainersContent>
                    {movies.map((movie) => (
                        <PosterWrap key={movie.id}>
                            <Cards {...movie} key={movie.id}/>
                        </PosterWrap>
                    ))}
            </ContainersContent>
    </ContainersHome>
  )
}