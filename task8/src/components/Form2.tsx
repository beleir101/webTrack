"use client";

import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Fehler from "./Fehler";
import { signIn } from "next-auth/react";
import { useEffect } from "react";

interface IFormInput {
  Email: string;
  password: string;
}
export default function Form2() {
  const { register, handleSubmit, formState, getValues, reset } =
    useForm<IFormInput>();
  const { errors, isSubmitSuccessful } = formState;

  const onSubmit = (data: IFormInput) => {
    signIn("credentials", {
      email: data.Email,
      password: data.password,
      redirect: true,
      callbackUrl: "/",
    });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);
  return (
    <form
      className="text-black px-8 pt-6 pb-8   w-3/4 "
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <label className="block text-base font-normal mt-5 text-black">
        Email
      </label>
      <input
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
        type="text"
        placeholder="Enter Email"
        {...register("Email", {
          required: "Email is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address",
          },
        })}
      />
      {errors.Email ? (
        <Fehler error={errors.Email?.message} />
      ) : (
        <Fehler error="" />
      )}
      <label className="block text-base font-normal mt-5 text-black">
        Password
      </label>
      <input
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  "
        type="password"
        placeholder="Enter Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Password must be at least 8 characters long",
          },
          pattern: {
            value:
              /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).*$/,
            message:
              "Password must include at least one uppercase letter, one lowercase letter, one number and one special character.",
          },
        })}
      />
      {errors.password ? (
        <Fehler error={errors.password?.message} />
      ) : (
        <Fehler error="" />
      )}

      <div className="flex justify-center">
        <button
          className="bg-violet-950 rounded-full mt-5 pt-3 pb-3 flex items-center justify-center shadow-xl w-full"
          type="submit"
        >
          Login
        </button>
      </div>
    </form>
  );
}
