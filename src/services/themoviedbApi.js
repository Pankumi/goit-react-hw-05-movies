// $ npm install axios

import axios from 'axios';


const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'a95ff59f8d48ac961c2785119723c43c';

// https://api.themoviedb.org/3/trending/movie/day?api_key=a95ff59f8d48ac961c2785119723c43c
export const getPopularFilmList = async page => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
      page: page || 1,
    },
  });
  return response.data;
};

// https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&query=<<query>>&page=1&include_adult=false
export const getSearchFilmList = async (keyWord) => {
  console.log('APP >>', keyWord);
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: keyWord,
    },
  });
  return response.data;
};
