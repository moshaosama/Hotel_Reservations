import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userService } from "../../../Api/User/userService";

const useFormStateLogin = () => {
  const { register, handleSubmit } = useForm();

  const fetchHandleLogin = (data: any) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: userService.Login,
    onSuccess: (user) => {
      window.localStorage.setItem("User", JSON.stringify(user));
    },
  });

  return { fetchHandleLogin, register, handleSubmit };
};

export default useFormStateLogin;
