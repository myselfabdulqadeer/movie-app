import {useEffect, useState} from "react"
import PropTypes from 'prop-types';
// import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./card.css"
import { Link } from "react-router-dom";

const Cards = ({ movie }) => {


    // console.log(movie)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1500)
    }, []) 

    return <>
    {
        isLoading
        ?
        <div className="cards">
            {/* <SkeletonTheme count={5} color="#202020" highlightColor="#444">
                <Skeleton height={300} duration={2} />
            </SkeletonTheme> */}
            
            <img className="loading_img" src="https://media.giphy.com/media/3AMRa6DRUhMli/giphy.gif"/>
        </div>
        :
        <Link to={`/movie/${movie.id}`} style={{textDecoration:"none", color:"white"}}>
            <div className="cards">
                <img className="cards__img" src={`https://image.tmdb.org/t/p/original${movie?movie.poster_path:""}`} />
                <div className="cards__overlay">
                    <div className="card__title">{movie?movie.original_title:""}</div>
                    <div className="card__runtime">
                        {movie?movie.release_date:""}
                        <span className="card__rating">{movie?movie.vote_average:""}<i className="fas fa-star" /></span>
                    </div>
                    <div className="card__description">{movie ? movie.overview.slice(0,118)+"..." : ""}</div>
                </div>
            </div>
        </Link>
    }
    </>
}


Cards.propTypes = {
    movie: PropTypes.shape({
        id: PropTypes.number,
        original_title: PropTypes.string,
        release_date: PropTypes.string,
        vote_average: PropTypes.number,
        overview: PropTypes.string,
        poster_path: PropTypes.string
    })
}

export default Cards