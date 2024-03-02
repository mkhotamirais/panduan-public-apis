import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Next, Prev } from "../components/Components";

const NavMenus = ({ menus }) => {
  const location = useLocation();
  const [active, setActive] = useState(null);

  const path = location.pathname.split("/");

  useEffect(() => {
    setActive(JSON.parse(localStorage.getItem("activeTab")));
    setActive(path[2]);
  }, [path]);

  return (
    <nav className="rounded gap-1 flex p-1 pb-2 sm:mt-0 overflow-x-scroll">
      <Prev />
      <div className="flex items-center gap-1 flex-grow mx-3">
        {menus.map((m) => (
          <Link
            to={m}
            onClick={() => setActive(m)}
            className={`rounded p-2 px-4 leading-none hover:bg-indigo-200 bg-gray-50 ${
              active === m ? "bg-indigo-600 text-white" : ""
            }`}
            key={m}
          >
            {m}
          </Link>
        ))}
      </div>
      <Next />
    </nav>
  );
};
NavMenus.propTypes;

export default NavMenus;
