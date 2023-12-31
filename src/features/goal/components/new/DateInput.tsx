'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_MONTH } from '@/constants';

type TextAlignType = 'center' | 'left' | 'right' | 'start' | 'end' | 'justify';

interface DateInputProps {
  maxLength: number;
  textAlign?: TextAlignType;
  additionalText?: string;
  onChange?: (value: string) => void;
}

export const DateInput = ({ maxLength, textAlign = 'start', additionalText = '', onChange }: DateInputProps) => {
  const [formattedValue, setFormattedValue] = useState<string>('');
  const placeholder = (maxLength === MAX_DATE_LENGTH_UNTIL_MONTH ? 'YYYY.MM' : 'YYYY.MM.DD') + additionalText;

  const isValidate = (year: string, month: string, day: string) => {
    const date = year + '-' + month + '-' + day;
    return !isNaN(Date.parse(date));
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');
    let formatted = inputValue;
    let year, month, day;

    if (inputValue.length > 4 && inputValue.length <= 6) {
      month = inputValue.slice(4, 6);
      month = +month > 12 ? '12' : +month === 0 ? '0' : month;
      formatted = inputValue.slice(0, 4) + '.' + month;
    } else if (inputValue.length > 6) {
      if (inputValue.length < 8) {
        formatted = inputValue.slice(0, 4) + '.' + inputValue.slice(4, 6) + '.' + inputValue.slice(6, 8);
      } else {
        year = inputValue.slice(0, 4);
        month = inputValue.slice(4, 6);
        day = inputValue.slice(6, 8);
        formatted = isValidate(year, month, day) ? year + '.' + month + '.' + day : year + '.' + month;
      }
    }
    setFormattedValue(formatted);
    onChange && onChange(formatted);
  };

  return (
    <Input
      className={`text-${textAlign}`}
      type="text"
      placeholder={placeholder}
      value={formattedValue}
      maxLength={maxLength}
      onChange={handleInputChange}
    />
  );
};
