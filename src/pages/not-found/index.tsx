import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <span className="mb-4 text-xl font-medium">404 | Page Not Found</span>
      <Button className="" asChild>
        <Link to="/">GO HOME</Link>
      </Button>
    </div>
  );
}
