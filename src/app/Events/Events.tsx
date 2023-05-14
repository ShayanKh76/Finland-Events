"use client";
import { useQuery, gql } from "@apollo/client";
import Event from "./components/Event";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export type Conferences = {
  id: string;
  series: {
    id: number;
    name: string;
    conferences: {
      name: string;
      id: number;
    };
  };
  name: string;
  organizer: {
    name: string;
    image: {
      url: string;
      title: string;
      style: {
        backgroundSize: number;
      };
    };
    social: {
      twitter: string;
      github: string;
      facebook: string;
      linkedin: string;
      youtube: string;
    };
  };
  slogan: string;
  websiteUrl: string;
  locations: {
    city: string;
    address: string;
    name: string;
  };
  year: string;
  startDate: string;
  endDate: string;
};
const GET_DATA = gql`
  {
    conferences {
      id
      series {
        id
        name
        conferences {
          name
          id
        }
      }
      name
      organizer {
        name
        image {
          url
          title
          style {
            backgroundSize
          }
        }
        social {
          twitter
          github
          facebook
          linkedin
          youtube
        }
      }
      slogan
      websiteUrl
      locations {
        city
        address
        name
      }
      year
      startDate
      endDate
    }
  }
`;
export default function Events() {
  const { loading, error, data } = useQuery(GET_DATA);
  const [search, setSearch] = useState("");
  const filteredEvents =
    data &&
    data.conferences.filter((event: any) =>
      event.name.toLowerCase().includes(search)
    );
  const handleSearchInputChange = (event: any) => {
    setSearch(event.target.value);
  };
  return (
    <>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2  border-blue-900"></div>
        </div>
      )}

      <div className="mt-4 flex justify-center items-center">
        <FontAwesomeIcon icon={faSearch} className="mx-2"></FontAwesomeIcon>
        <input
          value={search}
          onChange={handleSearchInputChange}
          placeholder="Search Event"
          className="border rounded w-1/3 p-3 h-8"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {search && filteredEvents
          ? filteredEvents.map((item: Conferences, index: number) => {
              return (
                <div key={index}>
                  <Event confrence={item} />
                </div>
              );
            })
          : data
          ? data.conferences.map((item: Conferences, index: number) => {
              return (
                <div key={index}>
                  <Event confrence={item} />
                </div>
              );
            })
          : null}
      </div>
    </>
  );
}
