"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
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
import { faArrowLeft, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { GET_DATA } from "./event-details/event-details.graphql";
import { header } from "./event-details/event-details.styles";
import { Conferences } from "@/app/Events/events.graphql";

export default function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const { loading, error, data } = useQuery(GET_DATA);
  const [event, setEvent] = useState<Conferences>();
  useEffect(() => {
    if (data && data.conferences) {
      setEvent(
        data.conferences.find((item: Conferences) => item.id == eventId)
      );
    }
  }, [data]);

  return (
    <div>
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2  border-blue-900"></div>
        </div>
      )}
      {!loading && (
        <div>
          <Link href="/" className="flex absolute left-5 top-9 text-2xl">
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </Link>
        </div>
      )}
      <div style={header}>
        <span className="text-4xl flex items-center">{event?.slogan}</span>
      </div>
      <div>
        <div
          className="text-2xl flex items-center justify-center p-4"
          id="specific-id"
        >
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
