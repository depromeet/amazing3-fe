'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input } from '@/components';
import { MAX_DATE_LENGTH_UNTIL_MONTH } from '@/constants';

import { formatDate, isValidDate } from '../../utils/date';

interface DateInputProps {
  intitalValue?: string;
  maxLength: number;
  onChange?: (value: string) => void;
}

export const DateInput = ({ intitalValue = '', maxLength, onChange }: DateInputProps) => {
  const [formattedValue, setFormattedValue] = useState<string>(intitalValue);
  const placeholder = maxLength === MAX_DATE_LENGTH_UNTIL_MONTH ? 'YYYY.MM' : 'YYYY.MM.DD';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');
    let formatted = inputValue;
    let year, month, day;

    if (inputValue.length > 4 && inputValue.length <= 6) {
      year = inputValue.slice(0, 4);
      month = inputValue.slice(4, 6);
      month = +month > 12 ? '12' : +month === 0 ? '0' : month;
      formatted = formatDate([year, month], '.');
    } else if (inputValue.length > 6) {
      year = inputValue.slice(0, 4);
      month = inputValue.slice(4, 6);
      day = inputValue.slice(6, 8);

      if (inputValue.length < 8) {
        formatted = formatDate([year, month, day], '.');
      } else {
        formatted = isValidDate(year, month, day)
          ? formatDate([year, month, day], '.')
          : formatDate([year, month], '.');
      }
    }
    setFormattedValue(formatted);
    onChange && onChange(formatted);
  };

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={formattedValue}
      maxLength={maxLength}
      onChange={handleInputChange}
    />
  );
};
