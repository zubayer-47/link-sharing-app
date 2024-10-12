import { CircleUserRound, Eye, LinkIcon } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.webp";

export const Nav = () => {
  return (
    <nav className="flex items-center justify-between rounded-b-lg bg-gray-50 p-3 md:m-4 md:rounded-lg">
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="logo" className="h-10 w-10" />
        <h1 className="hidden text-2xl font-bold md:block">devlinks</h1>
      </Link>
      <div className="flex items-center gap-1 md:gap-8">
        <NavLink
          to="/"
          className={({ isActive }) => {
            return `flex items-center gap-2 rounded-md px-4 py-2 font-medium text-gray-600 transition-colors ${isActive ? "bg-primary/10 text-primary" : "bg-transparent text-gray-600"}`;
          }}
        >
          <LinkIcon className="h-5 w-5" />
          <span className="hidden md:block">Links</span>
        </NavLink>
        <NavLink
          to="/profile"
          className={({ isActive }) => {
            return `flex items-center gap-2 rounded-md px-4 py-2 font-medium text-gray-600 transition-colors ${isActive ? "bg-primary/10 text-primary" : "bg-transparent text-gray-600"}`;
          }}
        >
          <CircleUserRound className="h-6 w-6" />
          <span className="hidden md:block">Profile Details</span>
        </NavLink>
      </div>

      <NavLink
        to="/preview"
        className="text-priborder-primary rounded-md border border-primary bg-transparent px-4 py-2 font-medium transition-colors hover:bg-primary hover:text-gray-100"
      >
        <span className="hidden md:block">Preview</span>
        <Eye className="block h-5 w-5 md:hidden" strokeWidth={2.5} />
      </NavLink>
    </nav>
  );
};
