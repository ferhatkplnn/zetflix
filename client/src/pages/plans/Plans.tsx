import { useEffect, useState } from "react";
import usePlans from "../../hooks/usePlans";
import PlanCard from "./components/PlanCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useSubscription from "../../hooks/useSubscription";
import { Navigate } from "react-router-dom";

const createSession = async (email: string, priceId: string) => {
  const response = await axios.post("http://localhost:8080/sub/session", {
    email,
    priceId,
  });

  const { url } = response.data;

  window.location.href = url;
};

function Plans() {
  const { loading, data, error } = usePlans();
  const [
    { data: subscription, loading: subscriptionLoading },
    fetchSubscription,
  ] = useSubscription();

  const [selectedSession, setSelectedSession] = useState<null | string>(null);
  const { user } = useSelector((state: RootState) => state.user.value);

  const handleClick = () => {
    if (user && selectedSession) {
      createSession(user?.email, selectedSession);
    }
  };

  useEffect(() => {
    fetchSubscription();
  }, []);

  if (loading || subscriptionLoading) return <div>Loading...</div>;

  if (subscription) {
    return <Navigate to="/plans/manage" />;
  }

  if (error) return <div>{error}</div>;

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          {data &&
            data.map((plan, index) => (
              <PlanCard
                key={index}
                type={plan.name}
                price={plan.price.amount}
                id={plan.price.id}
                downloads={plan.canDownload}
                southPark={plan.canWatchSouth}
                selectedSession={selectedSession}
                setSelectedSession={setSelectedSession}
              />
            ))}
        </div>
        <button
          className="bg-red-500 py-3 text-white rounded-md w-full mt-4 hover:bg-red-700 cursor-pointer duration-300 disabled:bg-gray-400 disabled:cursor-default"
          disabled={!selectedSession}
          onClick={handleClick}
        >
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Plans;
