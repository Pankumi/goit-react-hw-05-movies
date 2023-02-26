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


export const getSearchFilmList = async (keyWord) => {
  // console.log('APP >>', keyWord);
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query: keyWord,
    },
  });
  return response.data;
};

// https://api.themoviedb.org/3/movie/123456789?api_key=a95ff59f8d48ac961c2785119723c43c
export const getFilmID = async (movieId) => {
  console.log('APP >>', movieId);
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};