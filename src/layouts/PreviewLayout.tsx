import { Link, Outlet } from "react-router-dom";

export default function PreviewLayout() {
  return (
    <div className="relative flex h-full flex-col gap-14">
      <div className="bg-primary absolute left-0 right-0 top-0 z-0 h-80 rounded-b-md md:rounded-b-xl lg:rounded-b-3xl"></div>

      <nav className="z-20 flex items-center justify-between rounded-b-lg bg-gray-50 p-3 md:m-4 md:rounded-lg">
        <Link
          to="/"
          className="border-primary text-primary hover:bg-primary rounded-md border bg-transparent px-4 py-2 font-medium transition-colors hover:text-gray-100"
        >
          Back to Editor
        </Link>
        <button
          type="button"
          className="border-primary bg-primary hover:bg-primary/90 rounded-md border px-4 py-2 font-medium text-gray-50 transition-colors hover:text-gray-100"
        >
          Share Link
        </button>
      </nav>
      <div className="z-20 mx-2 mt-7 flex items-center justify-center md:mx-0">
        <Outlet />
      </div>
    </div>
  );
}
