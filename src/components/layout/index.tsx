import { Outlet } from "react-router-dom";
import { Header } from "../header";
import { Footer } from "../footer";

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
