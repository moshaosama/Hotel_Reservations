import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userService } from "../../../Api/User/userService";
import { useNavigate } from "react-router";

const useFormStateLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const Navigate = useNavigate();
  const fetchHandleLogin = (data: any) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: userService.Login,
    onSuccess: (user) => {
      window.localStorage.setItem("User", JSON.stringify(user));
      Navigate("/");
    },
  });

  return { fetchHandleLogin, register, handleSubmit, isValid };
};

export default useFormStateLogin;
