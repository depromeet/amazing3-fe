import type { ChangeEvent, ChangeEventHandler } from 'react';
import { useState } from 'react';

import { Input, Typography } from '@/components';
import { Textarea } from '@/components/atoms/textarea';

type lineType = 'single' | 'multi';

interface TextInputProps {
  labelName?: string;
  type?: lineType;
  height?: number;
  maxLength: number;
  placeholder: string;
  onChange?: (value: string) => void;
}

export const TextInput = ({
  labelName = '',
  type = 'single',
  height = 140,
  maxLength,
  placeholder,
  onChange,
}: TextInputProps) => {
  const [text, setText] = useState<string>('');
  const handleChangeInput = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (event.target.value.length > maxLength) {
      event.target.value = event.target.value.slice(0, maxLength);
    }
    setText(event.target.value);
    onChange && onChange(event.target.value);
  };

  return (
    <div className="flex flex-col gap-5xs">
      <div className="flex justify-between items-center">
        <Typography type="title3" className="text-gray-50">
          {labelName}
        </Typography>
        <div className="flex">
          <Typography type="title5" className="text-gray-40">
            {text.length}
          </Typography>
          <Typography type="title5" className="text-gray-30">{`/${maxLength}`}</Typography>
        </div>
      </div>
      {type === 'single' ? (
        <Input type="text" placeholder={placeholder} onChange={handleChangeInput} />
      ) : (
        <Textarea
          style={{ height: `${height}px` }}
          placeholder={placeholder}
          onChange={handleChangeInput as ChangeEventHandler<HTMLTextAreaElement>}
        />
      )}
    </div>
  );
};
