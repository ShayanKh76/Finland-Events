"use client";
import Image from "next/image";
import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
  faArrowLeft,
  faMicrophoneSlash,
} from "@fortawesome/free-solid-svg-icons";
import { GET_CONFERENCE } from "./EventDetails";
import {
  Conferences,
  favouritesEventVar,
} from "../../components/Events/Events.graphql";
import CircleConnector from "../../components/CircleConnector";

export default function EventDetails() {
  const router = useRouter();
  const eventId = router.query.eventId;
  const { loading, error, data } = useQuery(GET_CONFERENCE, {
    variables: { conferenceId: eventId },
  });
  const [event, setEvent] = useState<Conferences>();
  const [showAllSpeakers, setShowAllSpeakers] = useState(false);
  useEffect(() => {
    if (data?.conference!) {
      setEvent(data.conference);
    }
  }, [data]);
  const navigateToAnotherPage = () => {
    router.push("/", undefined, { shallow: true });
  };
  const handleFavourites = () => {
    const currentFavouriteEvent = favouritesEventVar();
    favouritesEventVar(
      event?.isInFavourite
        ? currentFavouriteEvent.filter(
            (conferenceId: string) => conferenceId !== event.id
          )
        : event && [...currentFavouriteEvent, event.id]
    );
  };

  return (
    <div>
      {event?.isInFavourite}
      {event ? (
        <div className="eventDetails">
          <div className="flex justify-center">
            <div className="rounded-xl bg-black overflow-hidden eventDetailsHeader">
              <button
                onClick={navigateToAnotherPage}
                className="flex items-center absolute top-40 text-base z-10 text-white backBtn"
              >
                <FontAwesomeIcon
                  icon={faArrowLeft}
                  color="white"
                  className="mr-1"
                ></FontAwesomeIcon>
                Back
              </button>

              <Image
                src={`/assets/images/${event?.id}.jpg`}
                alt={event?.id || "photo"}
                width={1200}
                height={800}
                className="rounded-xl opacity-30 headerPhoto"
              />

              <div className=" absolute text-white text-4xl eventDetailsTitle">
                <div className="p-4">{event?.name}</div>
                <div className="p-4">{event?.slogan}</div>
              </div>
            </div>
          </div>
          <div className="flex justify-center eventDetailsBody">
            <div className=" grid grid-cols-6 gap-10 px-10 my-12 mainBody">
              <div className=" col-span-4 speakers">
                <div className="mb-6">Speakers</div>
                {event?.speakers.length! > 0 ? (
                  <div>
                    {event?.speakers
                      .slice(0, showAllSpeakers ? undefined : 4)
                      .map((speaker, index) => (
                        <div key={index} className="grid grid-cols-6">
                          <div
                            className={`col-span-2 flex justify-center ${
                              index % 2 === 0 ? "order-first" : "order-last"
                            }`}
                          >
                            <div className="text-center flex justify-center items-center">
                              <div>
                                {" "}
                                {event && (
                                  <Image
                                    src={speaker.image.url}
                                    width={120}
                                    height={120}
                                    alt={speaker.image.url}
                                    className=" rounded-full"
                                  />
                                )}
                                <span className=" text-xs ">
                                  {" "}
                                  {speaker.name}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className=" col-span-2">
                            <CircleConnector />
                          </div>
                          <div
                            className={`speakerAbout col-span-2 flex justify-${
                              speaker.aboutShort != "" ? "start" : "center"
                            }  items-center ${
                              index % 2 === 0 ? "order-last" : "order-first"
                            }`}
                          >
                            <div className="truncate-6-lines">
                              {speaker.aboutShort !== ""
                                ? speaker.aboutShort
                                : "---"}
                            </div>
                          </div>
                        </div>
                      ))}
                    <div className="flex justify-center mt-6 ">
                      <button
                        className="border rounded p-2"
                        onClick={() => setShowAllSpeakers(!showAllSpeakers)}
                      >
                        Show {showAllSpeakers ? "less" : "more"}
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="flex justify-center mt-10">
                    <div>
                      <div className="flex justify-center mb-3">
                        <FontAwesomeIcon icon={faMicrophoneSlash} size="2xl" />
                      </div>
                      <div>No Speakers</div>
                    </div>
                  </div>
                )}
              </div>
              <div className=" col-span-2 details">
                <div>Event Location</div>
                <div>
                  <iframe
                    width="100%"
                    height="200"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=24.029846191406254%2C59.85309220083689%2C25.842590332031254%2C60.47752543910902&amp;layer=mapnik"
                    className=" rounded-lg drop-shadow-md my-4"
                  ></iframe>

                  {event?.locations.length > 0 && (
                    <div>
                      {" "}
                      <div className="cardHeader mb-2">
                        {event?.locations[0].about}{" "}
                      </div>
                      <div className="cardBody mb-4">
                        {event?.locations[0].country.name +
                          ", " +
                          event?.locations[0].city +
                          ", " +
                          event?.locations[0].address}
                      </div>
                    </div>
                  )}

                  {event?.keynotes.length! > 0 && (
                    <div>
                      <div className="my-2">Tags</div>
                      <div>
                        {event?.keynotes.map((tag, index) => (
                          <span key={index} className="flex flex-wrap my-1">
                            {tag.keywords.map((item, tagIndex) => (
                              <span className="chipTags" key={tagIndex}>
                                {item}
                              </span>
                            ))}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="mt-6">
                    Share With Friends
                    <div>
                      <FontAwesomeIcon
                        size="xl"
                        icon={faFacebook}
                        color="#4267B2"
                        className="mx-2 mt-4"
                      />
                      <FontAwesomeIcon
                        size="xl"
                        icon={faTwitter}
                        color="#1DA1F2"
                        className="mx-2"
                      />
                      <FontAwesomeIcon
                        size="xl"
                        icon={faLinkedin}
                        color="#0077B5"
                        className="mx-2"
                      />
                    </div>
                  </div>
                  <div className="flex justify-center mt-20">
                    <button
                      className={`px-4 py-3 rounded-lg ${
                        event.isInFavourite
                          ? "removeFromFavourite"
                          : "addToFavourite"
                      }`}
                      onClick={handleFavourites}
                    >
                      {event.isInFavourite ? "Remove From " : "Add To "}
                      Favourites
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2  border-blue-900"></div>
        </div>
      )}
    </div>
  );
}
