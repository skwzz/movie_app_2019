import React from "react";
import PropTypes from "prop-types";

// state가 필요없을 경우 class component 를 사용할 필요는 없다.
function Movie({id, title, year, summary, poster}){
    return <div class="movie__movie">
        <h3 class="movie__title">{title}</h3>
        <h5 class="movie__year">{year}</h5>
        <p class="movie__summary">{summary}</p>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
};

export default Movie;