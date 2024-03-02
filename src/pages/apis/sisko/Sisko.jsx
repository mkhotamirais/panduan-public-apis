import NavMenus from "../../../layouts/NavMenus";
import { H1 } from "../../../components/Tags";
import { Outlet } from "react-router-dom";
import { Breadcrumb } from "../../../components/Components";
const menus = ["product"];

const Newsapi = () => {
  return (
    <div>
      <H1>Sisko</H1>
      <NavMenus menus={menus} />
      <Breadcrumb />
      <div className="my-2">
        <Outlet />
      </div>
    </div>
  );
};

export default Newsapi;
