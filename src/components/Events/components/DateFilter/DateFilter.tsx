import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

export default function DateFilter({
  onFilter,
  showSearch,
}: {
  onFilter: any;
  showSearch: boolean;
}) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };
  useEffect(() => {
    handleFilter();
  }, [startDate, endDate]);
  const clearStart = () => {
    setStartDate("");
    onFilter();
  };
  const clearEnd = () => {
    setEndDate("");
    onFilter();
  };

  return (
    <div
      className={`flex items-center  text-slate-100 my-1 dataFilterSlide w-full ${
        showSearch ? "hiddenItem" : ""
      } `}
    >
      <div className="border-r border-blue-800 pl-6 py-5 w-full ">
        <p className="text-xs">Start Date:</p>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className=" border-b border-blue-400 p-3 h-8 my-2 bg-transparent  dateInput text-xl pb-5 w-3/4"
        />
        {startDate && (
          <button onClick={clearStart}>
            <FontAwesomeIcon icon={faX} className="ml-4" />
          </button>
        )}
      </div>
      <div className=" pl-6 py-5 w-full ">
        <p className="text-xs">End Date:</p>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="border-b border-blue-400  p-3 h-8 my-2 bg-transparent dateInput text-xl pb-5 w-3/4"
        />
        {endDate && (
          <button onClick={clearEnd}>
            {" "}
            <FontAwesomeIcon icon={faX} className="ml-4" />
          </button>
        )}
      </div>
    </div>
  );
}
