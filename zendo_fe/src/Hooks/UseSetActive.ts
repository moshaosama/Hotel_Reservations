const useSetActive = () => {
  const handleSetActive = (e: React.MouseEvent<HTMLDivElement>) => {
    document.querySelectorAll(".Active").forEach((el) => {
      el.classList.remove("Active");
    });

    e.currentTarget.classList.add("Active");
  };

  return { handleSetActive };
};

export default useSetActive;
