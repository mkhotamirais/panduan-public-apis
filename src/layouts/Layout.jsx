import { Outlet } from "react-router-dom";
import Header from "./Header";
import FooterCom from "./FooterCom";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="min-h-screen px-3 lg:px-16">
        <Outlet />
      </main>
      <FooterCom />
    </>
  );
};

export default Layout;
