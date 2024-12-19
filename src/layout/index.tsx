import { Fragment } from 'react/jsx-runtime';
import Header from './header/header';
import Sidebar from './sidebar/sidebar';
import { Outlet } from 'react-router';

export default function Layout() {
  return (
    <Fragment>
      <div className="relative flex flex-row w-dvw h-dvh sm:w-screen sm:h-screen">
        <Sidebar />
        <div className="relative flex flex-col w-[calc(100%_-_var(--sidebar-width))] h-full">
          <Header />
          <div className="relative flex w-full p-2 overflow-hidden bg-background">
            <Outlet />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
