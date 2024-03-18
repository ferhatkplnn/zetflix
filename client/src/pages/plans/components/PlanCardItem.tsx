import { AiOutlineClose } from "react-icons/ai";
import { FaCheck } from "react-icons/fa";

type PlanCardItemProps = {
  title: string;
  description: string;
  condition: boolean;
};

const PlanCardItem = ({ title, description, condition }: PlanCardItemProps) => {
  return (
    <div className="border-b py-4 flex text-base items-center">
      <div
        className={`w-6 h-6 rounded-full text-sm ${
          condition ? "bg-cyan-500" : "bg-slate-500"
        } flex items-center justify-center`}
      >
        {condition ? (
          <FaCheck className="text-white" />
        ) : (
          <AiOutlineClose className="text-white font-bold" />
        )}
      </div>

      <div className="ml-3">
        <div className="text-gray-600">{title}</div>
        <div className="font-semibold">{description}</div>
      </div>
    </div>
  );
};

export default PlanCardItem;
