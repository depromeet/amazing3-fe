'use client';

import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Input } from '@/components';

interface DateInputProps {
  maxLength: number;
  onChange?: (value: string) => void;
}

export const DateInput = ({ maxLength, onChange }: DateInputProps) => {
  const [formattedValue, setFormattedValue] = useState<string>('');
  const placeholder = maxLength === 7 ? 'YYYY.MM' : 'YYYY.MM.DD';

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value.replace(/\D/g, '');
    let formatted = inputValue;
    let month;

    if (inputValue.length > 4 && inputValue.length <= 6) {
      month = inputValue.slice(4, 6);
      month = +month > 12 ? '12' : +month === 0 ? '0' : month;
      formatted = inputValue.slice(0, 4) + '.' + month;
    } else if (inputValue.length > 6) {
      // TODO: 일자에 대한 검증 로직 필요
      formatted = inputValue.slice(0, 4) + '.' + inputValue.slice(4, 6) + '.' + inputValue.slice(6, 8);
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
