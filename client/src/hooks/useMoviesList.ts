import axios from "axios";
import { useEffect, useReducer } from "react";
import { Movie } from "../types";

interface State {
  data: Movie[] | null;
  error: string | null;
  loading: boolean;
}

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Movie[] }
  | { type: ActionType.FAILED; payload: string };

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, loading: true, error: null };

    case ActionType.SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case ActionType.FAILED:
      return { ...state, loading: false, error: action.payload, data: null };

    default:
      return state;
  }
};

const useMoviesList = (offset: number) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { data } = state;

  useEffect(() => {
    const fetchMoviesList = async () => {
      dispatch({ type: ActionType.LOADING });
      try {
        const response = await axios.get<Movie[]>(
          `http://localhost:8080/movies/list?offset=${offset}`
        );

        const moviesData = data ? [...data, ...response.data] : response.data;

        dispatch({
          type: ActionType.SUCCESS,
          payload: moviesData,
        });
      } catch (error) {
        if (axios.isAxiosError(error)) {
          dispatch({
            type: ActionType.FAILED,
            payload: "Network error occurred",
          });
        } else {
          dispatch({
            type: ActionType.FAILED,
            payload: "Something went wrong",
          });
        }
      }
    };
    fetchMoviesList();
  }, [offset]);

  return state;
};

export default useMoviesList;
