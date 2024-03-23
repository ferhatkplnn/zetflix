import usePlans from "../../hooks/usePlans";
import PlanCard from "./components/PlanCard";

const PLANS = [
  { type: "Basic", price: "$5.99", downloads: true, southPark: false },
  { type: "Premium", price: "$10.99", downloads: true, southPark: true },
];

function Plans() {
  const { loading, data, error } = usePlans();

  console.log({ loading, data, error });

  return (
    <div className="flex items-center h-screen justify-center">
      <div className="w-[600px]">
        <h1 className="font-semibold text-3xl">
          Choose a plan that works for you
        </h1>
        <div className="flex mt-4">
          {PLANS.map((plan, index) => (
            <PlanCard
              key={index}
              type={plan.type}
              price={plan.price}
              downloads={plan.downloads}
              southPark={plan.southPark}
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
