"use client";
import { useQuery } from "@apollo/client";
import Event from "./components/Event";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import DateFilter from "./components/DateFilter";
import { Conferences, GET_DATA } from "./events.graphql";

export default function Events() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [search, setSearch] = useState<string>("");
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState([]);
  const [{ startDate, endDate }, setDate] = useState<{
    startDate: string | null;
    endDate: string | null;
  }>({
    startDate: null,
    endDate: null,
  });
  const filteredEvents = data?.conferences.filter((event: Conferences) =>
    event.name.toLowerCase().includes(search)
  );
  const handleSearchInputChange = (search: string) => {
    setSearch(search);
  };

  const handleFilter = (startDate: string, endDate: string) => {
    const filteredData = data?.conferences.filter((item: Conferences) => {
      const itemDate = new Date(item.startDate);
      if (startDate && endDate) {
        return itemDate >= new Date(startDate) && itemDate <= new Date(endDate);
      } else if (startDate && !endDate) {
        return itemDate >= new Date(startDate);
      } else if (!startDate && endDate) {
        return itemDate <= new Date(endDate);
      } else {
        return null;
      }
    });
    setDate({ startDate, endDate });
    setFilteredItems(filteredData);
  };

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2  border-blue-900"></div>
        </div>
      )}

      {showFilter && (
        <div className="absolute right-2 top-40 p-3 mt-1 border rounded-md bg-white w-72">
          <DateFilter onFilter={handleFilter} />
        </div>
      )}

      <div className="mt-4 flex justify-center items-center">
        <FontAwesomeIcon icon={faSearch} className="mx-2"></FontAwesomeIcon>
        <input
          value={search}
          onChange={(event) => handleSearchInputChange(event?.target.value)}
          placeholder="Search Event"
          className="border rounded w-1/3 p-3 h-8"
        />{" "}
        <button
          onClick={handleToggleFilter}
          className=" absolute right-4 text-lg text-blue-500"
        >
          <FontAwesomeIcon icon={faFilter} className="mx-2" />
        </button>
      </div>

      {(startDate || endDate) && filteredItems.length == 0 ? (
        <div className="flex justify-center mt-4">
          <span> No Event Found</span>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
          {search && filteredEvents
            ? filteredEvents.map((item: Conferences, index: number) => {
                return (
                  <div key={index}>
                    <Event confrence={item} />
                  </div>
                );
              })
            : filteredItems.length != 0
            ? filteredItems.map((item: Conferences, index: number) => {
                return (
                  <div key={index}>
                    <Event confrence={item} />
                  </div>
                );
              })
            : data?.conferences.map((item: Conferences, index: number) => {
                return (
                  <div key={index}>
                    <Event confrence={item} />
                  </div>
                );
              })}
        </div>
      )}
    </>
  );
}
