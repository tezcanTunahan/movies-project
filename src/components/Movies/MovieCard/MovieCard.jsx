import "./movieCard.css";
import { Link } from "react-router-dom";

function MovieCard(props) {
  return (
    <div className="movieCard__container">
      <Link className="link__style" to={`/detail/${props.idx}`}>
        <img
          alt="img for movie"
          className="card__img"
          src={`https://image.tmdb.org/t/p/w342/${props.movie.backdrop_path}`}
          // I can use post_path to
        />
        <div>{<p className="movie__title">{props.movie.title}</p>}</div>
        <div className="release__date">
          {<p>Release date: {props.movie.release_date}</p>}
        </div>
        <div className="release__date">
          {<p>Avarage: {props.movie.vote_average}/10</p>}
        </div>
      </Link>
    </div>
  );
}

export default MovieCard;
