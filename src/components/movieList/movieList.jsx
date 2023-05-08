/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useState} from "react"
import "./movieList.css"
import { useParams } from "react-router-dom"
import Cards from "../card/card"

export const MovieList = () => {
    
    const [movieList, setMovieList] = useState([])

    const {Type} = useParams()
    

    useEffect(() => {
        getData()
    }, [])

    // useEffect(() => {
    //     getData()
    // }, [])

    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${Type ? Type : "popular"}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res => res.json())
        .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie__list">
            <h2 className="list__title">{(Type ? Type : "POPULAR").toUpperCase()}</h2>
            <div className="list__cards">
                {
                    movieList.map((movie, index) => (
                        <Cards key = {index} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}