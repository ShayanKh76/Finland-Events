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
    about: string;
    country: {
      name: string;
    };
  }[];
  year: string;
  startDate: string;
  endDate: string;
  keynotes: {
    title: string;
    hasTitle: boolean;
    description: string;
    day: string;
    begin: string;
    end: string;
    keywords: string[];
  }[];
  speakers: {
    firstName: string;
    lastName: string;
    name: string;
    about: string;
    aboutShort: string;
    company: string;
    tagline: string;
    image: {
      url: string;
      title: string;
      style: {
        backgroundSize: number;
      };
    };
    keywords: [string];
    noPhotography: boolean;
  }[];
};
export const GET_DATA = gql`
  {
    conferences {
      id
      name
      slogan
      locations {
        city
        address
        name
      }
      year
      startDate
    }
  }
`;
