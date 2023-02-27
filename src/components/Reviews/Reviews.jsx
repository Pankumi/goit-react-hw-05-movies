// import css from './SearchBar.module.css';

export const Reviews = ({serviceResponse}) => {

  return (
    <ul>
      {serviceResponse.map(el=>{
        return (
          <li>
            <h3>Author: {el.author}</h3>
            <p>{el.content}</p>
          </li>
        )
      })}
    </ul>
  );
};