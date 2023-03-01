import { Link } from 'react-router-dom';

export const MovieList = ({ movies, location }) => {
  let list = movies.results;

  return (
    <ul>
      {list.map(el => {
        const { id, title } = el;
        return (
          <li key={id}>
            <Link state={{from: location}} to={`/movies/${id}`}>
              <p>{title}</p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
