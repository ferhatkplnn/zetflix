import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../app/store";

function PrivateRoutes() {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  if (isLoading) return <div>loading...</div>;

  return user ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
