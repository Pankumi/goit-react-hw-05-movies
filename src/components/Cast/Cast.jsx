export const Cast = ({ serviceResponse }) => {

  return (
    <ul>
      {serviceResponse.map(el => {
        return (
          <li key={el.id}>
            {Boolean(el.profile_path) && (
              <img
                src={`https://image.tmdb.org/t/p/w500${el.profile_path}`}
                alt={el.name}
                width="150px"
              />
            )}
            <p>{el.name}</p>
            <p>{el.character}</p>
          </li>
        );
      })}
    </ul>
  );
};
