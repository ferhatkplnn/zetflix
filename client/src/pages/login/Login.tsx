import { createContext, useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import Input from "../../components/shared/Input";
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  FieldErrors,
} from "react-hook-form";

export type Inputs = {
  email: string;
  username: string;
  password: string;
};

enum Variant {
  SIGN_UP,
  LOGIN_IN,
}

interface AuthFormContextType {
  register: UseFormRegister<Inputs> | null;
  errors: FieldErrors<Inputs>;
}

export const AuthFormContext = createContext<AuthFormContextType>({
  register: null,
  errors: {},
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };
  console.log(errors);

  const [variant, setVariant] = useState(Variant.LOGIN_IN);

  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-lg rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === Variant.LOGIN_IN ? "Sign in" : "Sign up"}
          </h2>
          <AuthFormContext.Provider value={{ register, errors }}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-4"
            >
              <Input label="Email address" name="email" type="email" />
              {variant === Variant.SIGN_UP && (
                <Input label="Username" name="username" type="text" />
              )}
              <Input
                label="Password"
                name="password"
                type="password"
                validate={
                  variant === Variant.SIGN_UP
                    ? () => {
                        const password = getValues("password");
                        if (password.length < 8) {
                          return "Password must be greater than 8 characters";
                        }
                        if (!/[A-Z]/.test(password)) {
                          return "Password must have at least one uppercase value";
                        }
                        if (!/[a-z]/.test(password)) {
                          return "Password must have at least one lowercase value";
                        }
                        if (!/\d/.test(password)) {
                          return "Password must have a number";
                        }
                        return true;
                      }
                    : undefined
                }
              />
              <input
                type="submit"
                value="Submit"
                className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 cursor-pointer duration-300"
              />
            </form>
          </AuthFormContext.Provider>
          {variant === Variant.LOGIN_IN ? (
            <p
              className="text-neutral-500 mt-12"
              onClick={() => setVariant(Variant.SIGN_UP)}
            >
              <span className="text-white ml-1 hover:underline cursor-pointer">
                First time using Zetflix?
              </span>
            </p>
          ) : (
            <p
              className="text-neutral-500 mt-12"
              onClick={() => setVariant(Variant.LOGIN_IN)}
            >
              <span className="text-white ml-1 hover:underline cursor-pointer">
                Already have an account?
              </span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;
