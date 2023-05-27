import { gql } from "graphql-tag";

export const GET_CONFERENCE = gql`
  query GetConference($conferenceId: ID!) {
    conference(id: $conferenceId) {
      id
      name
      series {
        name
      }
      organizer {
        ...Contact
      }
      year
      startDate
      endDate
      slogan
      websiteUrl
      locations {
        name
        about
        city
        address
      }
      speakers {
        firstName
        lastName
        name
        about
        aboutShort
        company
        tagline
        image {
          url
          title
        }
        type
        social {
          ...SocialFields
        }
        keywords

        talks {
          ...TalkFields
        }
        noPhotography
      }
      locations {
        ...Location
      }
      keynotes {
        ...TalkFields
      }
    }
  }

  fragment Contact on Contact {
    firstName
    lastName
    name
    about
    aboutShort
    company
    tagline
    image {
      url
      title
    }
    type
    social {
      ...SocialFields
    }
    keywords
    talks {
      ...TalkFields
    }
    noPhotography
  }

  fragment LocationFields on Location {
    name
    about
    image {
      url
      title
    }
    social {
      ...SocialFields
    }
    country {
      name
      code
    }
    city
    address
  }

  fragment TalkFields on Session {
    type
    title
    hasTitle
    description
    keywords
    location {
      ...LocationFields
    }
    day
    begin
    end
  }

  fragment SocialFields on Social {
    homepage
    mastodon
    twitter
    github
    facebook
    googleMaps
    medium
    instagram
    linkedin
    youtube
    vk
    pinterest
    vimeo
    dribble
    devto
    twitch
  }
  fragment Location on Location {
    name
    about
    image {
      url
      title
    }
    social {
      ...SocialFields
    }
    country {
      name
      code
    }
    city
    address
  }
`;
