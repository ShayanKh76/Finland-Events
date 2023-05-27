import Header from "../components/Header/Header";
import Events from "../components/Events/Events";
import { useQuery } from "@apollo/client";
import { GET_DATA } from "../components/Events/components/events.graphql";
import Footer from "../components/Footer/Footer";

export default function App() {
  const { loading, error, data } = useQuery(GET_DATA);

  return (
    <>
      {data ? (
        <div>
          <Events loading={loading} conferences={data?.conferences} />
        </div>
      ) : (
        <div className="fixed inset-0 flex items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2  border-blue-900"></div>
        </div>
      )}
    </>
  );
}
