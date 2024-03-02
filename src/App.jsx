import { useEffect, useState } from "react";
import { Sidebar, SidebarCollapse } from "./layouts/Sidebar";
import { Link, Outlet, useLocation } from "react-router-dom";
import { setSidebarOpen } from "./app/features/layoutSlice";
import { useDispatch } from "react-redux";

const sidebarList = ["jsonplaceholder", "omdbapi", "newsapi", "fakestoreapi"];

const App = () => {
  const dispatch = useDispatch();
  const [sidebarActive, setSidebarActive] = useState(null);
  const location = useLocation();
  const path = location.pathname.split("/");

  useEffect(() => {
    setSidebarActive(path[1]);
  }, [path]);

  const onSidebarClick = (sl) => {
    setSidebarActive(sl);
    dispatch(setSidebarOpen(false));
  };

  const sidebarContent = sidebarList.map((sl) => (
    <Link
      to={sl}
      key={sl}
      onClick={() => onSidebarClick(sl)}
      className={`rounded p-2 leading-none block bg-gray-50 hover:bg-indigo-200 transition-all duration-200 ${
        sidebarActive === sl ? "bg-indigo-600 text-white" : ""
      }`}
    >
      {sl}
    </Link>
  ));

  return (
    <div className="grid grid-cols-4 items-start">
      <SidebarCollapse>{sidebarContent}</SidebarCollapse>
      <Sidebar>{sidebarContent}</Sidebar>
      <main className="col-span-4 p-0 sm:p-2 sm:col-span-3">
        <section className="min-h-[calc(100vh-12rem)] sm:border rounded p-1">
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default App;
