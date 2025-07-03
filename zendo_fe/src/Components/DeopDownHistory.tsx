import useGetHistories from "../Hooks/useGetHistories";

interface HistoryData {
  pathName: string;
  hotel_name: string;
  checkIn: string;
  checkOut: string;
}

const DeopDownHistory = () => {
  const { History } = useGetHistories();
  return (
    <>
      <div className="bg-white shadow-2xl shadow-gray-500 border-2 border-gray-200 w-96 z-50 py-3 px-2 rounded-xl">
        <div className="w-full">
          <button className="bg-[#e1effd] w-full py-2 hover:border-2 transition-all duration-200 cursor-pointer hover:border-blue-500 rounded-full font-bold">
            Clear Searches
          </button>
        </div>

        <div className="flex flex-col items-center mt-2">
          {History?.map((history: HistoryData, i: number) => (
            <div
              key={i}
              className="py-2 flex justify-between items-center px-2 w-full hover:bg-gray-200 cursor-pointer rounded-full"
            >
              <h1 className="text-md font-bold">{history.pathName}</h1>
              <p className="text-sm">{history.hotel_name}</p>
              <div className="flex items-center gap-1">
                <span>{history.checkIn}</span>
                <span>-</span>
                <span>{history.checkOut}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DeopDownHistory;
