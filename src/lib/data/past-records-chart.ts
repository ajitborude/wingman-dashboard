import { type ChartConfig } from '@/components/ui/chart';

export const chartData = [
  { week: 'This Week', consultations: 22, orders_closed: 17 },
  { week: 'Last Week', consultations: 15, orders_closed: 9 },
];

export const chartConfig = {
  consultations: {
    label: 'Consultations',
    color: '#CCFBEF',
  },
  orders_closed: {
    label: 'Orders Closed',
    color: '#134E48',
  },
} satisfies ChartConfig;
