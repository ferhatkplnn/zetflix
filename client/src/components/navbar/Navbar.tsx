import { useEffect, useState } from "react";
import Logo from "./Logo";
import NavItem from "./NavItem";

const TABS = [
  "Home",
  "Series",
  "Films",
  "New & Popular",
  "My List",
  "Browse by Languages",
];

function NavBar() {
  const [showBackground, setShowBackground] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 900) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    });
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-16 py-6 flex items-center ${
          showBackground ? "bg-black/80" : ""
        } duration-300`}
      >
        <Logo />
        <div className="flex gap-7 ml-8">
          {TABS.map((tab, index) => (
            <NavItem key={index} text={tab} />
          ))}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
