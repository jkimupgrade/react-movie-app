import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, coverImg, titleLong, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={titleLong} />
      <h2><Link to={`/movie/${id}`}>{titleLong}</Link></h2>
      <p>{summary}</p>
      {genres ? (
        <ul>
          {genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  titleLong: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string),
};

export default Movie;