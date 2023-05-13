"use client";
import { Conferences } from "@/app/Events/Events";
import Image from "next/image";
import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faGithub,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

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
const header = {
  borderBottom: "1px solid #dadada",
  height: "120px",
  display: "flex",
  justifyContent: "center",
  padding: "24px",
  backgroundColor: "#00b2ff5e",
};
export default function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId; // Access the passed data
  const { loading, error, data } = useQuery(GET_DATA);
  console.log(
    data
      ? data.conferences.find((item: Conferences) => item.id == eventId)
      : null
  );
  const [event, setEvent] = useState<Conferences>();
  useEffect(() => {
    if (data) {
      setEvent(
        data.conferences.find((item: Conferences) => item.id == eventId)
      );
    }
  });

  return (
    <div>
      <div style={header}>
        <span className="text-4xl flex items-center">{event?.slogan}</span>
      </div>
      <div>
        <div className="text-2xl flex items-center justify-center p-4">
          {event?.name}
        </div>
        <div className="flex justify-around">
          <span>
            <FontAwesomeIcon
              icon={faCalendar}
              className="mx-2"
            ></FontAwesomeIcon>{" "}
            Start Date: {event?.startDate}
          </span>
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faCalendar}
              className="mx-2"
            ></FontAwesomeIcon>{" "}
            End Date: {event?.endDate}
          </span>
        </div>
      </div>
      <div className="p-6 flex justify-around">
        <div className="flex justify-center ">
          <div
            className=" mt-6 border p-3 rounded-md"
            style={{ minHeight: "190px", minWidth: "185px" }}
          >
            organizer:
            <br />
            <div>
              {event && (
                <Image
                  src={event.organizer.image.url}
                  alt={event.organizer.name}
                  width={150}
                  height={150}
                  className="mb-4"
                />
              )}
              <span>{event?.organizer.name}</span>
            </div>
            <div className="flex items-center mt-4">
              {event && event.organizer.social.facebook && (
                <a href={event.organizer.social.facebook}>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="px-2"
                    size="xl"
                  />
                </a>
              )}{" "}
              {event && event.organizer.social.twitter && (
                <a href={event.organizer.social.twitter}>
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="px-2"
                    size="xl"
                  />
                </a>
              )}
              {event && event.organizer.social.github && (
                <a href={event.organizer.social.github}>
                  <FontAwesomeIcon icon={faGithub} className="px-2" size="xl" />
                </a>
              )}
              {event && event.organizer.social.linkedin && (
                <a href={event.organizer.social.linkedin}>
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="px-2"
                    size="xl"
                  />
                </a>
              )}
              {event && event.organizer.social.youtube && (
                <a href={event.organizer.social.youtube}>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    className="px-2"
                    size="xl"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center text-red-600">
        <a href={event?.websiteUrl}>Event Website</a>
      </div>
    </div>
  );
}
