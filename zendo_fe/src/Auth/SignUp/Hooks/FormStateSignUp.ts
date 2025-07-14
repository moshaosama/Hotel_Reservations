import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { userService } from "../../../Api/User/userService";

const useFormStateSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    mode: "onChange",
  });

  const fetchHandleSignup = async (data: any) => {
    mutate(data);
  };

  const { mutate, isPending } = useMutation({
    mutationKey: ["signUp"],
    mutationFn: userService.SignUp,
  });

  return { handleSubmit, register, fetchHandleSignup, isValid, isPending };
};

export default useFormStateSignUp;
