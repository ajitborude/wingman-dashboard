import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Order } from '@/lib/data/orders-data';
import { DialogDescription } from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { format } from 'date-fns';
import { ArrowUpDown } from 'lucide-react';

export default function ChatDialog({ orderData }: { orderData: Order }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="secondary" className="px-2 py-1">
          View Chat <ArrowUpDown className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-3xl max-h-[75%] overflow-auto scrollbar">
        <DialogHeader>
          <DialogTitle>{orderData.product_name}</DialogTitle>
          <DialogDescription>{format(parseInt(orderData.date) * 1000, 'dd-MM-yy')}</DialogDescription>
        </DialogHeader>
        <div className="relative flex flex-col p-4">
          {orderData.chats.map((chat: any, index: number) => {
            return (
              <div
                className={clsx([
                  'flex w-3/4 mb-2 flex-col',
                  {
                    'self-end': index % 2 === 0,
                    'self-start': index % 2 !== 0,
                  },
                ])}
              >
                <span
                  className={clsx([
                    'text-xs',
                    {
                      'self-end': index % 2 === 0,
                      'self-start': index % 2 !== 0,
                    },
                  ])}
                >
                  {index / 2 === 0 ? 'You' : 'Client'}
                </span>
                <div className="flex flex-col p-4 rounded-lg bg-muted">
                  <span>{chat.message}</span>
                  <span
                    className={clsx([
                      'text-xs mt-2',
                      {
                        'self-end': index % 2 === 0,
                        'self-start': index % 2 !== 0,
                      },
                    ])}
                  >
                    {format(parseInt(chat.message_time) * 1000, 'dd-MMM hh:mm aa')}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
