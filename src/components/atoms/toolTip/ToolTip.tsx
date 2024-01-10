import { colors } from '@/../styles/theme';
import ReverseTriangleIcon from '@/assets/icons/reverse-triangle.svg';

import { Typography } from '../typography';

interface ToolTipProps {
  title: string;
}

export const ToolTip = ({ title }: ToolTipProps) => {
  return (
    <div className="w-fit px-3xs py-5xs flex items-center justify-center bg-blue-30 rounded-[12px] relative">
      <Typography type="title5" className="text-white">
        {title}
      </Typography>
      <ReverseTriangleIcon width={14} height={10} fill={colors.blue[30]} className="absolute bottom-[-9px]" />
    </div>
  );
};
