import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="text-center p-10 text-white footer">
        Made with
        <FontAwesomeIcon
          icon={faHeart}
          size="xl"
          color="red"
          className="ml-1"
        />
      </div>
    </>
  );
}
