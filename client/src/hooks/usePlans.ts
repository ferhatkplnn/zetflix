import axios from "axios";
import { useEffect, useReducer } from "react";

interface Plan {
  id: string;
  name: string;
  price: {
    amount: number;
    id: string;
  };
}

interface State {
  data: Plan[] | null;
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
  | { type: ActionType.SUCCESS; payload: Plan[] }
  | { type: ActionType.FAILED; payload: string };

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

const reducer = (_: State, action: Action): State => {
  switch (action.type) {
    case ActionType.LOADING:
      return { loading: true, error: null, data: null };

    case ActionType.SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionType.FAILED:
      return { loading: false, error: action.payload, data: null };

    default:
      return _;
  }
};

const usePlans = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchPlansList = async () => {
      dispatch({ type: ActionType.LOADING });
      try {
        const response = await axios.get(`http://localhost:8080/subs/products`);

        dispatch({
          type: ActionType.SUCCESS,
          payload: response.data,
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
    fetchPlansList();
  }, []);

  return state;
};

export default usePlans;
