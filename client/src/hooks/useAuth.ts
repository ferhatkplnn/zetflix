import axios from "axios";
import Cookie from "universal-cookie";
import { useDispatch } from "react-redux";
import { setUser } from "../features/userSlice";

const cookie = new Cookie();

type Login = {
  email: string;
  password: string;
};

type Signup = Login & { username: string };

const useAuth = () => {
  const dispatch = useDispatch();

  const login = async ({ email, password }: Login) => {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });
    const { token, user } = response.data;
    cookie.set("session_token", token);
    dispatch(setUser({ email: user.email, userName: user.username }));
    return response.data;
  };

  const signup = async ({ email, password, username }: Signup) => {
    const response = await axios.post("http://localhost:8080/auth/signup", {
      email,
      username,
      password,
    });
    const { token, user } = response.data;
    cookie.set("session_token", token);
    dispatch(setUser({ email: user.email, userName: user.username }));

    return response.data;
  };

  const fetchUser = () => {};

  return { login, signup, fetchUser };
};

export default useAuth;
