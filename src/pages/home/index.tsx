import ConsultationCard from '@/components/common/consultation-card';
import ForecastsCard from '@/components/common/forecasts-card';
import { OrdersTable } from '@/components/common/orders-table';
import { columns } from '@/components/common/orders-table/columns';
import PastRecordsCard from '@/components/common/past-records-card';
import StatsCard from '@/components/common/stats-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { orders } from '@/lib/data/orders-data';
import { CardData, STATS_DATA } from '@/lib/data/stats-data';
import _ from 'lodash';
import { Fragment } from 'react/jsx-runtime';

export default function HomePage() {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-start w-full p-4 overflow-auto border bg-background rounded-xl scrollbar">
        <div className="flex flex-row items-center justify-between w-full my-3">
          <h2 className="text-2xl font-semibold">At a glance</h2>
          <Select defaultValue={'7'} onValueChange={_.noop}>
            <SelectTrigger className="w-auto">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">7 Days</SelectItem>
              <SelectItem value="15">15 Days</SelectItem>
              <SelectItem value="30">30 Days</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid w-full grid-cols-1 gap-4 my-3 sm:grid-cols-2 lg:grid-cols-3">
          {STATS_DATA.map((card: CardData) => (
            <StatsCard title={card.title} value={card.value} delta={card.delta} deltaType={card.deltaType} icon={card.icon} />
          ))}
        </div>
        <div className="flex flex-col items-start justify-start w-full my-3">
          <h2 className="mb-4 text-2xl font-semibold">Insights</h2>
          <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-5">
            <div className="flex flex-col justify-between border shadow-sm md:col-span-3 rounded-2xl">
              <ConsultationCard />
            </div>
            <div className="flex flex-col justify-between h-full border shadow-sm md:col-span-1 rounded-2xl">
              <PastRecordsCard />
            </div>
            <div
              className="relative flex flex-col justify-between p-4 border shadow-sm md:col-span-1 rounded-2xl"
              style={{ background: 'linear-gradient(180deg, #15B79F 0%, #0E9382 100%)' }}
            >
              <ForecastsCard />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start justify-start w-full my-3">
          <h2 className="mb-4 text-2xl font-semibold">Orders</h2>
          <OrdersTable columns={columns} data={orders} />
        </div>
      </div>
    </Fragment>
  );
}
