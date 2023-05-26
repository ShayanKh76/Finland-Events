import { Conferences } from "./events.graphql";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendar } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/router";
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
          <Image
            src={image}
            alt="photo"
            width={184}
            height={150}
            className="w-full"
          />
        </div>
        <div style={{ minHeight: "90px" }} className="py-4 px-2 flex">
          <div className=" h-full mr-5">
            <div className="my-1 text-blue-700 uppercase text-sm">{month}</div>
            <div className="font-bold">{day}</div>
          </div>
          <div className=" h-full text-left">
            <div className="cardHeader"> {conference.name}</div>
            <div className="cardBody"> {conference.slogan}</div>
          </div>
          {/* <div className="m-2">
            <FontAwesomeIcon icon={faUser} className="mx-2" />
            {conference.name}
          </div>
          <div className="m-2">
            <FontAwesomeIcon icon={faCalendar} className="mx-2" />
            {conference.startDate.replaceAll("-", "/")}
          </div> */}
        </div>
      </div>
    </button>
  );
}
