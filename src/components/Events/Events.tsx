"use client";
import Event from "./components/Event/Event";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faX } from "@fortawesome/free-solid-svg-icons";
import DateFilter from "./components/DateFilter/DateFilter";
import { Conferences } from "./Events.graphql";
import Slider from "./components/Slider/Slider";

export default function Events({
  loading,
  conferences,
}: {
  loading: boolean;
  conferences: Conferences[];
}) {
  const [search, setSearch] = useState<string>("");
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<Conferences[]>([]);
  const [{ startDate, endDate }, setDate] = useState<{
    startDate?: string | null;
    endDate?: string | null;
  }>({
    startDate: null,
    endDate: null,
  });
  const filteredEvents = conferences?.filter((event: Conferences) =>
    event.name.toLowerCase().includes(search)
  );
  const handleSearchInputChange = (search: string) => {
    setSearch(search);
    setFilteredItems(conferences);
  };

  const handleFilter = (startDate?: string, endDate?: string) => {
    const filteredData = conferences?.filter((item: Conferences) => {
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

  const handleToggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <>
      <Slider conferences={conferences} />
      <div className="eventsMain">
        <div className="flex justify-center items-center mt-4 ">
          <div className="flex justify-between rounded-xl z-10 -mt-16 relative w-3/4 overflow-hidden filterSection">
            <DateFilter onFilter={handleFilter} showSearch={showSearch} />

            <div
              className={`flex justify-center items-center bg-blue-400 rounded m-5  searchButton ${
                showSearch ? "stretchBtn" : ""
              }`}
            >
              <input
                value={search}
                onChange={(event) =>
                  handleSearchInputChange(event?.target.value)
                }
                placeholder="Search Event"
                className={`border rounded w-1/3 p-3 h-8 bg-transparent searchInput ${
                  showSearch ? "showInput" : ""
                } `}
              />
              <button onClick={handleToggleSearch}>
                <FontAwesomeIcon
                  icon={showSearch ? faX : faSearch}
                  className="p-5 "
                  color="#003a7f"
                  size="lg"
                ></FontAwesomeIcon>
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-2">
          <div className="col-start-2 col-span-4 text-2xl mt-7">Events</div>
          {(startDate || endDate) && filteredItems.length == 0 ? (
            <div className="flex justify-center col-start-2 col-span-4 my-4 ">
              <span> No Event Found</span>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 m-4 col-start-2 col-span-4">
              {search && filteredEvents
                ? filteredEvents.map((item: Conferences, index: number) => {
                    return (
                      <div key={index}>
                        <Event
                          conference={item}
                          image={`/assets/images/${item.id}.jpg`}
                        />
                      </div>
                    );
                  })
                : filteredItems.length != 0
                ? filteredItems.map((item: Conferences, index: number) => {
                    return (
                      <div key={index}>
                        <Event
                          conference={item}
                          image={`/assets/images/${item.id}.jpg`}
                        />
                      </div>
                    );
                  })
                : conferences?.map((item: Conferences, index: number) => {
                    return (
                      <div key={index}>
                        <Event
                          conference={item}
                          image={`/assets/images/${item.id}.jpg`}
                        />
                      </div>
                    );
                  })}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
