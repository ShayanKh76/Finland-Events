import { Conferences } from "./events.graphql";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faX } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
import { AppStateContext } from "@/pages/AppState";
import { useContext } from "react";
export default function Event({
  conference,
  image,
}: {
  conference: Conferences;
  image: string;
}) {
  const router = useRouter();
  const { addToFavourites, removeFromFavourites, Favourites } =
    useContext(AppStateContext);
  const navigateToAnotherPage = (event: any) => {
    router.push(`/event-details?eventId=${conference.id}`);
  };
  const date = new Date(conference.startDate);
  const month = date.toLocaleDateString(undefined, { month: "short" });
  const day = date.toLocaleDateString(undefined, { day: "numeric" });
  const handleFavourites = (e: any) => {
    e.stopPropagation();
    if (Favourites.find((item: string) => item == conference.id)) {
      removeFromFavourites(conference.id);
    } else {
      addToFavourites(conference.id);
    }
  };
  return (
    <button
      onClick={navigateToAnotherPage}
      className="w-full rounded-md bg-white drop-shadow-md overflow-hidden"
    >
      <div>
        <div
          className="flex justify-center"
          style={{ borderBottom: "1px solid #dadada", height: "120px" }}
        >
          <button
            onClick={(e) => handleFavourites(e)}
            className=" absolute right-3 top-3 bg-white p-1 rounded-full h-7 w-7"
          >
            {Favourites.find((item: string) => item == conference.id) ? (
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
        <div style={{ minHeight: "100px" }} className="py-4 px-2 flex">
          <div className=" h-full mr-5">
            <div className="my-1 text-blue-700 uppercase text-sm">{month}</div>
            <div className="font-bold">{day}</div>
          </div>
          <div className=" h-full text-left">
            <div className="cardHeader"> {conference.name}</div>
            <div className="cardBody truncate-2-lines">
              {" "}
              {conference.slogan}
            </div>
          </div>
        </div>
      </div>
    </button>
  );
}
