const useGetUser = () => {
  const UserString = window.localStorage.getItem("User");
  const User = UserString ? JSON.parse(UserString) : null;

  return { User };
};

export default useGetUser;
