import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userService } from "../../../Api/User/userService";

const userFormStateSignUp = () => {
  const { register, handleSubmit } = useForm();

  const fetchHandleSignup = async (data: any) => {
    mutate(data);
  };

  const { mutate } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: userService.SignUp,
  });

  return { handleSubmit, register, fetchHandleSignup };
};

export default userFormStateSignUp;
