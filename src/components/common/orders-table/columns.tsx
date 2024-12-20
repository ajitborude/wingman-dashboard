import { Button } from '@/components/ui/button';
import { Order } from '@/lib/data/orders-data';
import { ColumnDef } from '@tanstack/react-table';
import { format, intervalToDuration } from 'date-fns';
import { ArrowUpDown } from 'lucide-react';
import ChatDialog from '../chat-dialog';

export const columns: ColumnDef<Order>[] = [
  {
    accessorKey: 'product_name',
    header: 'Product',
    cell: ({ row }) => {
      console.log(row);
      const image = row.original.product_image;
      return (
        <div className="flex flex-row items-center justify-start">
          <div className="mr-2 w-9 h-9">
            <img src={image} alt="product_image" className="rounded-md" />
          </div>
          <span className="truncate">{row.getValue('product_name')}</span>
        </div>
      );
    },
  },
  {
    accessorKey: 'date',
    header: ({ column }) => {
      return (
        <div className="flex flex-row items-center justify-center gap-x-2">
          <span>Date</span>
          <Button variant="ghost" size="icon" className="p-1" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
            <ArrowUpDown className="w-4 h-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row }) => {
      const formatted = format(parseInt(row.getValue('date')) * 1000, 'dd-MM-yyyy');
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: 'time_spent',
    header: () => <div className="text-center whitespace-nowrap">Time Spent</div>,
    cell: ({ row }) => {
      const formatted = intervalToDuration({ start: 0, end: parseInt(row.getValue('time_spent')) * 1000 });
      return <div className="text-center whitespace-nowrap">{`${formatted.hours || 0}h ${formatted.minutes}m`}</div>;
    },
  },
  {
    accessorKey: 'order_value',
    header: () => <div className="text-center whitespace-nowrap">Order Value</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('order_value'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: 'commission',
    header: () => <div className="text-center">Commission</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue('commission'));
      const formatted = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(amount);
      return <div className="text-center">{formatted}</div>;
    },
  },
  {
    accessorKey: 'actions',
    header: '',
    cell: ({ row }) => {
      return (
        <div className="flex items-center justify-center">
          <ChatDialog orderData={row.original} />
        </div>
      );
    },
  },
];
