import Button from "../../../Components/Button";
import useFormStateLogin from "../Hook/fornStateLogin";
import DescriptionLogin from "./DescriptionLogin";

const FormLogin = () => {
  const { fetchHandleLogin, handleSubmit, register, isValid } =
    useFormStateLogin();
  return (
    <div className="h-[90vh] flex flex-col items-center justify-center">
      <div className="flex flex-col gap-3 border-2 border-gray-200 w-[35pc] p-2 rounded-xl shadow-lg">
        <DescriptionLogin />
        <form
          onSubmit={handleSubmit(fetchHandleLogin)}
          className="grid grid-cols-2 gap-2"
        >
          <p className="col-span-2 flex flex-col gap-1">
            <label className="mx-1 font-semibold">Email Address</label>
            <input
              type="email"
              className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              {...register("Email", { required: true })}
            />
          </p>

          <p className="col-span-2 flex flex-col gap-1">
            <label className="mx-1 font-semibold">Password</label>
            <input
              type="password"
              className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              {...register("Password", { required: true })}
            />
          </p>

          <div className="flex justify-between col-span-2 mt-3 mx-2">
            <p className="col-span-2 flex gap-2 ">
              <input
                type="checkbox"
                className="py-2 px-2 border-2 border-gray-200 rounded-xl"
              />
              <label className="mx-1 font-semibold text-gray-500">
                Remember me
              </label>
            </p>
            <p>
              <h1 className="text-blue-700 cursor-pointer hover:underline font-semibold">
                Reset Password
              </h1>
            </p>
          </div>

          <p className="col-span-2 flex flex-col">
            <Button
              bGround="#2563eb"
              color="white"
              Title="Login"
              disabled={isValid}
            />
            <Button
              Title="SignUp"
              bGround="white"
              color="#2563eb"
              disabled={true}
            />
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormLogin;
