import NavBar from "../../components/navbar/Navbar";
import Input from "../../components/shared/Input";

function Login() {
  return (
    <div className="relative bg-black h-screen w-screen bg-opacity-50">
      <NavBar />
      <div className="flex justify-center items-center h-full">
        <div className="bg-black bg-opacity-70 p-16 self-center mt-2 w-full max-w-lg rounded-md">
          <h2 className="text-white text-4xl mb-8 font-semibold">Sing in</h2>
          <form className="flex flex-col gap-4">
            <Input label="Email" type="email" />
            <Input label="Password" type="password" />
            <input
              type="submit"
              value="Submit"
              className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 cursor-pointer duration-300"
            />
          </form>
          <p className="text-neutral-500 mt-12">
            <span className="text-white ml-1 hover:underline cursor-pointer">
              First time using Zetflix?
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
