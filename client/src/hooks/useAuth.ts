import axios from "axios";
import Cookie from "universal-cookie";

const cookie = new Cookie();

type Login = {
  email: string;
  password: string;
};

type Signup = Login & { username: string };

const useAuth = () => {
  const login = async ({ email, password }: Login) => {
    const response = await axios.post("http://localhost:8080/auth/login", {
      email,
      password,
    });
    const { token } = response.data;
    cookie.set("session_token", token);
    return response.data;
  };

  const signup = async ({ email, password, username }: Signup) => {
    const response = await axios.post("http://localhost:8080/auth/signup", {
      email,
      username,
      password,
    });
    const { token } = response.data;
    cookie.set("session_token", token);
    return response.data;
  };

  const fetchUser = () => {};

  return { login, signup, fetchUser };
};

export default useAuth;
