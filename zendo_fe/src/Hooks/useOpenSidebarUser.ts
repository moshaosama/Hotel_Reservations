import { useState } from "react";

const useOpenSidebarUser = () => {
  const [isOpenSidebarUser, setIsOpenSidebarUser] = useState(false);

  const handleTriggerSidebar = () => {
    setIsOpenSidebarUser(!isOpenSidebarUser);
  };

  return { isOpenSidebarUser, handleTriggerSidebar };
};

export default useOpenSidebarUser;
