import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { favouritesEventVar } from "../Events/Events.graphql";
import { useReactiveVar } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Header() {
  const favourites = useReactiveVar(favouritesEventVar);
  const [counter, setCounter] = useState<number | undefined>();
  useEffect(() => {
    setCounter(favourites.length > 0 ? favourites.length! : undefined);
  }, [favourites]);
  return (
    <>
      <div className="flex justify-between items-center p-6 fixed top-0 z-50 w-full bg-white shadow-md">
        <h1 className="text-4xl">Finland Events</h1>
        <div>
          {counter && (
            <span className=" absolute top-5 right-2.5 text-white bg-red-500 rounded-full w-5 h-5 text-center">
              {counter}
            </span>
          )}

          <FontAwesomeIcon icon={faHeart} size="xl" color="#003a7f" />
        </div>
      </div>
    </>
  );
}
