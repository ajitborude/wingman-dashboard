import { ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { chartConfig, chartData } from '@/lib/data/consultation-chart';
import { PiChatCircleFill } from 'react-icons/pi';
import { Fragment } from 'react/jsx-runtime';
import { Area, Bar, CartesianGrid, ComposedChart, XAxis, YAxis } from 'recharts';

export default function ConsultationCard() {
  return (
    <Fragment>
      <div className="flex flex-col justify-between w-full h-full p-2 sm:p-4 rounded-2xl">
        <div className="flex flex-row items-center justify-start w-full mb-4">
          <PiChatCircleFill className="!w-3 !h-3 text-accent-foreground mr-1" />
          <span className="text-xs font-medium uppercase text-accent-foreground">Consultations</span>
        </div>
        <ChartContainer config={chartConfig} className="w-full h-full min-h-80">
          <ComposedChart data={chartData}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="day" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value: string) => value.slice(0, 3)} />
            <YAxis width={30} tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value: string) => value} />
            <YAxis width={30} yAxisId="right" orientation="right" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value: string) => value} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="consultations" fill="var(--color-consultations)" radius={4} />
            <Area type="monotone" yAxisId="right" dataKey="incoming" stroke="var(--color-incoming)" fill="transparent" strokeDasharray="3 4 5 2" />
            <Area type="monotone" dataKey="answered" stroke="var(--color-answered)" fill="transparent" />
          </ComposedChart>
        </ChartContainer>
      </div>
    </Fragment>
  );
}
