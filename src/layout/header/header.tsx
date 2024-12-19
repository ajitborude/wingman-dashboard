import { Button } from '@/components/ui/button';
import { IoChatbubbleEllipsesSharp, IoPieChartSharp, IoPricetag } from 'react-icons/io5';
import { NavLink } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

export default function Header() {
  return (
    <Fragment>
      <div className="min-h-[var(--header-height)] h-[var(--header-height)] w-full border-b bg-background flex flex-row items-center">
        <div className="flex flex-row items-center justify-start w-full px-2 overflow-x-auto gap-x-2 scrollbar">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'bg-muted rounded-full' : 'text-muted-foreground rounded-full')}>
            <Button className="px-4 py-1 rounded-full" variant="ghost">
              <IoPieChartSharp /> Summary
            </Button>
          </NavLink>
          <NavLink to="/sales" className={({ isActive }) => (isActive ? 'bg-muted rounded-full' : 'text-muted-foreground rounded-full')}>
            <Button className="px-4 py-1 rounded-full" variant="ghost">
              <IoPricetag /> Sales
            </Button>
          </NavLink>
          <NavLink to="/chats" className={({ isActive }) => (isActive ? 'bg-muted rounded-full' : 'text-muted-foreground rounded-full')}>
            <Button className="px-4 py-1 rounded-full " variant="ghost">
              <IoChatbubbleEllipsesSharp /> Chats
            </Button>
          </NavLink>
        </div>
      </div>
    </Fragment>
  );
}
