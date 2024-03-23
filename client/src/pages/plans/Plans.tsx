import usePlans from "../../hooks/usePlans";
import PlanCard from "./components/PlanCard";

function Plans() {
  const { loading, data, error } = usePlans();

  console.log("Plans is rendered");

  if (loading) return <div>Loading...</div>;
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
                downloads={plan.canDownload}
                southPark={plan.canWatchSouth}
              />
            ))}
        </div>
        <button className="bg-red-500 py-3 text-white rounded-md w-full mt-4 hover:bg-red-700 cursor-pointer duration-300">
          Purchase
        </button>
      </div>
    </div>
  );
}

export default Plans;
