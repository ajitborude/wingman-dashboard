import { OrdersTable } from '@/components/common/orders-table';
import { columns } from '@/components/common/orders-table/columns';
import { orders } from '@/lib/data/orders-data';
import { Fragment } from 'react/jsx-runtime';

export default function SalesPage() {
  return (
    <Fragment>
      <div className="flex flex-col items-center justify-start w-full p-4 overflow-auto border bg-background rounded-xl scrollbar">
        <h2 className="w-full mb-4 text-xl font-semibold">Sales Orders</h2>
        <OrdersTable columns={columns} data={orders} />
      </div>
    </Fragment>
  );
}
