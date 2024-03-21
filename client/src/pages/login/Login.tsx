import { useState } from "react";
import NavBar from "../../components/navbar/Navbar";
import Input from "../../components/shared/Input";

enum Variant {
  SIGN_UP,
  LOGIN_IN,
}

function Login() {
  const [variant, setVariant] = useState(Variant.LOGIN_IN);

  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-lg rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">
            {variant === Variant.LOGIN_IN ? "Sign in" : "Sign up"}
          </h2>
          <form className="flex flex-col gap-4">
            <Input label="Email address" name="email" type="email" />
            {variant === Variant.SIGN_UP && (
              <Input label="Username" name="username" type="text" />
            )}
            <Input label="Password" name="password" type="password" />
            <input
              type="submit"
              value="Submit"
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 cursor-pointer duration-300"
            />
          </form>
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
