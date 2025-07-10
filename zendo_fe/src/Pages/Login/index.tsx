import FormLogin from "../../Auth/Login/Components/FormLogin";
import DownloadApp from "../../Components/DownloadApp";

const Login = () => {
  return (
    <div className="flex flex-col  justify-center  items-center">
      <FormLogin />
      <DownloadApp />
    </div>
  );
};

export default Login;
