import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  return (
    <>
      <div className="flex justify-between items-center p-10">
        <h1 className="text-4xl">Finland Events</h1>
        <FontAwesomeIcon icon={faHeart} size="xl" color="#003a7f" />
      </div>
    </>
  );
}
