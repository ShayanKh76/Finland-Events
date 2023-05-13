import { Conferences } from "../Events";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
export default function Event({ confrence }: { confrence: Conferences }) {
  const header = {
    borderBottom: "1px solid #dadada",
    height: "120px",
  };

  return (
    <Link
      href={{ pathname: "/event-details", query: { eventId: confrence.id } }}
    >
      <div className="border rounded-md">
        <div className="flex justify-center p-6" style={header}>
          <Image
            src={confrence.organizer.image.url}
            alt={confrence.organizer.name}
            width={150}
            height={150}
          />
        </div>
        <div className="m-2">
          <FontAwesomeIcon icon={faUser} className="mx-2" />
          {confrence.name}
        </div>
        <div className="m-2">
          <FontAwesomeIcon icon={faCalendar} className="mx-2" />
          {confrence.startDate.replaceAll("-", "/") +
            "-" +
            confrence.endDate.replaceAll("-", "/")}
        </div>
      </div>
    </Link>
  );
}
