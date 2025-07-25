import Button from "../../../Components/Button";
import useFormStateSignUp from "../Hooks/FormStateSignUp";

import DescriptionSignUp from "./DescriptionSignUp";

const FormSignUp = () => {
  const { fetchHandleSignup, handleSubmit, register, isValid } =
    useFormStateSignUp();

  return (
    <div className="w-full flex justify-center items-center h-[90vh]">
      <div className="flex flex-col gap-3 border-2 border-gray-200 hover:shadow-2xl transition-all duration-300 w-[35pc] p-2 rounded-xl shadow-lg">
        <DescriptionSignUp />
        <form
          className="mt-2 grid grid-cols-2 gap-3"
          onSubmit={handleSubmit(fetchHandleSignup)}
        >
          <p className="col-span-2 flex flex-col gap-1">
            <label htmlFor="userName" className="font-semibold mx-1">
              userName
            </label>
            <input
              type="text"
              id="userName"
              className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              {...register("userName", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-1">
            <label htmlFor="Email" className="font-semibold mx-1">
              Email
            </label>
            <input
              type="email"
              id="Email"
              className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              {...register("Email", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-1">
            <label htmlFor="Password" className="font-semibold mx-1">
              Password
            </label>
            <input
              type="password"
              id="Password"
              className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              {...register("Password", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-1">
            <div className="border-1 border-solid border-gray-600 py-4 flex justify-center rounded-xl font-semibold">
              <h1>By signup I agree to terms and policy</h1>
            </div>
            <Button
              disabled={isValid}
              Title="SignUp"
              bGround="#2563eb"
              color="black"
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormSignUp;
