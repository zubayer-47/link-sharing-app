import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";

const RootLayout = () => {
  return (
    <div className="flex h-full flex-col gap-1">
      <Nav />
      <div className="m-4 flex-auto rounded-lg">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
