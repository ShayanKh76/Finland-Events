import { Conferences } from "../../Events.graphql";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import { favouritesEventVar } from "../../Events.graphql";
import { MouseEvent } from "react";

export default function Event({
  conference,
  image,
}: {
  conference: Conferences;
  image: string;
}) {
  const router = useRouter();
  const navigateToAnotherPage = () => {
    router.push(`/event-details?eventId=${conference.id}`);
  };
  const date = new Date(conference.startDate);
  const month = date.toLocaleDateString(undefined, { month: "short" });
  const day = date.toLocaleDateString(undefined, { day: "numeric" });
  const handleFavourites = (e: MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const currentFavouriteEvent = favouritesEventVar();
    favouritesEventVar(
      conference.isInFavourite
        ? currentFavouriteEvent.filter(
            (conferenceId: string) => conferenceId !== conference.id
          )
        : [...currentFavouriteEvent, conference.id]
    );
  };
  return (
    <button
      onClick={navigateToAnotherPage}
      className="w-full rounded-md bg-white drop-shadow-md overflow-hidden"
    >
      <div className="event">
        <div className="flex justify-center cardTitle">
          <button
            onClick={(e) => handleFavourites(e)}
            className=" absolute right-3 top-3 bg-white p-1 rounded-full h-7 w-7"
          >
            {conference.isInFavourite ? (
              <FontAwesomeIcon icon={faX} color="gray" />
            ) : (
              <FontAwesomeIcon icon={faHeart} color="red" />
            )}
          </button>
          <Image
            src={image}
            alt="photo"
            width={184}
            height={150}
            className="w-full"
          />
        </div>
        <div className="py-4 px-2 flex cardText">
          <div className=" h-full mr-5">
            <div className="my-1 text-blue-700 uppercase text-sm">{month}</div>
            <div className="font-bold">{day}</div>
          </div>
          <div className=" h-full text-left">
            <div className="eventName"> {conference.name}</div>
            <div className="eventBody truncate-2-lines">
              {" "}
              {conference.slogan}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
