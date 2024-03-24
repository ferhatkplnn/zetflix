import axios from "axios";
import { useReducer } from "react";
import Cookie from "universal-cookie";

const cookie = new Cookie();

interface Subscription {
  id: string;
  name: string;
}

interface State {
  data: Subscription | null;
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
  | { type: ActionType.SUCCESS; payload: Subscription }
  | { type: ActionType.FAILED; payload: string };

const initialState: State = {
  data: null,
  error: null,
  loading: false,
};

type UseSubscription = () => [
  {
    data: Subscription | null;
    error: string | null;
    loading: boolean;
  },
  () => Promise<Subscription>
];

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

const useSubscription: UseSubscription = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchSubscription = async () => {
    dispatch({ type: ActionType.LOADING });
    const sessionToken = cookie.get("session_token");

    try {
      const response = await axios.get(
        `http://localhost:8080/sub/subscription`,
        {
          headers: {
            ...(sessionToken
              ? { Authorization: `Bearer ${sessionToken}` }
              : null),
          },
        }
      );

      dispatch({
        type: ActionType.SUCCESS,
        payload: response.data,
      });
      return response.data;
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
  return [state, fetchSubscription];
};

export default useSubscription;
