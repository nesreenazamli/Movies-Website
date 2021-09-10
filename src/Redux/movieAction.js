import {
  GET_MOVIE_FAILED,
  GET_MOVIE_SUCCESS,
  GET_MOVIE_START,
  GET_MOVIE_INFO_START,
  GET_MOVIE_INFO_FAILED,
  GET_MOVIE_INFO_SUCCESS,
  GET_FIRST_MOVIE_START,
  GET_FIRST_MOVIE_SUCCESS,
  GET_FIRST_MOVIE_FAILED,
} from "./movieTypesConstants";
import axios from "axios";

export const getMovie =
    (pageNumber = 1) =>
    async (dispatch) => {
      dispatch({
        type: GET_MOVIE_START,
      });

      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187&page=${pageNumber}`
        );
        //
        dispatch({
          type: GET_MOVIE_SUCCESS,
          payload: response.data.results,
        });
      } catch (e) {
        dispatch({
          type: GET_MOVIE_FAILED,
          payload: e?.response?.message,
        });
      }
    };

export const getMovieInfo =
  (id) => async (dispatch) => {
    dispatch({
      type: GET_MOVIE_INFO_START,
    });

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=dcf2d1463b5703e25fc8d86eb0fce187&language=en-US`
      );
      dispatch({
        type: GET_MOVIE_INFO_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_MOVIE_INFO_FAILED,
        payload: e?.response?.message,
      });
    }
  };

  
  export const getFirstMovie =() =>
  async (dispatch) => {
    dispatch({
      type: GET_FIRST_MOVIE_START,
    });

    try {
      const response = await axios.get(
        'https://api.themoviedb.org/3/movie/popular?api_key=dcf2d1463b5703e25fc8d86eb0fce187'
      );
      dispatch({
        type: GET_FIRST_MOVIE_SUCCESS,
        payload: response.data,
      });
    } catch (e) {
      dispatch({
        type: GET_FIRST_MOVIE_FAILED,
        payload: e?.response?.message,
      });
    }
  };
