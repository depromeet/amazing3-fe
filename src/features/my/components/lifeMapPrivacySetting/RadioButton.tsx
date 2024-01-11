import type { ChangeEvent } from 'react';

import { Typography } from '@/components';

interface RadioButtonProps {
  description: string;
  value: string;
  checked: boolean;
  onChange: (value: string) => void;
}

const RadioButton = ({ description, value, checked, onChange }: RadioButtonProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className="flex gap-[7px] items-center">
      {/* TODO: Radio Button 스타일 적용 필요 */}
      <input className="w-[18px] h-[18px]" type="radio" value={value} checked={checked} onChange={handleChange} />
      <Typography type="body3" className="text-gray-50">
        {description}
      </Typography>
    </label>
  );
};

export default RadioButton;
