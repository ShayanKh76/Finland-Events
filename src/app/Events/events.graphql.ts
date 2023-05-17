import { gql } from "@apollo/client";

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
export const GET_DATA = gql`
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
