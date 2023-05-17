import { gql } from "@apollo/client";

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
      partners {
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
          linkedin
          youtube
          instagram
          facebook
        }
        keywords
        location {
          name
          about
          city
          address
        }
        talks {
          type
          level
          title
          hasTitle
          description
          keywords
          day
          begin
          end
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
