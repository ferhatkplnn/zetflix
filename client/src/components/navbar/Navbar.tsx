import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import useAuth from "../../hooks/useAuth";

const TABS = [
  "Home",
  "Series",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

function NavBar() {
  const { user, isLoading } = useSelector(
    (state: RootState) => state.user.value
  );

  const { logout } = useAuth();

  const [showBackground, setShowBackground] = useState<boolean>(false);

  useEffect(() => {
    const updateShowBackground = () => {
      if (window.scrollY > 700) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", updateShowBackground);
    return () => window.removeEventListener("scroll", updateShowBackground);
  }, []);

  return (
    <nav id="navbar" className="w-full fixed z-40">
      <div
        className={`px-16 py-6 flex items-center ${
          showBackground ? "bg-black/80" : ""
        } duration-300`}
      >
        <Logo />
        <div className="flex gap-7 ml-8 mr-auto">
          {TABS.map((tab, index) => (
            <NavItem key={index} text={tab} />
          ))}
        </div>
        <div>
          {user && isLoading && (
            <div className="text-white hover:text-gray-300 cursor-pointer">
              <p onClick={logout}>Logout</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
