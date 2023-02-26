import { Link } from 'react-router-dom';

export const MovieList = ({ movies }) => {
  let list = movies.results;
  console.log('list', list );

  return (
    <ul>
      {list.map(el => {
        const { id, title } = el;
        return (
          <li key={id}>
            <Link to={`/movies/${id}`}><p>{title}</p></Link>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
