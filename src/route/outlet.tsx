import { Outlet } from "react-router-dom";

export function Layout() {
  return (
    <div className="flex flex-col">
      <main className="flex-grow">
        <Outlet />
      </main>
    </div>
  );
}
