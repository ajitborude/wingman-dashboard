import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { chartConfig, chartData } from '@/lib/data/past-records-chart';
import { HiChartBar } from 'react-icons/hi';
import { Fragment } from 'react/jsx-runtime';
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';

export default function PastRecordsCard() {
  return (
    <Fragment>
      <div className="flex flex-col justify-between w-full h-full p-2 sm:p-4 rounded-2xl">
        <div className="flex flex-row items-center justify-start w-full mb-4">
          <HiChartBar className="!w-3 !h-3 text-accent-foreground mr-1" />
          <span className="text-xs font-medium uppercase text-accent-foreground">vs past period</span>
        </div>
        <ChartContainer config={chartConfig} className="w-full h-full min-h-80">
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="week" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value: string) => value} />
            <YAxis width={30} tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value: string) => value} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent className="px-2" />} />
            <Bar dataKey="consultations" fill="var(--color-consultations)" radius={4} />
            <Bar dataKey="orders_closed" fill="var(--color-orders_closed)" radius={4} />
          </BarChart>
        </ChartContainer>
      </div>
    </Fragment>
  );
}
