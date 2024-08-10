import ReactDOM from "react-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import Fehler from "./Fehler";

interface IFormInput {
  Name: string;
  Email: string;
  Message: string;
}
export default function Form() {
  const { register, handleSubmit, formState } = useForm<IFormInput>();
  const { errors } = formState;

  const onsubmit = (data: IFormInput) => {
    console.log("Form Submitted,", data);
  };
  return (
    <form
      className="text-white px-8 pt-6 pb-8 mb-4"
      onSubmit={handleSubmit(onsubmit)}
      noValidate
    >
      <label className="block text-sm font-bold mb-3">First Name</label>
      <input
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="Abebe"
        {...register("Name", {
          required: "Name is required",
          maxLength: {
            value: 20,
            message: "Name can not be morethan 20 characters",
          },
          minLength: {
            value: 2,
            message: "Name can not be lessthan 2 character",
          },
        })}
      />

      {errors.Name ? (
        <Fehler error={errors.Name?.message} />
      ) : (
        <Fehler error="" />
      )}
      <label className="block text-sm font-bold mb-3 mt-3">Email</label>
      <input
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        type="text"
        placeholder="abebe@gmail.com"
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
      <label className="block text-sm font-bold mb-3 mt-3">Message</label>
      <textarea
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Leave a comment..."
        {...register("Message", {
          required: "Your feedback is required to submitt",
          minLength: {
            value: 3,
            message: "Feedback can not be less than 3 characters",
          },
          maxLength: {
            value: 100,
            message: "Feedback cannot be more than 100 characters",
          },
        })}
      ></textarea>
      {errors.Message ? (
        <Fehler error={errors.Message?.message} />
      ) : (
        <Fehler error="" />
      )}
      <div className="flex justify-center">
        <button
          className="bg-blue-600 rounded-xl mt-10 shadow-xl"
          type="submit"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
