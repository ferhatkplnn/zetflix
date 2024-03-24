import PlanCardItem from "./PlanCardItem";

type PlanCardProps = {
  type: string;
  price: string | number;
  downloads: boolean;
  southPark: boolean;
  selectedSession: string | null;
  setSelectedSession: React.Dispatch<React.SetStateAction<string | null>>;
  id: string;
};

function PlanCard({
  type,
  price,
  downloads,
  southPark,
  selectedSession,
  setSelectedSession,
  id,
}: PlanCardProps) {
  return (
    <div
      onClick={() => setSelectedSession(id)}
      className={`border rounded p-3 h-[350px] w-full pointer mr-3 cursor-pointer ${
        selectedSession === id ? "border-3 border-black" : ""
      }`}
    >
      <div className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-3 text-white font-bold">
        <h3 className="text-2xl">{type}</h3>
        <p className="font-light">${price}</p>
      </div>

      <PlanCardItem
        condition={true}
        title="Monthly Price"
        description={price}
        type="price"
      />
      <PlanCardItem
        condition={downloads}
        title="Downloads"
        description="Included"
        type="feature"
      />
      <PlanCardItem
        condition={southPark}
        title="South Park"
        description="Included"
        type="feature"
      />
    </div>
  );
}

export default PlanCard;
