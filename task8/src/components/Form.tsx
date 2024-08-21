import { useForm, SubmitHandler } from "react-hook-form";
import Fehler from "./Fehler";
import { useState } from "react";
import VerifyEmail from "@/app/api/auth/otp/page";

interface IFormInput {
  Name: string;
  Email: string;
  Message: string;
  password: string;
  confirmpassword: string;
}

export default function Form() {
  const [Values, setValues] = useState<IFormInput>({
    Name: "",
    Email: "",
    password: "",
    confirmpassword: "",
    Message: "",
  });
  const [isSignup, setisSignup] = useState(false);
  const { register, handleSubmit, formState, getValues } =
    useForm<IFormInput>();
  const { errors } = formState;

  const onSubmit = async (data: IFormInput) => {
    const res = await fetch("https://akil-backend.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (res.success) {
      setValues(data);
      setisSignup(true);
      console.log("success");
    }
  };

  return (
    <>
      {!isSignup ? (
        <form
          className="text-white px-8 pt-6 pb-8 w-3/4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          {}
          <label className="block text-base font-normal text-black">
            Full Name
          </label>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Enter your full name"
            {...register("Name", {
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Name can not be more than 20 characters",
              },
              minLength: {
                value: 2,
                message: "Name can not be less than 2 characters",
              },
            })}
          />
          {errors.Name && <Fehler error={errors.Name.message} />}

          <label className="block text-base font-normal mt-5 text-black">
            Email
          </label>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Enter Email"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          {errors.Email && <Fehler error={errors.Email.message} />}

          <label className="block text-base font-normal mt-5 text-black">
            Password
          </label>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
                  "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character.",
              },
            })}
          />
          {errors.password && <Fehler error={errors.password.message} />}

          <label className="block text-base font-normal mt-5 text-black">
            Confirm Password
          </label>
          <input
            className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmpassword", {
              required: "Retype your password",
              validate: {
                matchesPreviousPassword: (value) => {
                  const { password } = getValues();
                  return password === value || "Passwords do not match";
                },
              },
            })}
          />
          {errors.confirmpassword && (
            <Fehler error={errors.confirmpassword.message} />
          )}

          <div className="flex justify-center">
            <button
              className="bg-violet-950 rounded-full mt-5 pt-3 pb-3 flex items-center justify-center shadow-xl w-full"
              type="submit"
            >
              Continue
            </button>
          </div>
        </form>
      ) : (
        <VerifyEmail
          email={Values.Email}
          name={Values.Name}
          password={Values.password}
          confirmPassword={Values.confirmpassword}
          role=""
        />
      )}{" "}
    </>
  );
}
