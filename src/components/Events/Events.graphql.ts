import {
  ApolloClient,
  InMemoryCache,
  gql,
  makeVar,
  HttpLink,
} from "@apollo/client";
import fetch from "cross-fetch";

export const favouritesEventVar = makeVar<string[]>(
  JSON.parse(
    typeof window !== "undefined"
      ? localStorage.getItem("favouriteEvents")!
      : "[]"
  ) || []
);
export type Conferences = {
  id: string;
  isInFavourite: boolean;
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
export const cache = new InMemoryCache({
  typePolicies: {
    Conference: {
      fields: {
        isInFavourite: {
          read(_, { readField }) {
            const eventId = readField<string>("id");
            console.log(window.localStorage.getItem("favouriteEvents"));

            return favouritesEventVar().includes(eventId!);
          },
        },
      },
    },
  },
});
export const saveFavEvents = () => {
  window.localStorage.setItem(
    "favouriteEvents",
    JSON.stringify(favouritesEventVar())
  );
};
const httpLink = new HttpLink({
  uri: "https://api.react-finland.fi/graphql/",
  fetch,
});
export const client = new ApolloClient({
  cache,
  link: httpLink,
});

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
      isInFavourite @client
    }
  }
`;
