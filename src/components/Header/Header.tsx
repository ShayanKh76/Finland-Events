import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { AppStateContext } from "@/pages/AppState";
import { useContext } from "react";

export default function Header() {
  const { Favourites } = useContext(AppStateContext);
  return (
    <>
      <div className="flex justify-between items-center p-10">
        <h1 className="text-4xl">Finland Events</h1>
        <div>
          {Favourites.length > 0 && (
            <span className=" absolute top-10 right-6 text-white bg-red-500 rounded-full w-5 h-5 text-center">
              {Favourites.length}
            </span>
          )}

          <FontAwesomeIcon icon={faHeart} size="xl" color="#003a7f" />
        </div>
      </div>
    </>
  );
}
