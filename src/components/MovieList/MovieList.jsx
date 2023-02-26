// import React, { Component } from 'react';

export const MovieList = ({ movies }) => {
  // console.log('list', trendingList.results );
  let list = movies.results;
  return (
    <ul>
      {list.map(el => {
        const { id, title } = el;
        return (
          <li key={id}>
            <p>{title}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MovieList;
