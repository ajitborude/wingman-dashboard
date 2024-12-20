import { type ChartConfig } from '@/components/ui/chart';

export const chartData = [
  { day: 'Monday', consultations: 20, incoming: 30, answered: 25 },
  { day: 'Tuesday', consultations: 35, incoming: 32, answered: 27 },
  { day: 'Wednesday', consultations: 25, incoming: 35, answered: 30 },
  { day: 'Thursday', consultations: 35, incoming: 38, answered: 33 },
  { day: 'Friday', consultations: 22, incoming: 40, answered: 38 },
  { day: 'Saturday', consultations: 50, incoming: 45, answered: 32 },
  { day: 'Sunday', consultations: 15, incoming: 45, answered: 28 },
  { day: 'Monday', consultations: 20, incoming: 42, answered: 40 },
  { day: 'Tuesday', consultations: 35, incoming: 40, answered: 42 },
  { day: 'Wednesday', consultations: 25, incoming: 38, answered: 42 },
  { day: 'Thursday', consultations: 35, incoming: 35, answered: 44 },
  { day: 'Friday', consultations: 22, incoming: 38, answered: 46 },
  { day: 'Saturday', consultations: 50, incoming: 42, answered: 47 },
  { day: 'Sunday', consultations: 15, incoming: 46, answered: 49 },
];

export const chartConfig = {
  consultations: {
    label: 'Consultations',
    color: '#FFF3C6',
  },
  incoming: {
    label: 'Incoming',
    color: '#8A94A6',
  },
  answered: {
    label: 'Answered',
    color: '#15B79F',
  },
} satisfies ChartConfig;
