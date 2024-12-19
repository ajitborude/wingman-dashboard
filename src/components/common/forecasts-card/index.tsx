import { IoTrendingUp } from 'react-icons/io5';
import { PiChatCircleFill } from 'react-icons/pi';
import { Fragment } from 'react/jsx-runtime';
import cardBG from '../../../assets/card-bg.svg';

export default function ForecastsCard() {
  return (
    <Fragment>
      <div className="w-full h-full shadow-sm rounded-2xl">
        <img src={cardBG} alt="card-background" className="absolute top-0 left-0 w-full" />
        <div>
          <div className="flex flex-row items-center justify-start w-full">
            <PiChatCircleFill className="!w-3 !h-3 text-muted mr-1" />
            <span className="text-xs font-medium uppercase text-muted">forecasts</span>
          </div>
          <div className="flex flex-col w-full my-8">
            <div className="flex flex-row items-start justify-start w-full text-background">
              <span className="mr-2 text-7xl">15%</span>
              <IoTrendingUp className="!w-10 !h-10" />
            </div>
            <span className="text-lg text-background">forecasted increase in your sales closed by the end of the current month</span>
          </div>
          <div className="flex flex-col w-full my-8">
            <div className="flex flex-row items-start justify-start w-full text-background">
              <span className="mr-2 text-7xl">20%</span>
              <IoTrendingUp className="!w-10 !h-10" />
            </div>
            <span className="text-lg text-background">forecasted increase in your sales closed by the end of the current month</span>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
