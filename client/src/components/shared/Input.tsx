import { ComponentPropsWithoutRef, useContext } from "react";
import { AuthFormContext, Inputs } from "../../pages/login/Login";

type InputProps = ComponentPropsWithoutRef<"input"> & {
  label: string;
  name: keyof Inputs;
};

function Input({ label, name, type }: InputProps) {
  const { register } = useContext(AuthFormContext);

  if (!register) return null;

  return (
    <div className="relative">
      <input
        id={name}
        type={type}
        placeholder=""
        className="peer bg-black bg-opacity-50 px-4 pt-6 pb-2 w-full rounded border border-slate-600 text-white focus:ring-2 focus:ring-white outline-none invalid:border-red-500"
        {...register(name)}
      />
      <label
        htmlFor={name}
        className="absolute text-slate-400 left-3 scale-75 top-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:top-4 peer-focus:scale-75 peer-focus:top-2 duration-300"
      >
        {label}
      </label>
    </div>
  );
}

export default Input;
