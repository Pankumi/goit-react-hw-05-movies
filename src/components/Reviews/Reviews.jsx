export const Reviews = ({ serviceResponse }) => {
  return (
    <ul>
      {serviceResponse.map(el => {
        return (
          <li key={el.id}>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </li>
        );
      })}
    </ul>
  );
};
