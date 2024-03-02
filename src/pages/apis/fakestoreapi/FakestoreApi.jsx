import NavMenus from "../../../layouts/NavMenus";
import { H1 } from "../../../components/Tags";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../../../components/Components";
const menus = ["film"];

const Fakestoreapi = () => {
  return (
    <div>
      <H1>Fakestoreapi</H1>
      <NavMenus menus={menus} />
      <Breadcrumb />
      <div className="my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Fakestoreapi;
