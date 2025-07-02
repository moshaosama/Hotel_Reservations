const SearchByName = () => {
  return (
    <>
      <form action="" className="flex flex-col relative justify-center mt-6 ">
        <input
          type="text"
          className="py-2 mx-3 z-40 border-4 peer border-[#e1effd] rounded-xl"
        />
        <label
          htmlFor=""
          className="absolute peer-focus:-top-6 text-sm transition-all duration-500 text-gray-500 top-3 left-6"
        >
          Search by Name
        </label>
      </form>
    </>
  );
};

export default SearchByName;
