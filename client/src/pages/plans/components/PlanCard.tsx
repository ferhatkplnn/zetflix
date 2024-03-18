import PlanCardItem from "./PlanCardItem";

type PlanCardProps = {
  type: string;
  price: string;
  downloads: boolean;
  southPark: boolean;
};

function PlanCard({
  type,
  price,
  downloads = true,
  southPark = true,
}: PlanCardProps) {
  return (
    <div className="border rounded p-3 h-[350px] w-full pointer mr-3">
      <div className="rounded bg-gradient-to-r from-cyan-500 to-blue-500 w-full p-3 text-white font-bold">
        <h3 className="text-2xl">{type}</h3>
        <p className="font-light">{price}</p>
      </div>

      <PlanCardItem
        condition={true}
        title="Monthly Price"
        description={price}
      />
      <PlanCardItem
        condition={downloads}
        title="Downloads"
        description="Included"
      />
      <PlanCardItem
        condition={southPark}
        title="South Park"
        description="Included"
      />
    </div>
  );
}

export default PlanCard;
