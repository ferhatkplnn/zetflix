import { useEffect } from "react";
import useSubscription from "../../hooks/useSubscription";

function PlansManage() {
  const [{ data, error, loading }, fetchSubscription] = useSubscription();

  useEffect(() => {
    fetchSubscription();
  }, []);
  console.log({ data, error, loading });
  return <div>Manage</div>;
}

export default PlansManage;
