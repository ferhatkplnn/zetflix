import { useEffect, useReducer } from "react";
import { Movie } from "../types";
import axios from "axios";

type State = {
  data: Movie | null;
  error: string | null;
  loading: boolean;
};

enum ActionType {
  LOADING,
  SUCCESS,
  FAILED,
}

type Action =
  | { type: ActionType.LOADING }
  | { type: ActionType.SUCCESS; payload: Movie }
  | { type: ActionType.FAILED; payload: string };

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return { ...state, loading: true, error: null, data: null };

    case ActionType.SUCCESS:
      return { ...state, loading: false, error: null, data: action.payload };

    case ActionType.FAILED:
      return { ...state, loading: false, error: action.payload, data: null };

    default:
      return state;
  }
};

const useMovie = (id: string) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);

  useEffect(() => {
    const fetchMovieDetail = async () => {
      dispatch({ type: ActionType.LOADING });
      try {
        const response = await axios.get<Movie>(
          `http://localhost:8080/movies/${id}`
        );

        dispatch({ type: ActionType.SUCCESS, payload: response.data });
      } catch (error) {
        handleFetchError(error);
      }
    };

    fetchMovieDetail();

    const handleFetchError = (error: unknown) => {
      if (axios.isAxiosError(error)) {
        let errorMessage: string = "Network error occurred";
        if (
          error.response?.data &&
          typeof error.response.data.error == "string"
        ) {
          errorMessage = error.response.data.error;
        }
        dispatch({
          type: ActionType.FAILED,
          payload: errorMessage,
        });
      } else {
        dispatch({ type: ActionType.FAILED, payload: "Something went wrong" });
      }
    };
  }, [id]);

  return state;
};
export default useMovie;
