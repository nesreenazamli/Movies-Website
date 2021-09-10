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

export const movieReducers = (
  initialState = {
    movies: [],
    movieInfo: {
      movieInfo: {},
      isLoading: false,
    },
    firstMovie: {
      results:[]
      },
  },
  action
) => {
  switch (action.type) {
    case GET_MOVIE_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_MOVIE_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        movies: [...initialState.movies, action.payload],
      };
    case GET_MOVIE_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

      
    case GET_FIRST_MOVIE_START:
      return {
        ...initialState,
        isLoading: true,
      };
    case GET_FIRST_MOVIE_SUCCESS:
      return {
        ...initialState,
        isLoading: false,
        firstMovie: action.payload,
      };
    case GET_FIRST_MOVIE_FAILED:
      return {
        ...initialState,
        isLoading: false,
        error: action.payload,
      };

    case GET_MOVIE_INFO_START:
      return {
        ...initialState,
        movieInfo: { isLoading: true },
      };
    case GET_MOVIE_INFO_SUCCESS:
      return {
        ...initialState,
        movieInfo: {
          movieInfo: action.payload,
          isLoading: false,
        },
      };
    case GET_MOVIE_INFO_FAILED:
      return {
        ...initialState,
        movieInfo: { isLoading: false, error: action.payload },
      };

    default:
      return initialState;
  }
};
