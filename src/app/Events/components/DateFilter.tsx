import { useState } from "react";

export default function DateFilter({ onFilter }: any) {
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");

  const handleFilter = () => {
    onFilter(startDate, endDate);
  };
  const handleClear = () => {
    setStartDate("");
    setEndDate("");
    onFilter();
  };

  return (
    <div className="grid  h-30">
      <label>Start Date:</label>
      <input
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        className="border rounded  p-3 h-8 my-2"
      />
      <label>End Date:</label>
      <input
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        className="border rounded  p-3 h-8 my-2"
      />
      <button
        onClick={handleFilter}
        className=" h-7  bg-blue-400 rounded text-white"
      >
        Filter
      </button>
      <button
        onClick={handleClear}
        className=" h-7 border  border-blue-400 rounded text-blue-400 mt-2"
      >
        clear
      </button>
    </div>
  );
}
