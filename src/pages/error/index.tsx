import { Button } from '@/components/ui/button';
import { Link, useRouteError } from 'react-router';

function ErrorPage() {
  const error: any = useRouteError();
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen bg-white rounded-md ">
      <span className="text-4xl font-bold capitalize">Oops, Something&apos;s gone wrong !</span>
      {error && error.message && <span className="mt-10 font-medium capitalize">{error.message}</span>}
      <Button className="" asChild>
        <Link to="/">GO HOME</Link>
      </Button>
    </div>
  );
}

export default ErrorPage;
