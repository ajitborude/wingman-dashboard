import { IconType } from 'react-icons';
import { FaCheck } from 'react-icons/fa';
import { IoPricetag } from 'react-icons/io5';
import { PiChatCircleFill, PiCoinsFill, PiCoinFill, PiPiggyBankFill } from 'react-icons/pi';

export interface CardData {
  title: string;
  value: string;
  delta: string;
  deltaType: string;
  icon: IconType;
}

export const STATS_DATA = [
  {
    title: 'consultations',
    value: '24',
    delta: '15%',
    deltaType: 'increase',
    icon: PiChatCircleFill,
  },
  {
    title: 'orders placed',
    value: '12',
    delta: '15%',
    deltaType: 'decrease',
    icon: IoPricetag,
  },
  {
    title: 'conversion',
    value: '50%',
    delta: '15%',
    deltaType: 'decrease',
    icon: FaCheck,
  },
  {
    title: 'total sale value',
    value: '$2,400',
    delta: '15%',
    deltaType: 'increase',
    icon: PiCoinsFill,
  },
  {
    title: 'avg order value',
    value: '$240',
    delta: '15%',
    deltaType: 'increase',
    icon: PiCoinFill,
  },
  {
    title: 'commission paid',
    value: '$240',
    delta: '15%',
    deltaType: 'increase',
    icon: PiPiggyBankFill,
  },
];
