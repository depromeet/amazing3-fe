import type { ChangeEvent } from 'react';

import { Typography } from '@/components';

interface RadioButtonProps {
  name: string;
  description: string;
  value: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

const RadioButton = ({ name, description, value, selectedValue, onChange }: RadioButtonProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <label className="flex gap-[7px] items-center">
      {/* TODO: Radio Button 스타일 적용 필요 */}
      <input
        className="w-[18px] h-[18px]"
        type="radio"
        name={name}
        value={value}
        checked={selectedValue === value}
        onChange={handleChange}
      />
      <Typography type="body3" className="text-gray-50">
        {description}
      </Typography>
    </label>
  );
};

export default RadioButton;
