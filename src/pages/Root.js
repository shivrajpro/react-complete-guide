import { Outlet } from "react-router-dom";

import EventsNavigation from "../components/EventsNavigation";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main>
        <EventsNavigation />
        <Outlet />
      </main>
    </>
  );
}

export default RootLayout;
