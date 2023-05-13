"use client";
import { useQuery, gql } from "@apollo/client";
import Event from "./components/Event";

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

  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-8 m-4">
        {data
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
