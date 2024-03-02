import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../app/features/layoutSlice";
// import { HiMenu, HiX } from "react-icons/hi";
import { TbLayoutSidebarLeftExpand, TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import Logo from "./Logo";

const Header = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.layout);

  return (
    <header className="z-40 backdrop-blur border-b flex justify-between items-center px-3 lg:px-16 h-16 sticky top-0">
      <nav className="flex items-center gap-2">
        <button
          onClick={() => dispatch(setSidebarOpen(!isSidebarOpen))}
          className={`transition-all duration-300 ${isSidebarOpen && "rotate-180"} block sm:hidden`}
        >
          {isSidebarOpen ? (
            <TbLayoutSidebarLeftCollapse className="text-2xl" />
          ) : (
            <TbLayoutSidebarLeftExpand className="text-2xl" />
          )}
        </button>
        <Logo />
      </nav>
      <div className="flex gap-2 items-center">
        <a href="https://github.com/mkhotamirais/public-apis" target="_black" rel="noopener noreferer">
          <BsGithub className="text-xl cursor-pointer hover:opacity-60" />
        </a>
        {/* <div className="block sm:hidden">
          {isSidebarOpen ? <HiX className="text-2xl" /> : <HiMenu className="text-2xl" />}
        </div> */}
      </div>
    </header>
  );
};

export default Header;
