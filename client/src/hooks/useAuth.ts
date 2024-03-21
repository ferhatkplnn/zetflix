import axios from "axios";

type Login = {
  email: string;
  password: string;
};

type Signup = Login & { username: string };

const useAuth = () => {
  const login = async ({ email, password }: Login) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Login failed");
      } else {
        throw new Error("Login failed");
      }
    }
  };

  const signup = async ({ email, password, username }: Signup) => {
    try {
      const response = await axios.post("http://localhost:8080/auth/signup", {
        email,
        username,
        password,
      });

      return response.data;
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        throw new Error(error.response.data.message || "Signup failed");
      } else {
        throw new Error("Signup failed");
      }
    }
  };

  const fetchUser = () => {};

  return { login, signup, fetchUser };
};

export default useAuth;
