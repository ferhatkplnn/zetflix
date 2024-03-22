import { Outlet } from "react-router-dom";
import useAuth from "./hooks/useAuth";
import { useEffect } from "react";

function App() {
  const { fetchUser } = useAuth();

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
