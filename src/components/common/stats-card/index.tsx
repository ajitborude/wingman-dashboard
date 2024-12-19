import { CardData } from '@/lib/data/stats-data';
import { IoTrendingDown, IoTrendingUp } from 'react-icons/io5';
import { Fragment } from 'react/jsx-runtime';

export default function StatsCard({ title, value, delta, deltaType, icon }: CardData) {
  const Icon = icon;
  return (
    <Fragment>
      <div className="relative flex flex-col p-4 border rounded-lg shadow-sm bg-background gap-y-3">
        <div className="flex flex-row items-center justify-start w-full">
          <Icon className="!w-3 !h-3 text-accent-foreground mr-1" />
          <span className="text-xs font-medium uppercase text-accent-foreground">{title}</span>
        </div>
        <span className="text-3xl font-semibold">{value}</span>
        {deltaType === 'increase' && (
          <div className="flex flex-row items-center justify-start w-full gap-x-1">
            <IoTrendingUp className="!w-6 !h-6 text-green-500" />
            <span className="font-semibold text-green-500 uppercase ">{delta}</span>
            <span className="text-accent-foreground">{deltaType}</span>
          </div>
        )}
        {deltaType === 'decrease' && (
          <div className="flex flex-row items-center justify-start w-full gap-x-1">
            <IoTrendingDown className="!w-6 !h-6 text-red-500" />
            <span className="font-medium text-red-500 uppercase ">{delta}</span>
            <span className=" text-accent-foreground">{deltaType}</span>
          </div>
        )}
      </div>
    </Fragment>
  );
}
