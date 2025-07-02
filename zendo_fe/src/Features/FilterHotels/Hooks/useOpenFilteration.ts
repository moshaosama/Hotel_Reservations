import { useState } from "react";

const useOpenFilteration = () => {
  const [isOpenSearchByName, setIsOpenSearchByName] = useState(true);
  const [isOpenStars, setIsOpenStars] = useState(false);

  const handleTriggerOpenSearchByName = () => {
    setIsOpenSearchByName((prev) => !prev);
  };

  const handleTriggerOpenStars = () => {
    setIsOpenStars((prev) => !prev);
  };

  return {
    isOpenSearchByName,
    handleTriggerOpenSearchByName,
    handleTriggerOpenStars,
    isOpenStars,
  };
};

export default useOpenFilteration;
