import { useState } from 'react';

import RadioButton from './RadioButton';

interface RadioButtonGroupItemProps {
  description: string;
  value: string;
  checked?: boolean;
}

interface RadioButtonGroupProps {
  items: RadioButtonGroupItemProps[];
}

const RadioButtonGroup = ({ items }: RadioButtonGroupProps) => {
  const initialSelectedItem = items.filter((item) => item.checked === true)[0] || items[0];
  const [value, setValue] = useState<string>(initialSelectedItem.value);

  const handleClickRadioButton = (value: string) => {
    setValue(value);
    // TODO: 공개 설정 수정시 API 요청 추가 및 요청 중 disabled 처리
  };

  return (
    <div className="flex gap-3xs">
      {items.map((item, index) => (
        <RadioButton
          key={index}
          description={item.description}
          value={item.value}
          checked={item.value === value}
          onChange={handleClickRadioButton}
        />
      ))}
    </div>
  );
};

export default RadioButtonGroup;
