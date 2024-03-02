import { useDispatch, useSelector } from "react-redux";
import { setSidebarOpen } from "../app/features/layoutSlice";
import Logo from "./Logo";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { H1 } from "../components/Tags";

export const Sidebar = ({ children = "sidebar" }) => {
  return (
    <aside className="col-span-1 hidden sm:block sticky top-16 py-2">
      <H1 className={`border rounded`}>PublicApi List</H1>
      <div className="flex flex-col gap-1 mt-2">{children}</div>
    </aside>
  );
};
Sidebar.propTypes;

export const SidebarCollapse = ({ children = "sidebar collapse" }) => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSelector((state) => state.layout);

  return (
    <div
      onClick={() => dispatch(setSidebarOpen(false))}
      className={`fixed left-0 right-0 bottom-0 top-0 ${
        isSidebarOpen ? "z-50 opacity-100" : "opacity-0 -z-50"
      } transition-all duration-300 backdrop-blur backdrop-filter block sm:hidden`}
    >
      <aside
        onClick={(e) => e.stopPropagation()}
        className={`border bg-white h-full mt ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-56 transition-all duration-300 border-r rounded-tr-lg rounded-br-lg`}
      >
        <div className="flex p-3 items-center gap-3 border-b h-16">
          <button>
            <TbLayoutSidebarLeftCollapse className="text-2xl" onClick={() => dispatch(setSidebarOpen(false))} />
          </button>
          <Logo />
        </div>
        <div className="flex flex-col gap-1 p-2">{children}</div>
      </aside>
    </div>
  );
};
SidebarCollapse.propTypes;
