import { type ChartConfig } from '@/components/ui/chart';

export const chartData = [
  { day: 'Monday', consultations: 20, incoming: 30, answered: 25 },
  { day: 'Tuesday', consultations: 35, incoming: 40, answered: 27 },
  { day: 'Wednesday', consultations: 25, incoming: 35, answered: 30 },
  { day: 'Thursday', consultations: 35, incoming: 45, answered: 3 },
  { day: 'Friday', consultations: 22, incoming: 25, answered: 22 },
  { day: 'Saturday', consultations: 50, incoming: 60, answered: 50 },
  { day: 'Sunday', consultations: 15, incoming: 25, answered: 15 },
  { day: 'Monday', consultations: 20, incoming: 30, answered: 20 },
  { day: 'Tuesday', consultations: 35, incoming: 40, answered: 35 },
  { day: 'Wednesday', consultations: 25, incoming: 35, answered: 25 },
  { day: 'Thursday', consultations: 35, incoming: 45, answered: 35 },
  { day: 'Friday', consultations: 22, incoming: 25, answered: 22 },
  { day: 'Saturday', consultations: 50, incoming: 60, answered: 50 },
  { day: 'Sunday', consultations: 15, incoming: 25, answered: 15 },
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
