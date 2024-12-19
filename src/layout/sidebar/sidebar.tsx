import { Button } from '@/components/ui/button';
import { GoHomeFill } from 'react-icons/go';
import { HiUserGroup } from 'react-icons/hi';
import { PiChatCircleFill, PiGearSixFill } from 'react-icons/pi';
import { NavLink } from 'react-router';
import { Fragment } from 'react/jsx-runtime';
import logo from '../../assets/logo.svg';

export default function Sidebar() {
  return (
    <Fragment>
      <div className="w-[var(--sidebar-width)] min-w-[var(--sidebar-width)] h-dvh bg-primary flex flex-col items-center  justify-between px-1">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="border-b min-h-[var(--header-height)] h-[var(--header-height)] w-full flex items-center justify-center">
            <img src={logo} alt="logo" />
          </div>
          <div className="flex flex-col items-center justify-start p-2 gap-y-3">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-background rounded-lg text-primary' : 'bg-primary rounded-lg text-muted')}>
              <Button className="rounded-lg" variant="ghost" size="icon">
                <GoHomeFill className="!w-5 !h-5 " />
              </Button>
            </NavLink>
            <NavLink to="/chats" className={({ isActive }) => (isActive ? 'bg-background rounded-lg text-primary' : 'bg-primary rounded-lg text-muted')}>
              <Button className="rounded-lg" variant="ghost" size="icon">
                <PiChatCircleFill className="!w-5 !h-5 " />
              </Button>
            </NavLink>
            <NavLink to="/sales" className={({ isActive }) => (isActive ? 'bg-background rounded-lg text-primary' : 'bg-primary rounded-lg text-muted')}>
              <Button className="rounded-lg bg-primary" variant="ghost" size="icon">
                <HiUserGroup className="!w-5 !h-5" />
              </Button>
            </NavLink>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start p-2 gap-y-3">
          <Button className="rounded-lg bg-primary" variant="ghost" size="icon">
            <PiGearSixFill className="!w-5 !h-5 text-muted" />
          </Button>
        </div>
      </div>
    </Fragment>
  );
}
